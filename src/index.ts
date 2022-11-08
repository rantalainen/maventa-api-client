import got, { Headers, Method, OptionsOfJSONResponseBody } from 'got';
import { IMaventaApiClientOptions, IMaventaMassPrintingApiClientOptions, IMaventaMassPrintingSendOptions } from './interfaces';
import { InvoiceMethods } from './methods/invoice.methods';
import { ValidatorMethods } from './methods/validator.methods';
import { createHash } from 'crypto';

export class MaventaApiClient {
  options: IMaventaApiClientOptions;

  /** @private */
  accessTokens: any;

  /** @private */
  accessTokensTimeout: any;

  readonly invoices: InvoiceMethods;
  readonly validators: ValidatorMethods;

  constructor(options: IMaventaApiClientOptions) {
    // Set default options
    options.apiBaseUrl = options.apiBaseUrl || 'https://ax.maventa.com';
    options.timeout = options.timeout || 120000;

    if (!options.maventaClientId) {
      throw new Error('Missing options.maventaClientId');
    }
    if (!options.maventaClientSecret) {
      throw new Error('Missing options.maventaClientSecret');
    }
    if (!options.maventaVendorApiKey) {
      throw new Error('Missing options.maventaVendorApiKey');
    }

    this.options = options;

    this.accessTokens = {};
    this.accessTokensTimeout = {};

    this.invoices = new InvoiceMethods(this);
    this.validators = new ValidatorMethods(this);
  }

  /** @private */
  resetAccessToken(scope: string) {
    this.accessTokens[scope] = undefined;
  }

  /** @private */
  async refreshAccessToken(scope: string): Promise<void> {
    // Check if access token is expired
    if (!this.accessTokens?.[scope]) {
      const response: any = await got({
        method: 'POST',
        url: `${this.options.apiBaseUrl}/oauth2/token`,
        timeout: {
          request: this.options.timeout
        },
        form: {
          grant_type: 'client_credentials',
          client_id: this.options.maventaClientId,
          client_secret: this.options.maventaClientSecret,
          scope,
          vendor_api_key: this.options.maventaVendorApiKey
        },
        resolveBodyOnly: true
      }).json();

      this.accessTokens[scope] = response.access_token;

      // Reset access token when it expires
      this.accessTokensTimeout[scope] = setTimeout(() => this.resetAccessToken(scope), response.expires_in * 1000);
    }
  }

  /** @private */
  async getDefaultHttpHeaders(scope: string): Promise<Headers> {
    await this.refreshAccessToken(scope);

    return {
      Authorization: `Bearer ${this.accessTokens[scope]}`
    };
  }

  async request(method: Method, uri: string, body?: any, params?: any, scope?: string, api?: string): Promise<any> {
    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url: `${api ? this.options.apiBaseUrl?.replace('ax', api) : this.options.apiBaseUrl}/${uri}`,
      timeout: {
        request: this.options.timeout
      },
      headers: await this.getDefaultHttpHeaders(scope || 'global company'),
      throwHttpErrors: false,
      responseType: 'json'
    };

    // If body is defined
    if (body) {
      gotOptions.body = body;
    }

    // If params is defined
    if (params) {
      gotOptions.searchParams = params;
    }

    const response = await got(gotOptions);

    // Status code should be 200 OK or 201 Created
    if (![200, 201].includes(response.statusCode)) {
      throw new Error(`Maventa HTTP error ${response.statusCode} (${response.statusMessage}): ${JSON.stringify(response.body)}`);
    }

    return response.body;
  }
}

export class MaventaMassPrintingApiClient {
  options: IMaventaMassPrintingApiClientOptions;

  constructor(options: IMaventaMassPrintingApiClientOptions) {
    // Set default options
    options.apiBaseUrl = options.apiBaseUrl || 'https://payslip.maventa.com';
    options.timeout = options.timeout || 120000;

    if (!options.maventaClientId) {
      throw new Error('Missing options.maventaClientId');
    }
    if (!options.maventaClientSecret) {
      throw new Error('Missing options.maventaClientSecret');
    }
    if (!options.maventaVendorApiKey) {
      throw new Error('Missing options.maventaVendorApiKey');
    }

    this.options = options;
  }

  async request(method: Method, uri: string, form?: any, params?: any): Promise<any> {
    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url: `${this.options.apiBaseUrl}/${uri}`,
      timeout: {
        request: this.options.timeout
      },
      headers: {
        'COMPANY-UUID': this.options.maventaClientId,
        'USER-API-KEY': this.options.maventaClientSecret
      },
      throwHttpErrors: false
    };

    // If form is defined
    if (form) {
      gotOptions.form = form;
    }

    // If params is defined
    if (params) {
      gotOptions.searchParams = params;
    }

    const response = await got(gotOptions);

    // Status code should be 200 OK
    if (![200].includes(response.statusCode)) {
      throw new Error(`Maventa HTTP error ${response.statusCode} (${response.statusMessage}): ${JSON.stringify(response.body)}`);
    }

    return response.body;
  }

  /** Sends a letter to Mass printing service */
  async send(options: IMaventaMassPrintingSendOptions): Promise<string> {
    if (!options.filename) {
      throw new Error('Missing options.filename');
    }
    if (options.filename.toLowerCase().split('.').pop() !== 'zip') {
      throw new Error('Invalid options.filename');
    }
    if (!options.file) {
      throw new Error('Missing options.file');
    }
    options.document_type = options.document_type || 'PDFXML';
    options.letter_class = options.letter_class || 'priority';
    options.color_print = options.color_print || false;
    options.duplex = options.duplex || false;

    const hash = createHash('sha1').update(options.file).digest('hex');

    const form = {
      ...options,
      sw_api_key: this.options.maventaVendorApiKey,
      file: options.file.toString('base64'),
      zipHash: hash,
      hash
    };

    return await this.request('POST', 'input_public', form);
  }
}

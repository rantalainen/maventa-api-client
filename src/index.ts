import got, { Headers, Method, OptionsOfJSONResponseBody } from 'got';
import { IMaventaApiClientOptions } from './interfaces';
import { InvoiceMethods } from './methods/invoice.methods';
import { ValidatorMethods } from './methods/validator.methods';

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

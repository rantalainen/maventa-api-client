import got, { Got, Method, OptionsOfJSONResponseBody } from 'got';
import { Api, ApiConfig, RequestParams } from './api';
import { Api as BillingApi, ApiConfig as BillingApiConfig, RequestParams as BillingRequestParams } from './billing-api';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import {
  IMaventaApiClientAccessToken,
  IMaventaApiClientConfig,
  IMaventaApiClientOptions,
  IMaventaBillingApiClientConfig,
  IMaventaBillingApiClientOptions,
  IMaventaMassPrintingApiClientOptions,
  IMaventaMassPrintingSendOptions,
  IMaventaPayslipReceiverServiceClientOptions,
  IPayrollContractCustomerId,
  IPayslipBatchId,
  IPayslipProcessingStatusAck
} from './interfaces';
import { FileBuffer } from './file-buffer';
import { createHash } from 'crypto';
import https from 'https';
import CacheableLookup from 'cacheable-lookup';
import FormData from 'form-data';
import JSZip from 'jszip';
import { createClientAsync, Client } from 'soap';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class MaventaApiClient {
  options: IMaventaApiClientOptions;
  config: Omit<IMaventaApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: MaventaApiClientInstance;
  private accessTokens: { [scope: string]: IMaventaApiClientAccessToken | undefined } = {};

  constructor(options: IMaventaApiClientOptions, config: IMaventaApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://ax.maventa.com';
    config.timeout = config.timeout || 120000;

    if (!options.clientId) {
      throw new Error('Maventa error: Missing options.clientId');
    }
    if (!options.clientSecret) {
      throw new Error('Maventa error: Missing options.clientSecret');
    }
    if (!options.vendorApiKey) {
      throw new Error('Maventa error: Missing options.vendorApiKey');
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize Maventa Api Client Instance
    this.api = new MaventaApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });
    this.api.setSecurityData(this);

    // Install axios error handler
    this.installErrorHandler();
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message =
          `Maventa HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  private resetAccessToken(scope: string) {
    this.accessTokens[scope] = undefined;
  }

  private async securityWorker(maventa: MaventaApiClient) {
    const axiosRequestConfig: AxiosRequestConfig = {};
    const scope = maventa.options.scope || 'eui';
    let accessToken = maventa.accessTokens[scope];

    // Check if access token is expired
    if (!accessToken) {
      const response = await maventa.api.token.postOauth2Token({
        grant_type: 'client_credentials',
        scope,
        client_id: maventa.options.clientId,
        client_secret: maventa.options.clientSecret,
        vendor_api_key: maventa.options.vendorApiKey
      });
      accessToken = {
        ...response.data,
        // Reset access token when it expires
        timeout: setTimeout(() => maventa.resetAccessToken(scope), response.data.expires_in * 1000)
      };
      maventa.accessTokens[scope] = accessToken;
    }

    axiosRequestConfig.headers = {
      Authorization: `Bearer ${accessToken.access_token}`
    };

    return axiosRequestConfig;
  }
}

class MaventaApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer;

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type
          });
        } else {
          formData.append(key, this.stringifyFormItem(formItem));
        }
      }

      return formData;
    }, new FormData());
  }

  helpers = {
    /**
     * @description Upload new invoice with Maventa's invoice image.
     *
     * @tags invoices
     * @name PostV1Invoices
     * @summary Upload new invoice
     * @request POST:/v1/invoices
     * @secure
     * @response `201` `InvoicesHttpApiEntitiesInvoice` Upload new invoice
     */
    postInvoice: async (
      fileBuffer: Buffer,
      fileMetadata: { filename: string; contentType: string },
      options: object = {},
      params: RequestParams = {}
    ) => {
      return await this.invoices.postV1Invoices(
        {
          ...options,
          //@ts-ignore
          file: new FileBuffer(fileBuffer, fileMetadata.filename, fileMetadata.contentType)
        },
        params
      );
    },

    /**
     * @description Upload new invoice with invoice image (XML and PDF).
     *
     * @tags invoices
     * @name PostV1Invoices
     * @summary Upload new invoice
     * @request POST:/v1/invoices
     * @secure
     * @response `201` `InvoicesHttpApiEntitiesInvoice` Upload new invoice
     */
    postInvoiceZip: async (invoiceXml: Buffer, invoicePdf: Buffer, options: object = {}, params: RequestParams = {}) => {
      // Initialize JSZip
      const zip = new JSZip();

      // Add invoice XML file to ZIP file
      zip.file('invoice.xml', invoiceXml);

      // Add invoice PDF file to ZIP file
      zip.file('invoice.pdf', invoicePdf);

      // Generate ZIP file
      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

      return await this.invoices.postV1Invoices(
        {
          ...options,
          //@ts-ignore
          file: new FileBuffer(zipBuffer, 'invoice.zip', 'application/zip')
        },
        params
      );
    }
  };
}

export class MaventaMassPrintingApiClient {
  options: IMaventaMassPrintingApiClientOptions;
  gotInstance: Got;

  constructor(options: IMaventaMassPrintingApiClientOptions) {
    // Set default options
    options.apiBaseUrl = options.apiBaseUrl || 'https://payslip.maventa.com';
    options.timeout = options.timeout || 120000;

    if (!options.clientId) {
      throw new Error('Maventa error: Missing options.clientId');
    }
    if (!options.clientSecret) {
      throw new Error('Maventa error: Missing options.clientSecret');
    }
    if (!options.vendorApiKey) {
      throw new Error('Maventa error: Missing options.vendorApiKey');
    }

    this.options = options;

    const gotOptions: any = {};

    // Use internal keepAliveAgent by default
    if (this.options.keepAliveAgent === true || this.options.keepAliveAgent === undefined) {
      gotOptions.keepAliveAgent = httpsAgent;
    } else {
      gotOptions.keepAliveAgent = this.options.keepAliveAgent;
    }

    // Use internal dnsCache by default (falls back to got's dnsCache)
    if (this.options.dnsCache === true || this.options.dnsCache === undefined) {
      gotOptions.dnsCache = true;
    } else {
      gotOptions.dnsCache = this.options.dnsCache;
    }

    // Set gotInstance defaults
    this.gotInstance = got.extend({
      // Agent options
      agent: { https: gotOptions.keepAliveAgent || undefined },

      // DNS caching options
      dnsCache: gotOptions.dnsCache || undefined
    });
  }

  async request(method: Method, uri: string, form?: any, params?: any): Promise<any> {
    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url: `${this.options.apiBaseUrl}/${uri}`,
      timeout: {
        request: this.options.timeout
      },
      headers: {
        'COMPANY-UUID': this.options.clientId,
        'USER-API-KEY': this.options.clientSecret
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

    const response = await this.gotInstance(gotOptions);

    // Status code should be 200 OK
    if (![200].includes(response.statusCode)) {
      throw new Error(`Maventa HTTP error ${response.statusCode} (${response.statusMessage}): ${JSON.stringify(response.body)}`);
    }

    return response.body;
  }

  /** Sends a letter to Mass printing service */
  async send(options: IMaventaMassPrintingSendOptions): Promise<string> {
    if (!options.filename) {
      throw new Error('Maventa error: Missing options.filename');
    }
    if (options.filename.toLowerCase().split('.').pop() !== 'zip') {
      throw new Error('Maventa error: Invalid options.filename');
    }
    if (!options.file) {
      throw new Error('Maventa error: Missing options.file');
    }
    options.document_type = options.document_type || 'PDFXML';
    options.letter_class = options.letter_class || 'priority';
    options.color_print = options.color_print || false;
    options.duplex = options.duplex || false;

    const hash = createHash('sha1').update(options.file).digest('hex');

    const form = {
      ...options,
      sw_api_key: this.options.vendorApiKey,
      file: options.file.toString('base64'),
      zipHash: hash,
      hash
    };

    const response: string = await this.request('POST', 'input_public', form);

    // Response should starts with "OK"
    if (!response.startsWith('OK')) {
      throw new Error(`Maventa send error: ${response}`);
    }

    return response;
  }
}

export class MaventaBillingApiClient {
  options: IMaventaBillingApiClientOptions;
  config: Omit<IMaventaBillingApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: BillingApi<any>;
  readonly maventa: MaventaApiClient;
  private accessTokens: { [scope: string]: IMaventaApiClientAccessToken | undefined } = {};

  constructor(options: IMaventaBillingApiClientOptions, config: IMaventaBillingApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://bling.maventa.com';
    config.timeout = config.timeout || 120000;

    if (!options.clientId) {
      throw new Error('Maventa error: Missing options.clientId');
    }
    if (!options.clientSecret) {
      throw new Error('Maventa error: Missing options.clientSecret');
    }
    if (!options.vendorApiKey) {
      throw new Error('Maventa error: Missing options.vendorApiKey');
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Initialize Maventa Api Client Instance for token fetching
    this.maventa = new MaventaApiClient(
      {
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        vendorApiKey: options.vendorApiKey,
        scope: options.scope
      },
      {
        // Use the same cache and keepAliveAgent as in the parent (Billing Api Client)
        dnsCache: config.dnsCache,
        keepAliveAgent: config.keepAliveAgent
      }
    );

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize Maventa Billing Api Client Instance
    this.api = new BillingApi({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });

    this.api.setSecurityData(this);

    // Install axios error handler
    this.installErrorHandler();
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message =
          `Maventa Billing HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  private resetAccessToken(scope: string) {
    this.accessTokens[scope] = undefined;
  }

  private async securityWorker(maventaBilling: MaventaBillingApiClient) {
    const axiosRequestConfig: AxiosRequestConfig = {};
    const scope = maventaBilling.options.scope || 'billing:reports';
    let accessToken = maventaBilling.accessTokens[scope];

    // Check if access token is expired
    if (!accessToken) {
      // Maventa API Client reference is utilized here to fetch the token
      const response = await maventaBilling.maventa.api.token.postOauth2Token({
        grant_type: 'client_credentials',
        scope,
        client_id: maventaBilling.options.clientId,
        client_secret: maventaBilling.options.clientSecret,
        vendor_api_key: maventaBilling.options.vendorApiKey
      });
      accessToken = {
        ...response.data,
        // Reset access token when it expires
        timeout: setTimeout(() => maventaBilling.resetAccessToken(scope), response.data.expires_in * 1000)
      };
      maventaBilling.accessTokens[scope] = accessToken;
    }

    axiosRequestConfig.headers = {
      Authorization: `Bearer ${accessToken.access_token}`
    };

    return axiosRequestConfig;
  }
}

export class MaventaPayslipReceiverServiceClient {
  options: IMaventaPayslipReceiverServiceClientOptions;

  constructor(options: IMaventaPayslipReceiverServiceClientOptions) {
    // Set default options
    options.apiBaseUrl = options.apiBaseUrl || 'https://verkkopalkka.maventa.fi';

    if (!options.user) {
      throw new Error('Maventa error: Missing options.user');
    }
    if (!options.password) {
      throw new Error('Maventa error: Missing options.password');
    }

    this.options = options;
  }

  /** Creates client for SOAP API endpoints */
  async createSoapClient(): Promise<Client> {
    try {
      const axiosInstance = axios.create();

      const soapClient = await createClientAsync(`${this.options.apiBaseUrl}/Service/PayslipReceiverService.svc?wsdl`, {
        endpoint: `${this.options.apiBaseUrl}/Service/PayslipReceiverService.svc`,
        request: axiosInstance
      });

      soapClient.addSoapHeader({ Username: this.options.user });
      soapClient.addSoapHeader({ Password: this.options.password });

      return soapClient;
    } catch (error) {
      throw error;
    }
  }

  async getContractActiveCustomerVatIdentifiers() {
    try {
      const soapClient = await this.createSoapClient();

      const response = await soapClient.GetContractActiveCustomerVatIdentifiersAsync();
      return response[2];
    } catch (error) {
      throw error;
    }
  }

  /** Activate customer (i.e. the company paying the salary) before delivering payslips. */
  async activateCustomerPayrollContract(
    /** Customer business identity code */
    vatId: string,
    /** Customer name */
    name: string,
    /** An external identifier for the activation, max 32 characters */
    externalIdentifier: string,
    /** Contract begin date in ISO 8601 format. */
    contractBeginDate: string
  ): Promise<IPayrollContractCustomerId> {
    try {
      const soapClient = await this.createSoapClient();

      soapClient.addSoapHeader({ 'tns:VatId': vatId });
      soapClient.addSoapHeader({ 'tns:Name': name });
      soapClient.addSoapHeader({ 'tns:ExternalIdentifier': externalIdentifier });
      soapClient.addSoapHeader({ 'tns:ContractBeginDate': contractBeginDate });

      const response = await soapClient.ActivateCustomerPayrollContractAsync({});
      return response[2];
    } catch (error) {
      throw error;
    }
  }

  async deactivateCustomerPayrollContract(
    /** Customer business identity code */
    vatId: string
  ) {
    try {
      const soapClient = await this.createSoapClient();

      soapClient.addSoapHeader({ 'tns:VatId': vatId });

      const response = await soapClient.DeactivateCustomerPayrollContractAsync({});
      return response[2];
    } catch (error) {
      throw error;
    }
  }

  async submitPayslips(
    /** Array of payslip XML files
     * @filename property including file extension
     * @fileBuffer only one XML payslip per file */
    files: { fileName: string; fileBuffer: Buffer }[],
    /** Used for logging purposes in Maventa */
    batchName: string,
    /** Payslip file version */
    version: '1.1' | '2.0'
  ): Promise<IPayslipBatchId> {
    try {
      const soapClient = await this.createSoapClient();

      /** SubmitPayslips */
      soapClient.addSoapHeader({ 'tns:PayslipVersion': version });
      soapClient.addSoapHeader({ 'tns:OriginalFileName': batchName });
      soapClient.addSoapHeader({ 'tns:Convert': version === '1.1' });

      // Initialize JSZip
      const zip = new JSZip();

      for (const file of files) {
        // Parse folder name from file name
        const folderName = file.fileName.split('.')[0];

        // Add payslip XML file to subfolder in ZIP file
        zip.file(`${folderName}/${file.fileName}`, file.fileBuffer);
      }

      // Generate ZIP file
      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

      const response = await soapClient.SubmitPayslipsAsync({
        'tns:ZipFile': zipBuffer.toString('base64')
      });
      return response[2];
    } catch (error) {
      throw error;
    }
  }

  async getPayslipProcessingStatusAck(
    /** Range start date in ISO 8601 format */
    startDate?: string,
    /** Range end date in ISO 8601 format */
    endDate?: string,
    /**  Specific payslip HeaderData > MessageId */
    messageId?: string,
    /** Batch id */
    batchId?: string
  ): Promise<IPayslipProcessingStatusAck> {
    try {
      const soapClient = await this.createSoapClient();

      if (startDate) soapClient.addSoapHeader({ 'tns:StartDate': startDate });
      if (endDate) soapClient.addSoapHeader({ 'tns:EndDate': endDate });
      if (messageId) soapClient.addSoapHeader({ 'tns:MessageId': messageId });
      if (batchId) soapClient.addSoapHeader({ 'tns:BatchId': batchId });

      const response = await soapClient.GetPayslipProcessingStatusAckAsync();
      return response[2];
    } catch (error) {
      throw error;
    }
  }

  async deletePayslip(
    /** Batch id from submitPayslips */
    batchId?: string,
    /** The SSN of the payslip’s payee */
    personId?: string,
    /** String set in PayslipXML 2.0 when submitting the payslip */
    messageId?: string,
    /** Date of the API receiving the batch in ISO 8601 format */
    receivedDate?: string,
    /** Payslip’s payment date in ISO 8601 format */
    dateOfPayment?: string
  ) {
    try {
      const soapClient = await this.createSoapClient();

      if (batchId) soapClient.addSoapHeader({ 'tns:BatchId': batchId });
      if (personId) soapClient.addSoapHeader({ 'tns:PersonId': personId });
      if (messageId) soapClient.addSoapHeader({ 'tns:MessageId': messageId });
      if (receivedDate) soapClient.addSoapHeader({ 'tns:ReceivedDate': receivedDate });
      if (dateOfPayment) soapClient.addSoapHeader({ 'tns:DateOfPayment': dateOfPayment });

      await soapClient.DeletePayslipAsync();
    } catch (error) {
      throw error;
    }
  }
}

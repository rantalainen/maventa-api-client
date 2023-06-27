import { ApiConfig, APIEntitiesOAuthToken } from './api';
import { ApiConfig as BillingApiConfig } from './billing-api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface IMaventaApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single company) */
  clientId: string;
  /** Maventa client secret (user api key) for authentication (identifies a single user) */
  clientSecret: string;
  /** Maventa vendor api key for authentication (identifies a partner) */
  vendorApiKey: string;
  /**
   * Scopes let you specify what type of access you need and limit access for granted OAuth tokens.
   * Defaults to `eui`.
   */
  scope?: string;
}

export interface IMaventaApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://ax.maventa.com`.
   * Use `https://ax-stage.maventa.com` for testing.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}

export interface IMaventaApiClientAccessToken extends APIEntitiesOAuthToken {
  timeout: NodeJS.Timeout;
}

export interface IMaventaMassPrintingApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single company) */
  clientId: string;
  /** Maventa client secret (user api key) for authentication (identifies a single user) */
  clientSecret: string;
  /** Maventa vendor api key for authentication (identifies a partner) */
  vendorApiKey: string;
  /**
   * API base url,
   * by default: `https://payslip.maventa.com/`.
   * Use `https://payslip-stage.maventa.com` for testing.
   */
  apiBaseUrl?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}

export interface IMaventaMassPrintingSendOptions {
  /** Name of the software (and its version) making the sending. Makes problem solving easier */
  version?: string;
  /** Name of the ZIP package, should be unique */
  filename: string;
  /** ZIP file content */
  file: Buffer;
  /** PDFXML (default value) or EPL */
  document_type?: 'PDFXML' | 'EPL';
  /** Economy or priority (default value). Letter class to use for sending */
  letter_class?: 'economy' | 'priority';
  /** License key of software making the call (255 chars max) */
  license_key?: string;
  /** Additional information about the licensing system */
  license_meta?: string;
  /** Color printing true, black & white false (default value) */
  color_print?: boolean;
  /** Duplex printing for both sides of the letter. Default is false. */
  duplex?: boolean;
}

export interface IMaventaBillingApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single company) */
  clientId: string;
  /** Maventa client secret (user api key) for authentication (identifies a single user) */
  clientSecret: string;
  /** Maventa vendor api key for authentication (identifies a partner) */
  vendorApiKey: string;
  /**
   * Scopes let you specify what type of access you need and limit access for granted OAuth tokens.
   * Defaults to `billing:reports`.
   */
  scope?: string;
}

export interface IMaventaBillingApiClientConfig extends BillingApiConfig<any> {
  /**
   * API base url,
   * by default: `https://bling.maventa.com`.
   * Use `https://bling-stage.maventa.com` for testing.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}

export interface IMaventaPayslipReceiverServiceClientOptions {
  /** Username for authentication */
  user: string;
  /** Password for authentication */
  password: string;
  /**
   * API base url,
   * by default: `https://verkkopalkka.maventa.fi`.
   * Use `https://verkkopalkkademo.maventa.fi` for testing.
   */
  apiBaseUrl?: string;
}

export interface IPayslipProcessingStatusAck {
  Acks: {
    Ack: StatusAck | StatusAck[];
  };
}

type StatusAck = {
  Id: string;
  Timestamp: string;
  ReferencedMessage: {
    MessageId: null | string;
    Timestamp: string;
  };
  Response: string;
  Description: string;
};

export interface IPayslipBatchId {
  DeliveryBatchId: string;
}

export interface IPayrollContractCustomerId {
  CustomerId: string;
}

export interface IContractActiveCustomerVatIdentifiers {
  CustomerVatIds: { string: string | string[] };
}

export interface IDeactivatePayrollContract {
  DeactivationSucceed: 'true' | 'false';
}

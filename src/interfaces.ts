export interface IMaventaApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single company) */
  maventaClientId: string;
  /** Maventa client secret (user api key) for authentication (identifies a single user) */
  maventaClientSecret: string;
  /** Maventa vendor api key for authentication (identifies a partner) */
  maventaVendorApiKey: string;

  /**
   * API base url,
   * by default: `https://ax.maventa.com`.
   * Use `https://ax-stage.maventa.com` for testing.
   */
  apiBaseUrl?: string;

  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
}

export interface IMaventaMassPrintingApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single company) */
  maventaClientId: string;
  /** Maventa client secret (user api key) for authentication (identifies a single user) */
  maventaClientSecret: string;
  /** Maventa vendor api key for authentication (identifies a partner) */
  maventaVendorApiKey: string;

  /**
   * API base url,
   * by default: `https://payslip.maventa.com/`.
   * Use `https://payslip-stage.maventa.com` for testing.
   */
  apiBaseUrl?: string;

  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
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

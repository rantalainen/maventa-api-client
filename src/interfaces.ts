export interface IMaventaApiClientOptions {
  /** Maventa client id (company UUID) for authentication (identifies a single user) */
  maventaClientId: string;
  /** Maventa client secret (api key) for authentication (identifies a single company) */
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

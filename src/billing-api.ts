/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Transaction {
  /** Company name */
  company_id?: string;
  /** Company name */
  company_name?: string;
  /** Company BID */
  company_bid?: string;
  /** Software */
  software_name?: string;
  /** Action name */
  action_name?: string;
  /** Licensing system */
  licensing_system?: string;
  /** License key */
  license_key?: string;
  /** License meta */
  license_meta?: string;
  /** Number of actions */
  action_count?: number;
}

export interface Error {
  /** Error message */
  message?: string;
}

export interface Action {
  /** Action id */
  id?: string;
  /** Software id in the origin system */
  software_origin_id?: string;
  /** Software origin system */
  software_origin?: string;
  /** Company id in the origin system */
  company_origin_id?: string;
  /** Company origin system */
  company_origin?: string;
  /** Action name */
  action_name?: string;
  /** Action id in the origin system */
  origin_id?: string;
  /** Origin system */
  origin?: string;
  /**
   * Action time in the origin system
   * @format date-time
   */
  origin_time?: string;
  /** Action description */
  description?: string;
  /** License key */
  license_key?: string;
  /** License meta */
  license_meta?: string;
  /** Licensing system */
  licensing_system?: string;
  /** Action item count */
  action_item_count?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title AutoInvoice Billing API
 * @version 0.0.72
 *
 * ## Authentication
 *
 * A consumer is authenticated by providing a OAuth 2.0 bearer token in the HTTP Authorization header.
 * The tokens are obtained using the AX API `/oauth2/token` endpoint. More details about the endpoint can be found from [here](https://swagger.maventa.com/#/oauth2/postOauth2Token).
 *
 * Example on fetching a new token:
 *
 * ```
 * curl -X POST "https://ax.maventa.com/oauth2/token" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "grant_type=client_credentials" -F "client_id=COMPANY_UUID" -F "client_secret=USER_API_KEY" -F "scope=billing:reports" -F "vendor_api_key=VENDOR_API_KEY"
 * ```
 *
 * The token endpoint will on success return a JSON with the token and some additional information about the token to the consumer.
 *
 * ```
 * {
 *   "access_token":"THE_TOKEN",
 *   "token_type":"bearer",
 *   "expires_in":3600,
 *   "scope":"billing:reports"
 * }
 * ```
 *
 * The token is to be included in the Authorization header when the actual resource is called.
 * ```
 * curl -X GET "https://bling-stage.maventa.com/billing/api/v2/reports/billing_company_transactions?year=2021&month=1" -H "accept: application/json" -H "Authorization: Bearer THE_TOKEN"
 * ```
 *
 * To reduce overhead it is recommended to reuse the token as long as it's valid.
 *
 *
 * ## Error handling
 *
 * Errors are represented in a simple JSON format.
 * ```
 * {
 *   "message": "The error message in human readable form"
 * }
 * ```
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  billing = {
    /**
     * @description Returns transaction counts that are assigned to the authenticated billing company (partner). The endpoint contains transactions for the current quarter. **Data for the current month is susceptible for change up until the 1st working day of the next month 14:00 EET!** **Current quarter's data is kept until the 15th of the first month of the next quarter.**
     *
     * @tags Billing API V2
     * @name BillingV2ReportsBillingCompanyTransactionsList
     * @request GET:/api/billing/v2/reports/billing_company_transactions
     * @secure
     * @response `200` `(Transaction)[]` Transaction listing for selected month
     * @response `400` `Error` Invalid Request
     * @response `401` `Error` Unauthorized
     * @response `500` `Error` Internal Server Error
     */
    billingV2ReportsBillingCompanyTransactionsList: (
      query?: {
        /** The year for the report */
        year?: number;
        /** The month for the report */
        month?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Transaction[], Error>({
        path: `/api/billing/v2/reports/billing_company_transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new action
     *
     * @tags Billing API V2
     * @name BillingV2ActionsCreate
     * @request POST:/api/billing/v2/actions
     * @secure
     * @response `200` `Action` Action already exist
     * @response `201` `any` Action successfully created
     * @response `400` `Error` Invalid Request
     * @response `401` `Error` Unauthorized
     * @response `500` `Error` Internal Server Error
     */
    billingV2ActionsCreate: (
      query: {
        /** Software id in the source system */
        software_origin_id: string;
        /** Software source system */
        software_origin: string;
        /** Company id in the source system */
        company_origin_id: string;
        /** Company source system */
        company_origin: string;
        /** Action name */
        action_name: string;
        /** Action id in the source system */
        origin_id: string;
        /**
         * Action timestamp in the source system
         * @format date-time
         */
        origin_time: string;
        /** Optional description */
        description?: string;
        /** License key from source system */
        license_key?: string;
        /** License key meta information from source system */
        license_meta?: string;
        /** Number of this same action */
        action_item_count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Action, Error>({
        path: `/api/billing/v2/actions`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}

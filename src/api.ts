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

/** API_Entities_Status model */
export interface APIEntitiesStatus {
  /** Authenticated client_id. Will be company_id for Companies */
  client_id: string;
  /**
   * Tells when the current authentication token will expire
   * @format date-time
   */
  expires_at?: string;
}

/** API_Entities_OAuthToken model */
export interface APIEntitiesOAuthToken {
  /** The access token issued */
  access_token: string;
  /** The type of the token issued */
  token_type: string;
  /**
   * The lifetime in seconds of the access token
   * @format int32
   */
  expires_in: number;
  /** The refresh token, which can be used to obtain new access token */
  refresh_token?: string;
  /** List of scopes granted for token */
  scope?: string;
}

/** API_Entities_OAuthCurrent model */
export interface APIEntitiesOAuthCurrent {
  /** Current user */
  user: APIEntitiesUser;
  /** Current user company */
  company: APIEntitiesCompanyParty;
  /** List of granted scopes */
  scopes?: string[];
}

export interface APIEntitiesUser {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}

export interface APIEntitiesCompanyParty {
  /** Business ID / Organisation number */
  bid?: string;
  /** Name of party */
  name?: string;
  /** Two letter country code of the party */
  country?: string;
  /** VAT number */
  vat?: string;
  /** Company Id (GUID) */
  id: string;
  /** Company has completed the first time wizard */
  wizard_done?: boolean;
  /** Company is disabled */
  disabled?: boolean;
}

/** OdpCompany model */
export interface OdpCompany {
  /**
   * ID of ODP company
   * @format int32
   */
  id: number;
  /** Name of ODP company */
  name?: string;
  /** Organisation number of ODP company */
  bid?: string;
  /** ODP Company state */
  state?: "CREATED" | "TRUSTED" | "DISABLED";
  /** ODP services associated to this ODP company */
  services?: OdpService[];
}

export interface OdpService {
  /** Name of ODP Service */
  name?: string;
}

/** Create network registration request */
export interface PostV1CompanyProfiles {
  /** List of profile names */
  profiles?: string[];
  /** Profile version, eg. EHF30, PEPPOLBIS30 */
  profile_version?: string;
  /** Endpoint identifier */
  endpoint_id?: string;
  /** ISO6523 code of the endpoint_id scheme. eg. 0192 for NO:ORG */
  scheme?: string;
  /** Target network, defaults to PEPPOL */
  network?: string;
  /** Additional network settings */
  network_settings?: object;
}

/** API_Entities_CompanyProfile model */
export interface APIEntitiesCompanyProfile {
  /** Profile unique id */
  id?: string;
  /** Status of profile registration */
  status?: "active" | "pending" | "error";
  /** Latest error related event for the registration */
  last_event?: APIEntitiesCompanyProfileEvent;
  /** Profile name (DEPRECATED) */
  profile?: string;
  /** List of profile names */
  profiles?: string[];
  /** Profile version, eg. EHF30, PEPPOLBIS30 */
  profile_version?: string;
  /** Endpoint identifier */
  endpoint_id?: string;
  /** ISO6523 code of the endpoint_id scheme. eg. 0192 for NO:ORG */
  scheme?: string;
  /** Target network, defaults to PEPPOL */
  network?: string;
  /** Additional network settings */
  network_settings?: object;
}

export interface APIEntitiesCompanyProfileEvent {
  /** Information about the event */
  message?: string;
  /**
   * Created timestamp
   * @format date-time
   */
  created_at: string;
}

/** API_Entities_Error model */
export interface APIEntitiesError {
  /** Error code */
  code?: string;
  /** General error message */
  message?: string;
  /** Details about the error */
  details?: string[];
}

/** Update a network registration */
export interface PatchV1CompanyProfiles {
  /** Additional network settings */
  network_settings?: object;
}

export interface APIEntitiesCompanySettingsCompanyDetails {
  /** Name of the company */
  name?: string;
  /** Main email address */
  email?: string;
  /** URL to company web pages */
  website?: string;
  /** Company's country */
  country?: string;
  /** Company's business id */
  bid?: string;
  /** Company's VAT number */
  vat_number?: string;
}

export interface APIEntitiesCompanySettingsCompanyAddress {
  /** Street address */
  street_address?: string;
  /** Post code */
  post_code?: string;
  /** Post office */
  post_office?: string;
  /** City */
  city?: string;
  /** Country as a two letter country code */
  country?: string;
}

export interface APIEntitiesCompanySettingsCompanyInvoiceNotifications {
  /** Company receives notifications for incoming invoices */
  on_receiving?: APIEntitiesCompanySettingsCompanySendInvoiceEmailOnReceivingData;
  /** Email addresses for sending related errors */
  on_send_errors?: APIEntitiesCompanySettingsCompanySendInvoiceEmailOnSendErrorsData;
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceEmailOnReceivingData {
  /** Enable notifications for incoming invoices */
  enabled?: boolean;
  /** Sent to company email or other email */
  how_to_send?: string;
  /** Email address for receiving notifications for incoming invoices */
  other_email?: string;
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceEmailOnSendErrorsData {
  /** Users get informed on invoice send errors */
  to_user?: boolean;
  /** Email addresses for sending related errors */
  to_emails?: string[];
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceEmail {
  /** Describe if send via email is enabled */
  enabled?: boolean;
  /** Describe which method to use to send invoices via email. */
  how_to_send?: string;
  /** Describes the frequency of email reminder’s for open invoices in days. */
  reminder_frequency?: number;
  /** Define the content to be added to the email */
  content_data?: APIEntitiesCompanySettingsCompanySendInvoiceEmailContentData;
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceEmailContentData {
  /** What message to be added to the sent email */
  note_to_receiver?: string;
  /** Define the content to the added to the email */
  contact?: APIEntitiesCompanySettingsCompanySendInvoiceEmailContentDataContactData;
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceEmailContentDataContactData {
  /** reply-to email, which needs to be verified */
  email?: string;
  /** Name of the person to be contacted */
  name?: string;
  /** Phone number to be contacted */
  phone?: string;
}

export interface APIEntitiesCompanySettingsCompanySendInvoicePrintSettings {
  /** Print service enabled */
  enabled?: boolean;
  /** Print service letter class (FI SE NL only) */
  letter_class?: string;
  /** Print color (FI SE only) */
  color_scheme?: string;
  /** Attachment print */
  attachment_print?: boolean;
  /** Automatic e-invoice marketing page (FI only) */
  marketing_page?: boolean;
  /** Use own PDFs for print service (FI NO SE DK only). NL has always on. */
  use_own_pdf?: boolean;
}

export interface APIEntitiesCompanySettingsCompanySendInvoiceGeneralSettings {
  /** Stop duplicate invoice numbers */
  stop_duplicate_numbers?: boolean;
  /** Hold invoices on multiple recipients */
  hold_multiple_recipients?: boolean;
}

export interface APIEntitiesCompanySettingsCompanyLogos {
  /** Logo used in PDFs */
  pdf?: APIEntitiesCompanySettingsCompanyLogoData;
}

export interface APIEntitiesCompanySettingsCompanyLogoData {
  /** Base64-encoded content for logo */
  content: string;
}

export interface APIEntitiesCompanySettingsCompanyChecks {
  /** List of checks to be executed on invoices received by company */
  on_invoice_receive?: string[];
}

export interface APIEntitiesCompanySettingsCompanyEmailReports {
  /** Email reports interval */
  report_interval?: string;
  /** Email address for reports */
  email_reports?: string[];
}

/** Modify company settings */
export interface PatchV1CompanySettings {
  /** Company details */
  details: APIEntitiesCompanySettingsCompanyDetails;
  /** Company address */
  address: APIEntitiesCompanySettingsCompanyAddress;
  /** Company invoice notifications */
  invoice_notifications: APIEntitiesCompanySettingsCompanyInvoiceNotifications;
  /** Company send invoices via emails */
  send_invoice_email?: APIEntitiesCompanySettingsCompanySendInvoiceEmail;
  /** Company invoice sending print settings */
  send_invoice_print?: APIEntitiesCompanySettingsCompanySendInvoicePrintSettings;
  /** Company invoice sending general settings */
  send_invoice_general?: APIEntitiesCompanySettingsCompanySendInvoiceGeneralSettings;
  /** Company logos */
  logos?: APIEntitiesCompanySettingsCompanyLogos;
  /** Checks to be executed */
  checks?: APIEntitiesCompanySettingsCompanyChecks;
  /** Email reports */
  email_reports?: APIEntitiesCompanySettingsCompanyEmailReports;
}

/** API_Entities_CompanySettings_Settings model */
export interface APIEntitiesCompanySettingsSettings {
  /** Company details */
  details?: APIEntitiesCompanySettingsCompanyDetails;
  /** Company address */
  address?: APIEntitiesCompanySettingsCompanyAddress;
  /** Company invoice notifications */
  invoice_notifications?: APIEntitiesCompanySettingsCompanyInvoiceNotifications;
  /** Company send invoices via emails */
  send_invoice_email?: APIEntitiesCompanySettingsCompanySendInvoiceEmail;
  /** Company invoice sending print settings */
  send_invoice_print?: APIEntitiesCompanySettingsCompanySendInvoicePrintSettings;
  /** Company invoice sending general settings */
  send_invoice_general?: APIEntitiesCompanySettingsCompanySendInvoiceGeneralSettings;
  /** Company logos */
  logos?: APIEntitiesCompanySettingsCompanyLogos;
  /** Checks to be executed */
  checks?: APIEntitiesCompanySettingsCompanyChecks;
  /** Company email reports settings */
  email_reports?: APIEntitiesCompanySettingsCompanyEmailReports;
}

/** API_Entities_CompanyConsumers_Consumer model */
export interface APIEntitiesCompanyConsumersConsumer {
  /** Full name */
  name?: string;
  /** Customer number */
  customer_number?: string;
  /** Reference number */
  reference_number?: string;
  /** Email address */
  email?: string;
  /** Phone number */
  phone?: string;
  /** Status */
  status: ["NEW", "REQUEST_SENT", "ACCEPTED", "ACTIVE", "DELETED", "REJECTED", "ERROR"];
  /**
   * Last update time
   * @format date-time
   */
  updated_at?: string;
}

/** Create new notification subscription */
export interface PostV1CompanyNotifications {
  /** Type of notification. Possible values: WEBHOOK, VENDOR_WEBHOOK */
  destination_type: string;
  /** Notification destination. e.g. URL for webhooks. */
  destination: string;
  /** Type of events */
  events: string[];
}

/** API_Entities_Notifications_Notification model */
export interface APIEntitiesNotificationsNotification {
  /** Notification id */
  id: string;
  /** Type of notification. Possible values: WEBHOOK, VENDOR_WEBHOOK */
  destination_type: string;
  /** Notification destination. e.g. URL for webhooks. */
  destination: string;
  /** Type of events */
  events: string[];
}

/** API_Entities_LinkVendorAPIKey model */
export interface APIEntitiesLinkVendorAPIKey {
  /** Link result */
  state: string;
}

/** Authorize your company. Required to complete KYC process and take company account into use */
export interface PostV1CompanyAuthorization {
  /** Email to send the Visma sign request to. The person signing will be strongly authenticated. */
  auth_email: string;
  /** Locale to use on the signin invitation email, visma sign portal and agreement PDF. */
  locale: "FI" | "NO" | "SE" | "EN" | "NL";
  /** JSON string used to provide proof of KYC process. Mandatory when partner has own KYC process. */
  options?: string;
}

/** API_Entities_CompanyAuthorization model */
export interface APIEntitiesCompanyAuthorization {
  /** The authorization result */
  status: string;
  /**
   * The number of companies that were authorized
   * @format int32
   */
  count?: number;
}

/** API_Entities_CompanyAuthorizationStatus model */
export interface APIEntitiesCompanyAuthorizationStatus {
  /** The authorization state. Possible values are PENDING,SENT,SIGNED,CANCELED,NONE */
  auth_state: string;
  /** The authorization email */
  auth_email: string;
  /** Trustated state of the company. Possible values are VERIFIED,UNVERIFIED,UNKNOWN */
  company_state: string;
}

/** API_Entities_CompanyUsers_NewUser model */
export interface APIEntitiesCompanyUsersNewUser {
  /** User ID */
  id: string;
  /** Email */
  email: string;
  /** First name */
  first_name?: string;
  /** Last name */
  last_name?: string;
  /** Phone number */
  phone?: string;
  notifications_disabled?: boolean;
  emails_disabled?: boolean;
  /** User role */
  role: string;
  /** User API key */
  api_key: string;
}

/** Update user role */
export interface PostV1CompanyUsersUserIdRoles {
  /** User role */
  user_role: "ADMIN" | "USER";
}

/** Update user info */
export interface PatchV1CompanyUsers {
  /** First name */
  first_name?: string;
  /** Last name */
  last_name?: string;
  /** Phone number */
  phone?: string;
  /** If set to true, user will not receive e-mail notifications for their invoices. */
  notifications_disabled?: boolean;
  /** If set to true, user will not receive any e-mail notifications e.g. invoice send errors and such. */
  emails_disabled?: boolean;
}

/** Add a new or existing user to a company */
export interface PostV1CompanyUsers {
  /** User email */
  email: string;
  /** First name */
  first_name: string;
  /** Last name */
  last_name?: string;
  /** Phone number */
  phone?: string;
  /** User role */
  user_role?: "ADMIN" | "USER";
  /** If set to true, user will not receive e-mail notifications for their invoices. */
  notifications_disabled?: boolean;
  /** If set to true, user will not receive any e-mail notifications e.g. invoice send errors and such. */
  emails_disabled?: boolean;
}

/** API_Entities_CompanyUsers_User model */
export interface APIEntitiesCompanyUsersUser {
  /** User ID */
  id: string;
  /** Email */
  email: string;
  /** First name */
  first_name?: string;
  /** Last name */
  last_name?: string;
  /** Phone number */
  phone?: string;
  notifications_disabled?: boolean;
  emails_disabled?: boolean;
  /** User role */
  role: string;
}

/** Start the Receivables service onboarding */
export interface PutV1ServicesReceivables {
  /** IBAN */
  iban: string;
  /** Bank identifier code */
  bic: string;
  /** Bank */
  bank: string;
  /** Contact person */
  contact_person: string;
  /** Contact email */
  contact_email: string;
  /** Customer service email */
  customer_service_email: string;
  /** Customer service phone number */
  customer_service_phone_number?: string;
  /** Contact Phone Number */
  contact_phone_number: string;
  /** Authorization email */
  authorization_email: string;
  /** Party who is responsible for monitoring the payments and adding them to assignments. The value "vfs" means using VFS account number, reference number and PDF image. The value "company" means using senders own account number, reference number and PDF image. */
  accountable_party?: "vfsfi" | "company";
  billing_address: {
    /** Country */
    country: string;
    /** Streets */
    streets: string[];
    /** City */
    city: string;
    /** Zip code */
    zip_code: string;
  };
  /** Postal address if different than the company address */
  postal_address?: {
    /** Country */
    country?: string;
    /** Streets */
    streets?: string[];
    /** City */
    city?: string;
    /** Zip code */
    zip_code?: string;
  };
}

/** ReceivablesService model */
export interface ReceivablesService {
  /** IBAN */
  iban?: string;
  /** Bank identifier code */
  bic?: string;
  /** Bank */
  bank?: string;
  /** Contact person */
  contact_person?: string;
  /** Contact email */
  contact_email?: string;
  /** Customer service email */
  customer_service_email?: string;
  /** Customer service phone number */
  customer_service_phone_number?: string;
  /** Contact Phone Number */
  contact_phone_number?: string;
  /** Authorization email */
  authorization_email?: string;
  /** Party who is responsible for monitoring the payments and adding them to assignments. The value "vfs" means using VFS account number, reference number and PDF image. The value "company" means using senders own account number, reference number and PDF image. */
  accountable_party?: string;
  /** Billing address */
  billing_address?: APIEntitiesVFSFIBillingAddress;
  /** VFSFI data */
  vfsfi?: APIEntitiesVFSFIData;
  /** Service status */
  status?: "DISABLED" | "ACTIVE" | "PENDING";
}

export interface APIEntitiesVFSFIBillingAddress {
  /** Country */
  country?: string;
  /** Streets */
  streets?: string[];
  /** City */
  city?: string;
  /** Zip code */
  zip_code?: string;
}

export interface APIEntitiesVFSFIData {
  /** IBAN */
  iban?: string;
  /** BIC */
  bic?: string;
  /** Account number */
  account_number?: string;
  /** Notes */
  notes?: APIEntitiesVFSFINote[];
}

export interface APIEntitiesVFSFINote {
  /** Phrase */
  phrase?: string;
  /** Code */
  code?: string;
}

/** Create a new ATG agreement */
export interface PostV1ServicesAtg {
  /** Account number linked to agreement */
  account_number: string;
  /**
   * Length of KID
   * @format int32
   */
  kid_length: number;
  /** The reference position in the KID */
  reference_position: string;
  /** The payment type position in the KID */
  payment_type_position: string;
  /** Email for possible agreement signature request if required */
  signer_email: string;
  /** Send notification about ATG invoice by print */
  notification_by_print?: boolean;
  /** Send notification about ATG invoice by email */
  notification_by_email?: boolean;
}

/** API_Entities_CompanyAgreements_Atg model */
export interface APIEntitiesCompanyAgreementsAtg {
  /** Account number */
  account_number?: string;
  /** Length of the KID */
  kid_length?: string;
  /** Reference position in KID */
  reference_position?: string;
  /** Payment type position in KID */
  payment_type_position?: string;
  /** Notifications should be sent as print */
  notification_by_print?: boolean;
  /** Notifications should be sent as email */
  notification_by_email?: boolean;
  /** Agreement status */
  status?: "INACTIVE" | "ACTIVE" | "PENDING";
  /**
   * Agreement creation timestamp
   * @format date-time
   */
  created_at?: string;
}

/** API_Entities_CompanyConsumers_Mandate model */
export interface APIEntitiesCompanyConsumersMandate {
  /** KID */
  kid?: string;
  /** Account number */
  account_number?: string;
  /** Notifications enabled */
  notification?: string;
  /** Status */
  status?: string;
  /** Reference nr from KID */
  reference_nr?: string;
  /** Payment type from KID */
  payment_type?: string;
  /**
   * Entry updated timestamp
   * @format date-time
   */
  updated_at?: string;
}

/** Update existing ATG agreement */
export interface PatchV1ServicesAtg {
  /**
   * Length of KID
   * @format int32
   */
  kid_length: number;
  /** The reference position in the KID */
  reference_position: string;
  /** The payment type position in the KID */
  payment_type_position: string;
  /** Email for possible agreement signature request if required */
  signer_email: string;
  /** Send notification about ATG invoice by print */
  notification_by_print?: boolean;
  /** Send notification about ATG invoice by email */
  notification_by_email?: boolean;
}

/** Make a direct payment */
export interface PostV1ServicesOpInvoiceCreditDirectPayment {
  /** ID of the invoice (UUID) */
  invoice_id: string;
}

/** Make a withdrawal */
export interface PostV1ServicesOpInvoiceCreditWithdrawal {
  /**
   * EUR amount to withdraw
   * @format float
   */
  amount: number;
}

/** OPInvoiceCreditAvailableCredit model */
export interface OPInvoiceCreditAvailableCredit {
  /**
   * Amount withdrawable based on the collateral value or limit
   * @format float
   */
  available_credit_amount?: number;
  /** Only EUR supported */
  currency?: string;
  /**
   * Ongoing month interest accrual at this time
   * @format float
   */
  current_month_interest?: number;
  /**
   * Unpaid capitalized interest from previous months
   * @format float
   */
  interest_balance?: number;
  /**
   * Credit limit
   * @format float
   */
  max_credit_amount?: number;
  /**
   * AI calculated total collateral value (collateral basket) on all open invoices, which due date in in the future(invoice collateral is deducted from basket on due date)
   * @format float
   */
  total_collateral_amount?: number;
  /**
   * Amount of withdrawn loan
   * @format float
   */
  total_withdrawn?: number;
}

/** Start the OP Laskulaina onboarding */
export interface PutV1ServicesOpInvoiceCredit {
  /** Contact email */
  contact_email: string;
  /** IBAN account number */
  iban: string;
  /** Bank identifier */
  bic: string;
  /** Bank name */
  bank: string;
}

/** OPInvoiceCredit model */
export interface OPInvoiceCredit {
  /** Service status */
  status?: "DISABLED" | "ACTIVE" | "PENDING";
  /** Channel user id for the company */
  channel_user_id?: string;
  /** Company contact email */
  contact_email?: string;
  /** Company IBAN account number */
  iban?: string;
  /** Company bank BIC number */
  bic?: string;
  /** Company bank name */
  bank?: string;
  /** Url for the user to sign the agreement */
  activation_url?: string;
  /** Bank account details to be used on invoices */
  op_bank_details?: OPInvoiceCreditBankDetails;
}

export interface OPInvoiceCreditBankDetails {
  /** OP IBAN to be used on invoices */
  iban?: string;
  /** OP BIC to be used on invoices */
  bic?: string;
  /** Transfer clause to be used on invoices */
  transfer_clause?: APIEntitiesCompanyServicesOPInvoiceCreditTransferClause;
}

export interface APIEntitiesCompanyServicesOPInvoiceCreditTransferClause {
  /** Language of the transfer clause */
  language_code?: string;
  /** Contents/text of the transfer clause */
  content?: string;
}

/** Modify settings */
export interface PostV1ServicesOpInvoiceCreditSettings {
  /** Are B2C (business to consumer) invoices counted towards the available credit balance (true) or just passed trough the service (false) */
  b2c_enabled: boolean;
  /**
   * Payback percentage as an integer (eg. 80 means 80%), by default 100. The amount of payments used to pay back the withdrawn loan. If set to 80% it means 20% of each payment will not be used to repay the loan, instead it will be transferred directly to customer.
   * @format int32
   */
  payment_percent: number;
  /**
   * Interest rate as an integer (eg. 2 means 2%)
   * @format int32
   */
  interest_rate: number;
  /**
   * Credit limit
   * @format float
   */
  credit_limit: number;
}

/** OPInvoiceCreditSettings model */
export interface OPInvoiceCreditSettings {
  current?: OPInvoiceCreditSettingsCurrent;
  /** OPInvoiceCreditSettingsOffer model */
  offer?: OPInvoiceCreditSettingsOffer;
}

export interface OPInvoiceCreditSettingsCurrent {
  /** Are B2C (business to consumer) invoices counted towards the available credit balance (true) or just passed trough the service (false) */
  b2c_enabled?: boolean;
  /**
   * Payback percentage as an integer (eg. 80 means 80%), by default 100. The amount of payments used to pay back the withdrawn loan. If set to 80% it means 20% of each payment will not be used to repay the loan, instead it will be transferred directly to customer.
   * @format int32
   */
  payment_percent?: number;
  /**
   * Interest rate as an integer (eg. 2 means 2%)
   * @format int32
   */
  interest_rate?: number;
  /**
   * Credit limit
   * @format float
   */
  credit_limit?: number;
}

/** OPInvoiceCreditSettingsOffer model */
export interface OPInvoiceCreditSettingsOffer {
  /** Are B2C (business to consumer) invoices counted towards the available credit balance (true) or just passed trough the service (false) */
  b2c_enabled?: boolean;
  /**
   * Payback percentage as an integer (eg. 80 means 80%), by default 100. The amount of payments used to pay back the withdrawn loan. If set to 80% it means 20% of each payment will not be used to repay the loan, instead it will be transferred directly to customer.
   * @format int32
   */
  payment_percent?: number;
  /**
   * Interest rate as an integer (eg. 2 means 2%)
   * @format int32
   */
  interest_rate?: number;
  /**
   * Credit limit
   * @format float
   */
  credit_limit?: number;
}

/** API_Entities_B2CNO_Status model */
export interface APIEntitiesB2CNOStatus {
  /** B2CNO Agreement status for company */
  status: "ACTIVE" | "FREE" | "RESERVED" | "FAULT" | "ERROR";
}

/** API_Entities_B2CSE_Agreement model */
export interface APIEntitiesB2CSEAgreement {
  /** Status of the agreement */
  status?: string;
  /** FUI = Faktura Utställar Identitet */
  fui?: string;
  /** Agreement ID */
  agreement_id?: string;
  /** Account Number without dashes (123456) */
  account_number?: string;
  /** Account type (PlusGiro or BankGiro) */
  account_type?: "PlusGiro" | "BankGiro";
}

/** Create B2CSE network registration request */
export interface PostV1ServicesB2CseAgreement {
  /** FUI = Faktura Utställar Identitet */
  fui: string;
  /** Agreement ID */
  agreement_id: string;
  /** Account Number without dashes (123456) */
  account_number: string;
  /** Account type (PlusGiro or BankGiro) */
  account_type: "PlusGiro" | "BankGiro";
}

/** API_Entities_UserCompany model */
export interface APIEntitiesUserCompany {
  /** Unique identifier */
  id?: string;
  /** Name */
  name?: string;
  /** Bid */
  bid?: string;
}

/** API_Entities_Company model */
export interface APIEntitiesCompany {
  id: string;
}

/** Authorize one or multiple companies. Required to complete KYC process and take company account into use */
export interface PostV1CompaniesAuthorizations {
  /** Email to send the Visma sign request to. The person signing will be strongly authenticated. */
  auth_email: string;
  /** Company UUIDs to authorize. Admin user needs to have access to all of the companies given. */
  company_ids: string[];
  /** Locale to use on the signin invitation email, visma sign portal and agreement PDF. */
  locale: "FI" | "NO" | "SE" | "EN" | "NL";
  /** JSON string used to provide proof of KYC process. Mandatory when partner has own KYC process. */
  options?: string;
}

/** Register a participant */
export interface PostV1OperatorParticipants {
  /** Profile name (DEPRECATED) */
  profile?: string;
  /** List of profile names */
  profiles?: string[];
  /** Profile version, eg. EHF30, PEPPOLBIS30 */
  profile_version?: string;
  /** Endpoint identifier */
  endpoint_id?: string;
  /** ISO6523 code of the endpoint_id scheme. eg. 0192 for NO:ORG */
  scheme?: string;
  /** The participants network */
  network: string;
  /** Role of the participant in the network. For example SENDER or RECEIVER. */
  role?: string;
  /** Name of the participant */
  name: string;
  /** Email address for the participant */
  email: string;
  /** Two letter country code of the party */
  country?: string;
  /** Unique external id for the participant */
  external_id: string;
}

/** API_Entities_OperatorParticipant model */
export interface APIEntitiesOperatorParticipant {
  /** Profile unique id */
  id?: string;
  /** Status of profile registration */
  status?: "active" | "pending" | "error";
  /** Latest error related event for the registration */
  last_event?: APIEntitiesCompanyProfileEvent;
  /** List of profile names */
  profiles?: string[];
  /** Profile version, eg. EHF30, PEPPOLBIS30 */
  profile_version?: string;
  /** Endpoint identifier */
  endpoint_id?: string;
  /** ISO6523 code of the endpoint_id scheme. eg. 0192 for NO:ORG */
  scheme?: string;
  /** The participants network */
  network: string;
  /** Role of the participant in the network. For example SENDER or RECEIVER. */
  role?: string;
  /** Name of the participant */
  name: string;
  /** Email address for the participant */
  email: string;
  /** Two letter country code of the party */
  country?: string;
  /** Unique external id for the participant */
  external_id: string;
  /**
   * Last update timestamp
   * @format date-time
   */
  updated_at: string;
}

/** Create new notification subscription */
export interface PostV1OperatorNotifications {
  /** Type of notification. Possible values: WEBHOOK, VENDOR_WEBHOOK */
  destination_type: string;
  /** Notification destination. e.g. URL for webhooks. */
  destination: string;
  /** Type of events */
  events: string[];
}

/** API_Entities_OperatorCompany model */
export interface APIEntitiesOperatorCompany {
  /** unique identifier */
  id?: string;
  /** Name */
  name?: string;
}

/** API_Entities_Endpoint model */
export interface APIEntitiesEndpoint {
  /** Business ID / Organisation number */
  bid?: string;
  /** Available options for sending */
  sending?: string[];
}

/** API_Entities_Consumer model */
export interface APIEntitiesConsumer {
  /** Reference to lookup entry */
  reference_id?: string;
  routes?: {
    /** DPI route information */
    dpi?: APIEntitiesDpiRoute;
    /** Vipps route information */
    vipps?: APIEntitiesVippsRoute;
    /** Netbank via CV registry */
    cv?: APIEntitiesCvRoute;
    /** Netbank via Yes2All registry */
    yes2all?: APIEntitiesYes2AllRoute;
  };
}

export interface APIEntitiesDpiRoute {
  /** Route status. (TEMPORARY_UNAVAILABLE,RECEIVING,NOT_RECEIVING,NOT_AVAILABLE) */
  status?: string;
  /** Additional details about the route */
  details?: string;
}

export interface APIEntitiesVippsRoute {
  /** Route status. (TEMPORARY_UNAVAILABLE,RECEIVING,NOT_RECEIVING,NOT_AVAILABLE) */
  status?: string;
  /** Additional details about the route */
  details?: string;
}

export interface APIEntitiesCvRoute {
  /** Route status. (TEMPORARY_UNAVAILABLE,RECEIVING,NOT_RECEIVING,NOT_AVAILABLE) */
  status?: string;
  /** Additional details about the route */
  details?: string;
}

export interface APIEntitiesYes2AllRoute {
  /** Route status. (TEMPORARY_UNAVAILABLE,RECEIVING,NOT_RECEIVING,NOT_AVAILABLE) */
  status?: string;
  /** Additional details about the route */
  details?: string;
  efaktura_identifier?: string;
}

/** API_Entities_LookupEntryReceiver model */
export interface APIEntitiesLookupEntryReceiver {
  /** Full Electronic Address eg: 0192:123456789 */
  eia?: string;
  /** Information about the EIA */
  identifier?: APIEntitiesIdentifier;
  /** Network the address belongs to */
  network?: string;
  /** Operator the address belongs to */
  operator?: string;
  /** Document profiles supported */
  document_types?: APIEntitiesDocumentType[];
  /** Extra information about the participant */
  participant?: APIEntitiesParticipant;
}

export interface APIEntitiesIdentifier {
  /** The scheme of the identifier */
  scheme?: string;
  /** Name of the electronic address id */
  eaid_name?: string;
  /** Code of the electronic address id */
  eaid_code?: string;
  /** Endpoint id */
  endpoint_id?: string;
}

export interface APIEntitiesDocumentType {
  /** The type of document supported */
  document_type?: string;
  /** Exact definition of the document type */
  document_identifier?: string;
  /** Exact definition of the process */
  process_identifier?: string;
}

export interface APIEntitiesParticipant {
  /** A unique id for the participant */
  id?: string;
  /** Name of the participant */
  name?: string;
  /** Participants Business ID */
  bid?: string;
  /** Two letter country code of the participant */
  country?: string;
}

/** API_Entities_JWKEntries model */
export interface APIEntitiesJWKEntries {
  /** Active keys */
  keys?: APIEntitiesJWKEntry[];
}

export interface APIEntitiesJWKEntry {
  /** Key type */
  kty?: string;
  /** e value */
  e?: string;
  /** n value */
  n?: string;
  /** Key ID */
  kid?: string;
}

/** API_Entities_Operator model */
export interface APIEntitiesOperator {
  /** The id of the operator */
  operator_id?: string;
  /** The name of the operator */
  name?: string;
  /** The country code for this operator */
  country?: string;
}

/** Create a User */
export interface PostV1Users {
  /** Vendor API key */
  vendor_api_key: string;
  /** User email */
  email: string;
  /** User first name */
  first_name?: string;
  /** User last name */
  last_name?: string;
}

/** API_Entities_ApiUser model */
export interface APIEntitiesApiUser {
  user_api_key?: string;
}

/** API_Entities_DocumentFileInDocument model */
export interface APIEntitiesDocumentFileInDocument {
  /** ID of Document File */
  id: string;
  /** File name */
  filename?: string;
  /** File format */
  file_format?: string;
  /** Mime type passed when created or inferred from file extension */
  mimetype?: string;
  /** Direct link for accesing the file content (ex: "https://ax.maventa.com/v1/files/1234") */
  href?: string;
  /**
   * File creation timestamp
   * @format date-time
   */
  created_at?: string;
  /** File type */
  type?: string;
  /** Version of file format (ex.: 20) */
  format_version?: string;
  /** ex: [{ "document_id": "845fd5a3-d59f-4217-b7ec-c849baefb79e", "type": "ATTACHMENT" }] */
  document_file_links?: string;
}

/** API_Entities_Document model */
export interface APIEntitiesDocument {
  /** Id as a GUID */
  id?: string;
  /** Type of document */
  type?:
    | "UNKNOWN"
    | "INVOICE"
    | "CREDIT_NOTE"
    | "ORDER"
    | "ORDER_RESPONSE"
    | "CATALOGUE"
    | "CATALOGUE_RESPONSE"
    | "SELF_BILLING_INVOICE"
    | "DESPATCH_ADVICE"
    | "RECEIPT"
    | "VOUCHER"
    | "BANK_FILE"
    | "REMINDER"
    | "SCAN"
    | "INVOICE_RESPONSE"
    | "MESSAGE_LEVEL_RESPONSE"
    | "EXPRESSION_OF_INTEREST_REQUEST"
    | "EXPRESSION_OF_INTEREST_RESPONSE"
    | "TENDER_STATUS_REQUEST"
    | "CALL_FOR_TENDERS"
    | "TENDER"
    | "TENDER_RECEIPT";
  /** Document identifier */
  document_identifier?: string;
  /** Process identifier */
  process_identifier?: string;
  /** Current status of document */
  status?: "PROCESSING" | "RESERVED" | "DELIVERED" | "CONFIRMED_DELIVERY" | "FAILED";
  /** Document reference */
  reference?: string;
  /** Document number */
  number?: string;
  /** Document sender */
  sender?: APIEntitiesDocumentParty;
  /** Document recipient */
  recipient?: APIEntitiesDocumentRecipientParty;
  /**
   * Document creation time
   * @format date-time
   */
  created_at?: string;
  /**
   * The timestamp when sent document was delivered to the destination route
   * @format date-time
   */
  delivered_at?: string;
  /**
   * The timestamp when received document was delivered to the recipient
   * @format date-time
   */
  received_at?: string;
  /** Latest event information */
  last_event?: APIEntitiesDocumentEvent;
  /** Source format of the document */
  source_format?: string;
  /** Supported document formats */
  supported_formats?: string[];
  /** Transmission id */
  transmission_id?: string;
  /**
   * Document transmission time
   * @format date-time
   */
  transmission_at?: string;
  /** The network document is originated from */
  network?: string;
  /** The origin of the document */
  origin?: string;
  /** External identifier linked to the document */
  external_id?: string;
  /** Files related to the document */
  files?: APIEntitiesDocumentFileInDocument[];
}

export interface APIEntitiesDocumentParty {
  /** Electronic Identifier Address */
  eia?: string;
  /** Business ID / Organisation number */
  bid?: string;
  /** Name of party */
  name?: string;
  /** Two letter country code of the party */
  country?: string;
  /** VAT number */
  vat?: string;
}

export interface APIEntitiesDocumentRecipientParty {
  /** Electronic Identifier Address */
  eia?: string;
  /** Business ID / Organisation number */
  bid?: string;
  /** Name of party */
  name?: string;
  /** Two letter country code of the party */
  country?: string;
  /** VAT number */
  vat?: string;
  /** Company operator */
  operator?: string;
}

/** API_Entities_DocumentEvent model */
export interface APIEntitiesDocumentEvent {
  /** Event code */
  code?: string;
  /** Information about the event */
  message?: string;
  /** More information about the event */
  details?: string;
  /**
   * Created timestamp
   * @format date-time
   */
  created_at: string;
}

/** Update existing document */
export interface PatchV1Documents {
  /**
   * Change the state of the document.
   *                                       Possible values: CONFIRMED_DELIVERY
   */
  status?: string;
}

/** Invoices_HttpApi_Entities_Invoice model */
export interface InvoicesHttpApiEntitiesInvoice {
  /** Invoice ID */
  id?: string;
  /** Current status of document */
  status?: "PENDING" | "DELIVERED" | "FAILED";
  /** Reference number */
  reference?: string;
  /** Invoice number */
  number?: string;
  /** Sending party */
  sender?: InvoicesHttpApiEntitiesInvoiceSenderParty;
  /** Recipient party */
  recipient?: InvoicesHttpApiEntitiesInvoiceRecipientParty;
  /**
   * The timestamp when invoice was received
   * @format date-time
   */
  received_at?: string;
  /**
   * The timestamp when invoice was created
   * @format date-time
   */
  created_at?: string;
  /**
   * Invoice date
   * @format date
   */
  date?: string;
  /**
   * Invoice due date
   * @format date
   */
  date_due?: string;
  /** Format the invoice was created from */
  source_format: string;
  /**
   * Invoice sum
   * @format float
   */
  sum: number;
  /**
   * Invoice sum with tax
   * @format float
   */
  sum_tax: number;
  /** Invoice currency */
  currency: string;
  /** Invoice origin */
  origin?: "INTERNAL" | "EXTERNAL" | "SCAN";
  /** Invoice destination */
  destination?: string;
  /** Custom comment */
  comment?: string;
  /** Files attached to the invoice */
  files?: InvoicesHttpApiEntitiesInvoiceFile[];
  /** Invoice actions */
  actions?: InvoicesHttpApiEntitiesInvoiceAction[];
  /** Data set after resending the invoice */
  revision?: object;
  /** Virtual barcode as a string (Virtuaaliviivakoodi, for FI domestic invoices only, for RECEIVED invoices only) */
  virtual_barcode?: string;
}

export interface InvoicesHttpApiEntitiesInvoiceSenderParty {
  /** Electronic Identifier Address */
  eia?: string;
  /** Business ID / Organisation number */
  bid?: string;
  /** Name of party */
  name?: string;
  /** Two letter country code of the party */
  country?: string;
}

export interface InvoicesHttpApiEntitiesInvoiceRecipientParty {
  /** Electronic Identifier Address */
  eia?: string;
  /** Business ID / Organisation number */
  bid?: string;
  /** Name of party */
  name?: string;
  /** Two letter country code of the party */
  country?: string;
  /** Recipients operator */
  operator?: string;
}

export interface InvoicesHttpApiEntitiesInvoiceFile {
  /** Unique ID of the file */
  id: string;
  /** File name */
  filename?: string;
  /** File format */
  type?: string;
  /** Mime type passed when created or inferred from file extension */
  mimetype?: string;
  /** Direct link for accesing the file content */
  href?: string;
}

/** Invoices_HttpApi_Entities_InvoiceAction model */
export interface InvoicesHttpApiEntitiesInvoiceAction {
  /** The type of event that happened */
  type: "RECEIVED" | "CREATED" | "SENT" | "DELIVERED" | "INFO" | "ERROR";
  /** Channel the event is related to. For example from where the invoice is coming from or where it was sent. */
  channel?: "EINVOICE" | "PRINT" | "SCAN" | "EMAIL";
  /** Additional message related to the event */
  message?: string;
  /**
   * When the event happened
   * @format date-time
   */
  happened_at: string;
}

/** ReportsDefinitions model */
export interface ReportsDefinitions {
  /** User reporting criteria */
  criteria?: Criteria[];
  /** Purpose of user reporting disclaimer text */
  disclaimer_text?: string;
  /** Purpose of user reporting disclaimer text, translated in all supported languages */
  disclaimer_texts?: Translation[];
}

export interface Criteria {
  /** Criteria name */
  name?: string;
  /** Criteria friendly name */
  friendly_name?: string;
  /** Criteria friendly name, translated in all supported languages */
  friendly_names?: Translation[];
  /** Criteria text */
  text?: string;
  /** Criteria text, translated in all supported languages */
  texts?: Translation[];
}

export interface Translation {
  /** Language ISO code the text is translated to */
  lang?: string;
  /** Translated text */
  value?: string;
}

/** Change state for recevied events */
export interface PatchV1InvoicesIdInvoiceEvents {
  /** State to change to */
  state: "CREATED" | "HANDLED";
}

/** Reroutes invoice via print */
export interface PutV1InvoicesIdReroutePrint {
  /** Recipient name */
  recipient_name: string;
  /** Recipient address line 1 */
  recipient_address1: string;
  /** Recipient address line 2 */
  recipient_address2?: string;
  /** Recipient post code */
  recipient_post_code: string;
  /** Recipient post office */
  recipient_post_office: string;
  /** Recipient state */
  recipient_state?: string;
  /** Recipient country */
  recipient_country: string;
}

/** Reroutes invoice via email */
export interface PutV1InvoicesIdRerouteEmail {
  /** Recipient email address */
  recipient_email: string;
}

/** Reroutes invoice via einvoice */
export interface PutV1InvoicesIdRerouteEinvoice {
  /** Recipient electronic invoice address */
  recipient_eia: string;
  /** Recipient operator */
  recipient_operator: string;
}

/** UserReport model */
export interface UserReport {
  /** User report id */
  id?: string;
  /** Bid of reported company */
  company_bid?: string;
  /** Name of reported company */
  company_name?: string;
  /** Country code of reported company */
  company_country_code?: string;
  /** Bank account of reported company */
  company_bank_account?: string;
  /** Id of reporter user */
  reporter_user_id?: string;
  /** Contact email of reporter */
  reporter_contact_email?: string;
  /** Reported invoice id */
  invoice_id?: string;
  /** Selected reasons at report time */
  reasons?: Criteria[];
  /** Additional explanation given by the user at report time */
  additional_explanation?: string;
  /**
   * Timestamp when report was done
   * @format date-time
   */
  report_date?: string;
}

/** Report sender of fraud attempt */
export interface PostV1InvoicesIdReports {
  /** Reporting reason. Can be multiple. */
  reason: (
    | "NONEXISTENT_PRODUCT"
    | "OFFERS_AS_INVOICES"
    | "UNKNOWN_COMPANY"
    | "INVOICE_NOT_FOLLOWING_LAW"
    | "MISLEADING_NAME"
    | "IMPOSSIBLE_TO_CONTACT"
    | "MISLEADING_MARKETING"
    | "COMPANY_NOT_FOLLOWING_LAW"
    | "KNOWN_FOR_FRAUD_ATTEMPTS"
    | "KNOWN_FOR_SUSPICIOUS_ACTIVITIES"
  )[];
  /** Contact email for reporter in case of follow up questions */
  contact_email: string;
  /** Description for reporting with certain reasons */
  description?: string;
}

/** CheckDefinitions model */
export interface CheckDefinitions {
  /** Version of the application the definitions correspond to */
  app_version?: string;
  /** All supported checks with their definitions */
  checks?: CheckDefinition[];
}

export interface CheckDefinition {
  /** Check name */
  name?: string;
  /** Check friendly name */
  friendly_name?: string;
  /** Check friendly name, translated in all supported languages */
  friendly_names?: Translation[];
  /** Check title */
  title?: string;
  /** Check title, translated in all supported languages */
  titles?: Translation[];
  /** Check description */
  description?: string;
  /** Check description, translated in all supported languages */
  descriptions?: Translation[];
  /** Check documentation description */
  doc_description?: string;
  /** Resource type the check is run for */
  resource_type?: string;
  /** Resource scope the check is run for */
  scope?: string;
  /** Resource scope the check is run for, translated in all supported languages */
  scopes?: Translation[];
  /** Sources used when running the check */
  sources?: Source[];
  /** Additional data about the check */
  metadata?: WarningListMetadata;
  /** List of possible results of the check */
  possible_results?: ResultDefinition[];
}

export interface Source {
  /** Source name */
  name?: string;
  /** Source name, translated in all supported languages */
  names?: Translation[];
}

export interface WarningListMetadata {
  /** Warning List criteria */
  criteria?: Criteria[];
}

export interface ResultDefinition {
  /** Status of the check run */
  status?: string;
  /** Status of the returned result of the check  */
  result?: string;
  /** Check result reason text */
  reason?: string;
  /** Check result reason code */
  reason_code?: string;
}

/** Analysis model */
export interface Analysis {
  /** Analysis status */
  analysis_id?: string;
  /** Analysis type */
  analysis_type?: string;
  /** Analysis status */
  analysis_status?: string;
  /** Analysis title */
  analysis_title?: string;
  /** Analysis title, translated in all supported languages */
  analysis_titles?: Translation[];
  /**
   * Timestamp when check was triggered
   * @format date-time
   */
  analysis_trigger_date?: string;
  /** Analysis resource origin */
  analysis_origin?: string;
  /** Result of the analysis */
  analysis_result?: AnalysisResult;
}

export interface AnalysisResult {
  /** Analysis result status */
  status?: string;
  /** Analysis result text */
  text?: string;
  /** Analysis result text, translated in all supported languages */
  texts?: Translation[];
  /** Analysis result reason code */
  reason_code?: string;
  /**
   * Timestamp when check was performed
   * @format date-time
   */
  check_date?: string;
  /** Analysis metadata */
  data?: object;
}

/** Partner_HttpApi_Entities_CompanyLookups model */
export interface PartnerHttpApiEntitiesCompanyLookups {
  /** Company BID */
  company_bid?: string;
  /** Company status (FREE or RESERVED) */
  company_status?: string;
}

/** Partner_HttpApi_Entities_InvoiceEventsSentError model */
export interface PartnerHttpApiEntitiesInvoiceEventsSentError {
  /** Company ID */
  company_id?: string;
  /** Invoice ID */
  invoice_id?: string;
}

/** Partner_HttpApi_Entities_InvoiceEventsReceived model */
export interface PartnerHttpApiEntitiesInvoiceEventsReceived {
  /** Company ID */
  company_id?: string;
  /** Invoice ID */
  invoice_id?: string;
  /** Invoice event state */
  state?: "CREATED" | "HANDLED";
  /**
   * When the event happened
   * @format date-time
   */
  created_at?: string;
}

/** FiBankMessages_HttpApi_Entities_FiBankMessageStatus model */
export interface FiBankMessagesHttpApiEntitiesFiBankMessageStatus {
  /** Current status of message */
  status?: "OK" | "ERROR";
  /** Id for the associated error message if available. Only when status is ERROR */
  error_message_id?: string;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "//ax.maventa.com" });
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
 * @title AutoXChange API
 * @version 0.85.263
 * @baseUrl //ax.maventa.com
 *
 * ### Changelog
 * #### 2023-01-26 06:51 UTC id:8172887b (0.85.263)
 *
 * #### 2023-01-20 11:59 UTC id:4290b9a0 (0.85.262)
 * - Hide Peppol specific document identifier parameters from Swagger
 *
 * #### 2023-01-16 15:44 UTC id:ac442708 (0.85.261)
 *
 * #### 2022-12-30 10:50 UTC id:a45b6e99 (0.85.260)
 * - update ruby version and gems
 *
 * #### 2022-12-23 11:16 UTC id:76efbb0d (0.85.259)
 * - Remove usage of InvoiceActionAdd.new in specs
 * - Update pdf_api_client
 * - Remove usage of InvoiceAction.add_invoice_error from specs
 *
 *
 * ### Credentials
 *
 * The API consumer is authenticated as a company and a user using the Company UUID and the personal User API Key. OAuth2 client_credentials flow is used for authentication, more details about the authentication can be found from the OAuth2 endpoint.
 *
 * ### Timestamps
 *
 * Timestamps returned by the API is be presented as UTC and in the ISO8601 format. Timestamps provided in the requests should also be presented in this way.
 *
 * ```
 * 2016-09-23T09:09:06Z
 * ```
 *
 * ### Experimental endpoints
 *
 * API endpoints tagged with `[EXPERIMENTAL]` should be considered as work in progress making them subject to change.
 *
 * Once the tag is removed, the contracts for these endpoints should be considered stable.
 *
 * ### Error handling
 * Errors are presented using the HTTP status codes 400-599. The response include a more detailed explanation about the error in the body.
 *
 * ```
 * {
 *   "code": "internal_error_code",
 *   "message": "Cleartext explanation of the error that occurred",
 *   "details": [
 *     "More details",
 *     "about the error"
 *   ]
 * }
 * ```
 *
 * ### Generic API errors
 * These error responses can be returned by any of the described endpoints.
 *
 * | HTTP status  |  Description |
 * |---|---|
 * | 400| Bad input parameters or invalid request. More information can be found in the response body.
 * | 401| The consumer does not have access to the requested resource or the provided token is not valid.
 * | 404| The requested resource can not be found or the user does not have access to the resource.
 * | 5XX| A server error has occurred while processing the request.
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  authenticated = {
    /**
     * @description Returns information of currently authenticated identity. Only for testing purposes.
     *
     * @tags status
     * @name GetStatusAuthenticated
     * @summary Status requiring authentication
     * @request GET:/status/authenticated
     * @secure
     * @response `200` `APIEntitiesStatus` Status requiring authentication
     */
    getStatusAuthenticated: (params: RequestParams = {}) =>
      this.request<APIEntitiesStatus, any>({
        path: `/status/authenticated`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  alb = {
    /**
     * No description
     *
     * @tags status
     * @name GetStatusAlb
     * @request GET:/status/alb
     * @response `200` `any` get Alb(s)
     */
    getStatusAlb: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/status/alb`,
        method: "GET",
        ...params,
      }),
  };
  token = {
    /**
     * @description The endpoint enables a registered company to obtain a OAuth 2 Bearer Token, which can be used to access the companys data in all the future API calls. A token will be active for 60 minutes. #### Scopes Scopes let you specify what type of access you need and limit access for granted OAuth tokens. | Scope | Description | |-------|-------------| eui|  Recommended to use when integrating to EUI. Alias for eui:open, company:read, company:write, lookup, receivables:assignments, document:send, document:receive, invoice:receive, invoice:send, analysis| global|                                                                                                                                         Alias for company:read, document:receive, document:send, lookup| company|                                                                                                                                                                   Alias for company:read, company:write| lookup|                                                                                                                                                                  grants access to the lookup operations| document:receive|                                                                                                                                                            grants access to document receive operations| document:send|                                                                                                                                                               grants access to document send operations| invoice:receive|                                                                                                                                                             grants access to invoice receive operations| invoice:send|                                                                                                                                                                grants access to invoice send operations| company:read|                                                                                                                                      grants read access to company settings, profiles and notifications| company:write|                                                                                                                                     grants write access to company settings, profiles and notifications| validate|                                                                                                                                                      grants access to the AutoInvoice validator service| receivables:assignments|                                                                                                                                                 grants access to assignments in the receivables service| analysis|                                                                                                                                                                       grants access to analysis service| billing:reports|                                                                                                                                                                        grants access to billing reports| partner:invoice_delivery_actions|                                                                                                                                                                grants access to partner invoice actions| partner:lookups|                                                                                                                                                                 grants access to partner lookup actions| fi_bank_message:send|                                                                                                                                                        grants access to FI bank message send operations| fi_bank_message:receive|                                                                                                                                                     grants access to FI bank message receive operations| operator:documents:receive|                                                                                                                                                               grants access to fetch received documents| operator:documents:send|                                                                                                                                                                         grants access to send documents| operator:lookup|                                                                                                                                                     grants access to perform actions related to lookups| operator:participants|                                                                                                                                               grants access to perform actions on operator participants| operator:notifications|                                                                                                                                              grants access to perform actions on operator notifications| operator:validate|                                                                                                                                                      grants access to the AutoInvoice validator service| operator:receivables:assignments|                                                                                                                                                    grants access to assignments the receivables service| operator:receivables:assignments:create|                                                                                                                                          grants access to create assignments in the receivables service| operator:receivables:account_statement|                                                                                                                                                                     grants access to account statements| operator:analysis|                                                                                                                                                                       grants access to analysis service| operator:companies|                                                                                                                                                               grants access to fetch operator companies| operator:takeover|                                                                                                                                                             grants access to execute a company takeover| operator:billing:actions|                                                                                                                                                               grants access to operator billing actions| operator:sending_parties:write|                                                                                                                                                                  grants access to write sending parties| operator:supplier_bank_accounts:write|                                                                                                                                                           grants access to write supplier bank accounts| operator:user:create|                                                                                                                                                                          grants access to create a user If no scope is defined, the token request will default to use the scopes ```global``` and ```company```. The granted scopes will be returned in the response. #### Vendor API key and license data To identify the application a valid ```vendor_api_key``` should be provided in the token request. Additional license data can be provided as JSON in the ```license_data``` parameter: ``` { "key": "C84411ED-5639-4B48-83D0-B718BB9DA0F7", // License key of software making the call "meta": { "licensing":   "VLS",       // Information about the licensing system "erp_name":    "Visma ERP", // Name of ERP "erp_version": "1.1",       // Current version number of ERP "erp_user":    "rbaardse"   // Local ERP user name } } ```
     *
     * @tags oauth2
     * @name PostOauth2Token
     * @summary OAuth2 token endpoint
     * @request POST:/oauth2/token
     * @response `200` `APIEntitiesOAuthToken` Granted access token
     */
    postOauth2Token: (
      data: {
        /** The grant type */
        grant_type: "client_credentials";
        /** The client id */
        client_id?: string;
        /** The client secret */
        client_secret?: string;
        /** Scope of the requested token */
        scope?: string;
        /** Software API key */
        vendor_api_key?: string;
        /** License data */
        license_data?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesOAuthToken, any>({
        path: `/oauth2/token`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  current = {
    /**
     * No description
     *
     * @tags oauth2
     * @name GetOauth2Current
     * @summary Fetch information about the authenticated user and company
     * @request GET:/oauth2/current
     * @secure
     * @response `200` `APIEntitiesOAuthCurrent` Fetch information about the authenticated user and company
     */
    getOauth2Current: (params: RequestParams = {}) =>
      this.request<APIEntitiesOAuthCurrent, any>({
        path: `/oauth2/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companies = {
    /**
     * @description Update existing ODP company or create a new one if missing
     *
     * @tags odp
     * @name PatchOdpCompaniesId
     * @request PATCH:/odp/companies/{id}
     * @secure
     * @response `204` `any` Company updated succesfully
     */
    patchOdpCompaniesId: (
      id: number,
      data: {
        /** Is company trusted */
        trusted: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/odp/companies/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Fetch ODP company by id
     *
     * @tags odp
     * @name GetOdpCompaniesId
     * @request GET:/odp/companies/{id}
     * @secure
     * @response `200` `OdpCompany` Fetch ODP company by id
     */
    getOdpCompaniesId: (id: number, params: RequestParams = {}) =>
      this.request<OdpCompany, any>({
        path: `/odp/companies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List all companies without giving params, or check if user belongs to a given company.
     *
     * @tags companies
     * @name GetV1Companies
     * @summary List active companies the user has access to
     * @request GET:/v1/companies
     * @secure
     * @response `200` `(APIEntitiesUserCompany)[]` List active companies the user has access to
     */
    getV1Companies: (
      query?: {
        /** Business id. */
        bid?: string;
        /** Country in ISO 3166-1 alpha-2 format (2 letters) */
        country?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesUserCompany[], any>({
        path: `/v1/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a Company
     *
     * @tags companies
     * @name PostV1Companies
     * @request POST:/v1/companies
     * @response `201` `APIEntitiesCompany` Create a Company
     */
    postV1Companies: (
      data: {
        /** Identifies partner/ERP */
        vendor_api_key: string;
        /** The user API key */
        user_api_key: string;
        /** Company name. Name has to be at least 3 characters long */
        name: string;
        /** Company VAT/Business ID/Organization number (VAT preferred) */
        bid: string;
        /** If company_bid is not a VAT-number, this is set to true to skip VAT-check */
        no_vat: boolean;
        /** Street address */
        address1: string;
        /** Additional address */
        address2?: string;
        /** Postal number/code, */
        post_code: string;
        /** Post office */
        post_office: string;
        /** Registered city */
        city: string;
        /** State of address */
        state?: string;
        /** Country code for company, mandatory. Allowed countries FI, SE, NO, DK, NL */
        country: "FI" | "SE" | "NO" | "DK" | "NL";
        /** Contact email address for company */
        email: string;
        /**
         * Activate Duetto collection service. On by default for Finnish companies
         * @default true
         */
        activate_duetto?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompany, any>({
        path: `/v1/companies`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Authorize one or multiple companies. Required to complete KYC process and take company account into use
     *
     * @tags companies
     * @name PostV1CompaniesAuthorizations
     * @request POST:/v1/companies/authorizations
     * @secure
     * @response `200` `APIEntitiesCompanyAuthorization`
     * @response `202` `APIEntitiesCompanyAuthorization`
     * @response `400` `APIEntitiesError` Bad request
     */
    postV1CompaniesAuthorizations: (
      V1CompaniesAuthorizations: PostV1CompaniesAuthorizations,
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanyAuthorization, APIEntitiesError>({
        path: `/v1/companies/authorizations`,
        method: "POST",
        body: V1CompaniesAuthorizations,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Company authorization status. In order to use company account to send, receive and activate services status needs to be verified
     *
     * @tags companies
     * @name GetV1CompaniesIdStatus
     * @request GET:/v1/companies/{id}/status
     * @secure
     * @response `200` `APIEntitiesCompanyAuthorizationStatus` Company authorization status. In order to use company account to send, receive and activate services status needs to be verified
     */
    getV1CompaniesIdStatus: (id: string, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAuthorizationStatus, any>({
        path: `/v1/companies/${id}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  company = {
    /**
     * No description
     *
     * @tags company
     * @name PostV1CompanyProfiles
     * @summary Create network registration request
     * @request POST:/v1/company/profiles
     * @secure
     * @response `201` `APIEntitiesCompanyProfile` Create network registration request
     * @response `422` `APIEntitiesError` - **profile_name_conflict**: Profile is already registered for given endpoint id - **profile_eia_conflict**: Endpoint id is already in use - **profile_eia_bid_conflict**: Endpoint id does not match the company business id - **profile_not_supported**: Profile is not supported
     */
    postV1CompanyProfiles: (V1CompanyProfiles: PostV1CompanyProfiles, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyProfile, APIEntitiesError>({
        path: `/v1/company/profiles`,
        method: "POST",
        body: V1CompanyProfiles,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyProfiles
     * @summary List network registrations
     * @request GET:/v1/company/profiles
     * @secure
     * @response `200` `(APIEntitiesCompanyProfile)[]` List network registrations
     */
    getV1CompanyProfiles: (
      query?: {
        /** Network filter */
        network?: (
          | "VISMA"
          | "PEPPOL"
          | "NEMHANDEL"
          | "AISPROOM"
          | "BANK"
          | "SCAN"
          | "INEXCHANGE"
          | "VISMASCANNER"
          | "RECEIVABLES"
        )[];
        /** Status filter */
        status?: ("active" | "pending" | "error")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanyProfile[], any>({
        path: `/v1/company/profiles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name PatchV1CompanyProfilesId
     * @summary Update a network registration
     * @request PATCH:/v1/company/profiles/{id}
     * @secure
     * @response `204` `any` Profile updated succesfully
     */
    patchV1CompanyProfilesId: (id: string, V1CompanyProfiles: PatchV1CompanyProfiles, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/company/profiles/${id}`,
        method: "PATCH",
        body: V1CompanyProfiles,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name DeleteV1CompanyProfilesId
     * @summary Delete a network registration
     * @request DELETE:/v1/company/profiles/{id}
     * @secure
     * @response `204` `any` Registration deleted succesfully
     * @response `409` `APIEntitiesError` - **profile_deletion_not_allowed**: Deletion of profile is not allowed
     */
    deleteV1CompanyProfilesId: (id: string, params: RequestParams = {}) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/company/profiles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyProfilesId
     * @summary Fetch a network registration
     * @request GET:/v1/company/profiles/{id}
     * @secure
     * @response `200` `APIEntitiesCompanyProfile` Fetch a network registration
     */
    getV1CompanyProfilesId: (id: string, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyProfile, any>({
        path: `/v1/company/profiles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description ### Company email reports ``` { "email_reports": { "report_interval": "off | daily | weekly | monthly", "email_reports": [ "info@company.com", "reports@company.com" ] } } ``` ### Company checks Currently supported on_invoice_receive checks: SUPPLIER_ACTIVATION, BANK_ACCOUNT_CHANGED, SENDER_BID_STATUS, SENDER_WARNING_LIST, VAT ``` { "checks": { "on_invoice_receive": [ "SUPPLIER_ACTIVATION" ] } } ``` ### Company logos ``` { "logos": { } } ``` ### Company general settings ``` { "send_invoice_general": { "hold_multiple_recipients": false, "stop_duplicate_numbers": false } } ``` ### Company invoice print settings ``` { "send_invoice_print": { "enabled": false, "letter_class": "ECONOMY", "color_scheme": "BLACK_AND_WHITE", "attachment_print": false, "marketing_page": false, "use_own_pdf": false } } ``` ### Company details ``` { "details": { "name": "My Company Ltd", "email": "info@company.com", "website": "https://my.company.com" } } ``` ### Company address ``` { "address": { "street_address": "My street 1", "post_code": "123456", "post_office": "Oslo", "city": "Oslo", "country": "NO" } } ``` ### Company send invoice email related settings ``` { "send_invoice_email": { "enabled": true, "how_to_send": "EMBEDDED | WITH_OBJECTIONS | WITH_LINK (only if enabled is true)", "reminder_frequency": 4, "content_data": { "note_to_receiver": "A message added to the receiver", "contact": { "email": "invoices@company.com (this is validated by sending a link email to the email)", "name": "Info User", "phone": "+555 55 555 5555" } } } } ``` ### Company invoice notification settings ``` { "invoice_notifications": { "on_receiving": { "enabled": true, "how_to_send": "OTHER_EMAIL", "other_email": "info@company.com" }, "on_send_errors": { "to_user": true, "to_emails": [ "info@company.com" ] } } } ```
     *
     * @tags company
     * @name PatchV1CompanySettings
     * @summary Modify company settings
     * @request PATCH:/v1/company/settings
     * @secure
     * @response `204` `any` Settings updated successfully
     * @response `400` `APIEntitiesError` - **invalid_parameters**: Request parameters are invalid
     */
    patchV1CompanySettings: (V1CompanySettings: PatchV1CompanySettings, params: RequestParams = {}) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/company/settings`,
        method: "PATCH",
        body: V1CompanySettings,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanySettings
     * @summary Fetch company settings
     * @request GET:/v1/company/settings
     * @secure
     * @response `200` `APIEntitiesCompanySettingsSettings` Fetch company settings
     */
    getV1CompanySettings: (
      query?: {
        /**
         * Filter the response to only include requested fields.
         *                                     Possible values: invoice_notifications, send_invoice_email, address, details, send_invoice_print, send_invoice_general, logos, checks, email_reports
         */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanySettingsSettings, any>({
        path: `/v1/company/settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyConsumers
     * @summary List B2CNO Consumers
     * @request GET:/v1/company/consumers
     * @secure
     * @response `200` `(APIEntitiesCompanyConsumersConsumer)[]` List B2CNO Consumers
     */
    getV1CompanyConsumers: (
      query?: {
        /** List by phonenumber, name, customer_number and reference_number */
        query?: string;
        /** List of statuses */
        status?: ("NEW" | "REQUEST_SENT" | "ACCEPTED" | "ACTIVE" | "DELETED" | "REJECTED" | "ERROR")[];
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 20
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanyConsumersConsumer[], any>({
        path: `/v1/company/consumers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name PostV1CompanyNotifications
     * @summary Create new notification subscription
     * @request POST:/v1/company/notifications
     * @secure
     * @response `201` `APIEntitiesNotificationsNotification` Create new notification subscription
     */
    postV1CompanyNotifications: (V1CompanyNotifications: PostV1CompanyNotifications, params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification, any>({
        path: `/v1/company/notifications`,
        method: "POST",
        body: V1CompanyNotifications,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyNotifications
     * @summary List notification subscriptions
     * @request GET:/v1/company/notifications
     * @secure
     * @response `200` `(APIEntitiesNotificationsNotification)[]` List notification subscriptions
     */
    getV1CompanyNotifications: (params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification[], any>({
        path: `/v1/company/notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name DeleteV1CompanyNotificationsId
     * @summary Delete a specific notification subscription
     * @request DELETE:/v1/company/notifications/{id}
     * @secure
     * @response `204` `any` Notification subscription was deleted
     */
    deleteV1CompanyNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/company/notifications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyNotificationsId
     * @summary Fetch a specific notification subscription
     * @request GET:/v1/company/notifications/{id}
     * @secure
     * @response `200` `APIEntitiesNotificationsNotification` Notification subscription
     */
    getV1CompanyNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification, any>({
        path: `/v1/company/notifications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Vendor API key link status
     *
     * @tags company
     * @name GetV1CompanyVendors
     * @request GET:/v1/company/vendors
     * @secure
     * @response `200` `APIEntitiesLinkVendorAPIKey` Vendor API key link status
     */
    getV1CompanyVendors: (params: RequestParams = {}) =>
      this.request<APIEntitiesLinkVendorAPIKey, any>({
        path: `/v1/company/vendors`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Unlink vendor API key
     *
     * @tags company
     * @name DeleteV1CompanyVendors
     * @request DELETE:/v1/company/vendors
     * @secure
     * @response `204` `any` Vendor unlinked
     */
    deleteV1CompanyVendors: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/company/vendors`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Link vendor API key
     *
     * @tags company
     * @name PostV1CompanyVendors
     * @request POST:/v1/company/vendors
     * @secure
     * @response `201` `APIEntitiesLinkVendorAPIKey` Link vendor API key
     */
    postV1CompanyVendors: (params: RequestParams = {}) =>
      this.request<APIEntitiesLinkVendorAPIKey, any>({
        path: `/v1/company/vendors`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Authorize your company. Required to complete KYC process and take company account into use
     *
     * @tags company
     * @name PostV1CompanyAuthorization
     * @request POST:/v1/company/authorization
     * @secure
     * @response `200` `APIEntitiesCompanyAuthorization` Sign request sent
     * @response `400` `APIEntitiesError` Bad request
     */
    postV1CompanyAuthorization: (V1CompanyAuthorization: PostV1CompanyAuthorization, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAuthorization, APIEntitiesError>({
        path: `/v1/company/authorization`,
        method: "POST",
        body: V1CompanyAuthorization,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company
     * @name GetV1CompanyAuthorization
     * @summary Company authorization status. In order to use company account to send, receive and activate services status needs to be verified
     * @request GET:/v1/company/authorization
     * @secure
     * @response `200` `APIEntitiesCompanyAuthorizationStatus` Company authorization status. In order to use company account to send, receive and activate services status needs to be verified
     */
    getV1CompanyAuthorization: (params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAuthorizationStatus, any>({
        path: `/v1/company/authorization`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch user info
     *
     * @tags company
     * @name GetV1CompanyUsersUserId
     * @request GET:/v1/company/users/{user_id}
     * @secure
     * @response `200` `APIEntitiesCompanyUsersNewUser`
     */
    getV1CompanyUsersUserId: (userId: number, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyUsersNewUser, any>({
        path: `/v1/company/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update user info
     *
     * @tags company
     * @name PatchV1CompanyUsersUserId
     * @request PATCH:/v1/company/users/{user_id}
     * @secure
     * @response `204` `any`
     */
    patchV1CompanyUsersUserId: (userId: number, V1CompanyUsers: PatchV1CompanyUsers, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/company/users/${userId}`,
        method: "PATCH",
        body: V1CompanyUsers,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Remove a user from this company
     *
     * @tags company
     * @name DeleteV1CompanyUsersUserId
     * @request DELETE:/v1/company/users/{user_id}
     * @secure
     * @response `204` `any`
     */
    deleteV1CompanyUsersUserId: (userId: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/company/users/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update user role
     *
     * @tags company
     * @name PostV1CompanyUsersUserIdRoles
     * @request POST:/v1/company/users/{user_id}/roles
     * @secure
     * @response `204` `any`
     */
    postV1CompanyUsersUserIdRoles: (
      userId: number,
      V1CompanyUsersUserIdRoles: PostV1CompanyUsersUserIdRoles,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/company/users/${userId}/roles`,
        method: "POST",
        body: V1CompanyUsersUserIdRoles,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Add a new or existing user to a company
     *
     * @tags company
     * @name PostV1CompanyUsers
     * @request POST:/v1/company/users
     * @secure
     * @response `200` `APIEntitiesCompanyUsersUser` User was added to company
     * @response `201` `APIEntitiesCompanyUsersNewUser` User was successfully created
     */
    postV1CompanyUsers: (V1CompanyUsers: PostV1CompanyUsers, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyUsersUser, any>({
        path: `/v1/company/users`,
        method: "POST",
        body: V1CompanyUsers,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  services = {
    /**
     * No description
     *
     * @tags services
     * @name DeleteV1ServicesReceivables
     * @summary Disable the Receivables service
     * @request DELETE:/v1/services/receivables
     * @secure
     * @response `204` `any` Service disabled
     */
    deleteV1ServicesReceivables: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/services/receivables`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PutV1ServicesReceivables
     * @summary Start the Receivables service onboarding
     * @request PUT:/v1/services/receivables
     * @secure
     * @response `200` `ReceivablesService` Start the Receivables service onboarding
     */
    putV1ServicesReceivables: (V1ServicesReceivables: PutV1ServicesReceivables, params: RequestParams = {}) =>
      this.request<ReceivablesService, any>({
        path: `/v1/services/receivables`,
        method: "PUT",
        body: V1ServicesReceivables,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesReceivables
     * @summary Current state of the receivables service
     * @request GET:/v1/services/receivables
     * @secure
     * @response `200` `ReceivablesService` Current state of the receivables service
     */
    getV1ServicesReceivables: (params: RequestParams = {}) =>
      this.request<ReceivablesService, any>({
        path: `/v1/services/receivables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PostV1ServicesAtg
     * @summary Create a new ATG agreement
     * @request POST:/v1/services/atg
     * @secure
     * @response `201` `APIEntitiesCompanyAgreementsAtg` Create a new ATG agreement
     */
    postV1ServicesAtg: (V1ServicesAtg: PostV1ServicesAtg, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAgreementsAtg, any>({
        path: `/v1/services/atg`,
        method: "POST",
        body: V1ServicesAtg,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesAtg
     * @summary List ATG agreements
     * @request GET:/v1/services/atg
     * @secure
     * @response `200` `(APIEntitiesCompanyAgreementsAtg)[]` List ATG agreements
     */
    getV1ServicesAtg: (params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAgreementsAtg[], any>({
        path: `/v1/services/atg`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesAtgMandates
     * @summary List B2C ATG mandates
     * @request GET:/v1/services/atg/mandates
     * @secure
     * @response `200` `(APIEntitiesCompanyConsumersMandate)[]` List B2C ATG mandates
     */
    getV1ServicesAtgMandates: (
      query?: {
        /** Find by KID or reference */
        query?: string;
        /**
         * Timestamp for latest update
         * @format date-time
         */
        timestamp?: string;
        /** Status */
        status?: "ACTIVE" | "INACTIVE";
        /** Parse reference and payment type from KID.Only works for <20 results */
        parse_values?: "TRUE" | "FALSE";
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 20
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanyConsumersMandate[], any>({
        path: `/v1/services/atg/mandates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PatchV1ServicesAtgAccountNumber
     * @summary Update existing ATG agreement
     * @request PATCH:/v1/services/atg/{account_number}
     * @secure
     * @response `204` `any` ATG agreement updated succesfully
     */
    patchV1ServicesAtgAccountNumber: (
      accountNumber: string,
      V1ServicesAtg: PatchV1ServicesAtg,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/services/atg/${accountNumber}`,
        method: "PATCH",
        body: V1ServicesAtg,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesAtgAccountNumber
     * @summary Fetch ATG agreement
     * @request GET:/v1/services/atg/{account_number}
     * @secure
     * @response `200` `APIEntitiesCompanyAgreementsAtg` Fetch ATG agreement
     */
    getV1ServicesAtgAccountNumber: (accountNumber: string, params: RequestParams = {}) =>
      this.request<APIEntitiesCompanyAgreementsAtg, any>({
        path: `/v1/services/atg/${accountNumber}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the account statement per day in SEPA XML format
     *
     * @tags services
     * @name GetV1ServicesOpInvoiceCreditAccountStatement
     * @summary Fetch account statement
     * @request GET:/v1/services/op_invoice_credit/account_statement
     * @secure
     * @response `200` `any` Fetch account statement
     * @response `404` `APIEntitiesError` - **op_invoice_credit_no_account_statement_found**: No account statement found
     */
    getV1ServicesOpInvoiceCreditAccountStatement: (
      query: {
        /**
         * Date for which to fetch transactions
         * @format date
         */
        day: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/services/op_invoice_credit/account_statement`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Mark an invoice to be directly paid to the sender instead of the OP Invoice Credit account
     *
     * @tags services
     * @name PostV1ServicesOpInvoiceCreditDirectPayment
     * @summary Make a direct payment
     * @request POST:/v1/services/op_invoice_credit/direct_payment
     * @secure
     * @response `201` `any` Make a direct payment
     */
    postV1ServicesOpInvoiceCreditDirectPayment: (
      V1ServicesOpInvoiceCreditDirectPayment: PostV1ServicesOpInvoiceCreditDirectPayment,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/services/op_invoice_credit/direct_payment`,
        method: "POST",
        body: V1ServicesOpInvoiceCreditDirectPayment,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PostV1ServicesOpInvoiceCreditWithdrawal
     * @summary Make a withdrawal
     * @request POST:/v1/services/op_invoice_credit/withdrawal
     * @secure
     * @response `201` `any` Make a withdrawal
     */
    postV1ServicesOpInvoiceCreditWithdrawal: (
      V1ServicesOpInvoiceCreditWithdrawal: PostV1ServicesOpInvoiceCreditWithdrawal,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/services/op_invoice_credit/withdrawal`,
        method: "POST",
        body: V1ServicesOpInvoiceCreditWithdrawal,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesOpInvoiceCreditAvailableCredit
     * @summary Check the credit balance
     * @request GET:/v1/services/op_invoice_credit/available_credit
     * @secure
     * @response `200` `OPInvoiceCreditAvailableCredit` Check the credit balance
     */
    getV1ServicesOpInvoiceCreditAvailableCredit: (params: RequestParams = {}) =>
      this.request<OPInvoiceCreditAvailableCredit, any>({
        path: `/v1/services/op_invoice_credit/available_credit`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PutV1ServicesOpInvoiceCredit
     * @summary Start the OP Laskulaina onboarding
     * @request PUT:/v1/services/op_invoice_credit
     * @secure
     * @response `200` `OPInvoiceCredit` Start the OP Laskulaina onboarding
     */
    putV1ServicesOpInvoiceCredit: (
      V1ServicesOpInvoiceCredit: PutV1ServicesOpInvoiceCredit,
      params: RequestParams = {},
    ) =>
      this.request<OPInvoiceCredit, any>({
        path: `/v1/services/op_invoice_credit`,
        method: "PUT",
        body: V1ServicesOpInvoiceCredit,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesOpInvoiceCredit
     * @summary Current information about the OP Laskulaina service
     * @request GET:/v1/services/op_invoice_credit
     * @secure
     * @response `200` `OPInvoiceCredit` Current information about the OP Laskulaina service
     * @response `404` `APIEntitiesError` - **op_invoice_credit_not_enabled**: The OP Laskulaina service is not enabled
     */
    getV1ServicesOpInvoiceCredit: (params: RequestParams = {}) =>
      this.request<OPInvoiceCredit, APIEntitiesError>({
        path: `/v1/services/op_invoice_credit`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name PostV1ServicesOpInvoiceCreditSettings
     * @summary Modify settings
     * @request POST:/v1/services/op_invoice_credit/settings
     * @secure
     * @response `201` `any` Modify settings
     */
    postV1ServicesOpInvoiceCreditSettings: (
      V1ServicesOpInvoiceCreditSettings: PostV1ServicesOpInvoiceCreditSettings,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/services/op_invoice_credit/settings`,
        method: "POST",
        body: V1ServicesOpInvoiceCreditSettings,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesOpInvoiceCreditSettings
     * @summary Show current settings
     * @request GET:/v1/services/op_invoice_credit/settings
     * @secure
     * @response `200` `OPInvoiceCreditSettings` Show current settings
     */
    getV1ServicesOpInvoiceCreditSettings: (params: RequestParams = {}) =>
      this.request<OPInvoiceCreditSettings, any>({
        path: `/v1/services/op_invoice_credit/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesOpInvoiceCreditOffer
     * @summary Get an offer for OP Laskulaina before the activation
     * @request GET:/v1/services/op_invoice_credit/offer
     * @secure
     * @response `200` `OPInvoiceCreditSettingsOffer` Get an offer for OP Laskulaina before the activation
     */
    getV1ServicesOpInvoiceCreditOffer: (params: RequestParams = {}) =>
      this.request<OPInvoiceCreditSettingsOffer, any>({
        path: `/v1/services/op_invoice_credit/offer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesB2Cno
     * @summary Information about B2CNO agreement
     * @request GET:/v1/services/b2cno
     * @secure
     * @response `200` `APIEntitiesB2CNOStatus` Information about B2CNO agreement
     */
    getV1ServicesB2Cno: (params: RequestParams = {}) =>
      this.request<APIEntitiesB2CNOStatus, any>({
        path: `/v1/services/b2cno`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags services
     * @name GetV1ServicesB2CnoConsumers
     * @summary List B2CNO Consumers
     * @request GET:/v1/services/b2cno/consumers
     * @secure
     * @response `200` `(APIEntitiesCompanyConsumersConsumer)[]` List B2CNO Consumers
     */
    getV1ServicesB2CnoConsumers: (
      query?: {
        /** List by phonenumber, name, customer_number and reference_number */
        query?: string;
        /** List of statuses */
        status?: ("NEW" | "REQUEST_SENT" | "ACCEPTED" | "ACTIVE" | "DELETED" | "REJECTED" | "ERROR")[];
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 20
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesCompanyConsumersConsumer[], any>({
        path: `/v1/services/b2cno/consumers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description [EXPERIMENTAL] Get status of B2CSE network reqistration request
     *
     * @tags services
     * @name GetV1ServicesB2CseAgreement
     * @summary Get status of B2CSE network reqistration request
     * @request GET:/v1/services/b2cse/agreement
     * @secure
     * @response `200` `APIEntitiesB2CSEAgreement`
     * @response `404` `APIEntitiesError`
     * @response `422` `APIEntitiesError`
     * @response `500` `APIEntitiesError`
     */
    getV1ServicesB2CseAgreement: (params: RequestParams = {}) =>
      this.request<APIEntitiesB2CSEAgreement, APIEntitiesError>({
        path: `/v1/services/b2cse/agreement`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description [EXPERIMENTAL] Open B2CSE network agreement with the details you got from the bank when you made the agreement
     *
     * @tags services
     * @name PostV1ServicesB2CseAgreement
     * @summary Create B2CSE network registration request
     * @request POST:/v1/services/b2cse/agreement
     * @secure
     * @response `204` `any`
     * @response `400` `APIEntitiesError`
     * @response `422` `APIEntitiesError`
     * @response `500` `APIEntitiesError`
     */
    postV1ServicesB2CseAgreement: (
      V1ServicesB2cseAgreement: PostV1ServicesB2CseAgreement,
      params: RequestParams = {},
    ) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/services/b2cse/agreement`,
        method: "POST",
        body: V1ServicesB2cseAgreement,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  operator = {
    /**
     * @description Register a participant
     *
     * @tags operator
     * @name PostV1OperatorParticipants
     * @request POST:/v1/operator/participants
     * @secure
     * @response `201` `APIEntitiesOperatorParticipant` Register a participant
     * @response `422` `APIEntitiesError` - **profile_name_conflict**: Profile is already registered for given endpoint id - **profile_eia_conflict**: Endpoint id is already in use - **profile_eia_bid_conflict**: Endpoint id does not match the company business id - **profile_not_supported**: Profile is not supported - **profile_registry_not_supported**: Provided registry not supported
     */
    postV1OperatorParticipants: (V1OperatorParticipants: PostV1OperatorParticipants, params: RequestParams = {}) =>
      this.request<APIEntitiesOperatorParticipant, APIEntitiesError>({
        path: `/v1/operator/participants`,
        method: "POST",
        body: V1OperatorParticipants,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List participants registered by operator
     *
     * @tags operator
     * @name GetV1OperatorParticipants
     * @request GET:/v1/operator/participants
     * @secure
     * @response `200` `(APIEntitiesOperatorParticipant)[]` List participants registered by operator
     */
    getV1OperatorParticipants: (
      query?: {
        /** Participants external ids */
        external_ids?: string[];
        /**
         * Last update time starting from
         * @format date-time
         */
        updated_at_start?: string;
        /** Profiles */
        profiles?: string[];
        /**
         * Last update time ending at
         * @format date-time
         */
        updated_at_end?: string;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 10
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesOperatorParticipant[], any>({
        path: `/v1/operator/participants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update participant information
     *
     * @tags operator
     * @name PatchV1OperatorParticipantsId
     * @request PATCH:/v1/operator/participants/{id}
     * @secure
     * @response `204` `any` Participant updated succesfully
     */
    patchV1OperatorParticipantsId: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/operator/participants/${id}`,
        method: "PATCH",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete participant
     *
     * @tags operator
     * @name DeleteV1OperatorParticipantsId
     * @request DELETE:/v1/operator/participants/{id}
     * @secure
     * @response `204` `any` Participant deleted succesfully
     */
    deleteV1OperatorParticipantsId: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/operator/participants/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Fetch participant by id
     *
     * @tags operator
     * @name GetV1OperatorParticipantsId
     * @request GET:/v1/operator/participants/{id}
     * @secure
     * @response `200` `APIEntitiesOperatorParticipant` Requested profile
     */
    getV1OperatorParticipantsId: (id: number, params: RequestParams = {}) =>
      this.request<APIEntitiesOperatorParticipant, any>({
        path: `/v1/operator/participants/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create new notification subscription
     *
     * @tags operator
     * @name PostV1OperatorNotifications
     * @request POST:/v1/operator/notifications
     * @secure
     * @response `201` `APIEntitiesNotificationsNotification` Create new notification subscription
     */
    postV1OperatorNotifications: (V1OperatorNotifications: PostV1OperatorNotifications, params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification, any>({
        path: `/v1/operator/notifications`,
        method: "POST",
        body: V1OperatorNotifications,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List notification subscriptions
     *
     * @tags operator
     * @name GetV1OperatorNotifications
     * @request GET:/v1/operator/notifications
     * @secure
     * @response `200` `(APIEntitiesNotificationsNotification)[]` List notification subscriptions
     */
    getV1OperatorNotifications: (params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification[], any>({
        path: `/v1/operator/notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete notification subscription
     *
     * @tags operator
     * @name DeleteV1OperatorNotificationsId
     * @request DELETE:/v1/operator/notifications/{id}
     * @secure
     * @response `204` `any` Notification subscription was deleted
     */
    deleteV1OperatorNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/operator/notifications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Fetch a specific notification subscription
     *
     * @tags operator
     * @name GetV1OperatorNotificationsId
     * @request GET:/v1/operator/notifications/{id}
     * @secure
     * @response `200` `APIEntitiesNotificationsNotification` Notification subscription
     */
    getV1OperatorNotificationsId: (id: string, params: RequestParams = {}) =>
      this.request<APIEntitiesNotificationsNotification, any>({
        path: `/v1/operator/notifications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get company data
     *
     * @tags operator
     * @name GetV1OperatorCompanies
     * @request GET:/v1/operator/companies
     * @secure
     * @response `200` `(APIEntitiesOperatorCompany)[]` Get company data
     */
    getV1OperatorCompanies: (
      query: {
        /** Company business identifier */
        bid: string;
        /** Country in ISO 3166-1 alpha-2 format (2 letters) */
        country: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesOperatorCompany[], any>({
        path: `/v1/operator/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the account statement per day in SEPA XML format
     *
     * @tags operator
     * @name GetV1OperatorReceivablesOpAccountStatement
     * @summary Fetch an account statements for a company
     * @request GET:/v1/operator/receivables/op_account_statement
     * @secure
     * @response `200` `any` Fetch an account statements for a company
     * @response `404` `APIEntitiesError` - **op_invoice_credit_no_account_statement_found**: No account statement found
     */
    getV1OperatorReceivablesOpAccountStatement: (
      query: {
        /** Mandator UUID associated with the company */
        mandator_uuid: string;
        /**
         * Date for which to fetch transactions
         * @format date
         */
        day: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/operator/receivables/op_account_statement`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  lookup = {
    /**
     * @description Fetch sending options for company bid
     *
     * @tags lookup
     * @name GetV1LookupEndpoints
     * @request GET:/v1/lookup/endpoints
     * @secure
     * @response `200` `APIEntitiesEndpoint` Fetch sending options for company bid
     */
    getV1LookupEndpoints: (
      query: {
        /** Business ids. Maximum number of bids: 10 */
        business_ids: string[];
        /** Types of documents sent. Possible values: invoice */
        sending?: string[];
        /** Country in ISO 3166-1 alpha-2 format (2 letters) */
        country?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesEndpoint, any>({
        path: `/v1/lookup/endpoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags lookup
     * @name GetV1LookupConsumers
     * @summary Lookup for consumer recipients
     * @request GET:/v1/lookup/consumers
     * @secure
     * @response `200` `APIEntitiesConsumer` Lookup for consumer recipients
     */
    getV1LookupConsumers: (
      query?: {
        /** Social security number */
        ssn?: string;
        /** Date of birth of recipient for Yes2All queries. Format YYYY-MM-DD */
        date_of_birth?: string;
        /** Phone number for Yes2All or Vipps queries. International format (e.g. +4791234123) */
        phone_number?: string;
        /** Email address of recipient for Yes2All queries */
        email?: string;
        /** First name of recipient for Yes2All queries */
        first_name?: string;
        /** Last name of recipient for Yes2All queries */
        last_name?: string;
        /** Postal code of recipient for Yes2All queries */
        postal_code?: string;
        /** City/post office of recipient for Yes2All queries */
        city?: string;
        /** Reference number for CV registry queries or Yes2All queries */
        reference_number?: string;
        /**
         * What registries to check from. Possible values:
         *                                                 cv,dpi,vipps,yes2all
         */
        routes?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesConsumer, any>({
        path: `/v1/lookup/consumers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Lookup for B2B document receivers
     *
     * @tags lookup
     * @name GetV1LookupReceivers
     * @request GET:/v1/lookup/receivers
     * @secure
     * @response `200` `(APIEntitiesLookupEntryReceiver)[]` Lookup for B2B document receivers
     */
    getV1LookupReceivers: (
      query: {
        /** Networks to search from eg. PEPPOL, INTERNAL, EXTERNAL */
        network: string[];
        /** Full Electronic Address eg: 0192:123456789 */
        eia?: string;
        /** Business identifier */
        bid?: string;
        /** Company name */
        name?: string;
        /** Company country in ISO 3166-1 alpha-2 format (2 letters) */
        country?: string[];
        /** Document types */
        document_type?: string[];
        /** Allow lookup to use generated eia variations, when no hits are found using the given eia */
        allow_eia_variants?: boolean;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 100
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesLookupEntryReceiver[], any>({
        path: `/v1/lookup/receivers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  jwk = {
    /**
     * @description List the public keys of this API
     *
     * @tags jwk
     * @name GetV1Jwk
     * @request GET:/v1/jwk
     * @response `200` `(APIEntitiesJWKEntries)[]` List the public keys of this API
     */
    getV1Jwk: (params: RequestParams = {}) =>
      this.request<APIEntitiesJWKEntries[], any>({
        path: `/v1/jwk`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  entities = {
    /**
     * @description List operators
     *
     * @tags entities
     * @name GetV1EntitiesOperators
     * @request GET:/v1/entities/operators
     * @secure
     * @response `200` `(APIEntitiesOperator)[]` List operators
     */
    getV1EntitiesOperators: (params: RequestParams = {}) =>
      this.request<APIEntitiesOperator[], any>({
        path: `/v1/entities/operators`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Create a User
     *
     * @tags users
     * @name PostV1Users
     * @request POST:/v1/users
     * @response `201` `APIEntitiesApiUser` Create a User
     */
    postV1Users: (V1Users: PostV1Users, params: RequestParams = {}) =>
      this.request<APIEntitiesApiUser, any>({
        path: `/v1/users`,
        method: "POST",
        body: V1Users,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * @description Get file content
     *
     * @tags files
     * @name GetV1FilesId
     * @request GET:/v1/files/{id}
     * @secure
     * @response `200` `any` Get file content
     */
    getV1FilesId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/files/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description List document files
     *
     * @tags files
     * @name GetV1Files
     * @request GET:/v1/files
     * @secure
     * @response `200` `APIEntitiesDocumentFileInDocument` List document files
     */
    getV1Files: (
      query: {
        /** ID of Document */
        document_id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesDocumentFileInDocument, any>({
        path: `/v1/files`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  documents = {
    /**
     * @description Create document
     *
     * @tags documents
     * @name PostV1Documents
     * @request POST:/v1/documents
     * @secure
     * @response `201` `APIEntitiesDocument` Create document
     * @response `422` `APIEntitiesError` - **document_duplicate_transmission_id**: The provided transmission_id is already in use
     */
    postV1Documents: (
      data: {
        /** File content as a single file */
        file?: File;
        /** File content as one of multiple */
        "files[n][file]"?: File;
        /** File type */
        "files[n][file_type]"?: "PRIMARY_FILE" | "ATTACHMENT" | "OTHER";
        /** Reference to use for the document */
        "references[n][reference_id]"?: string;
        /** Type of reference id */
        "references[n][reference_id_type]"?: "document_id" | "external_storage_key";
        /** Checksum of the referenced content */
        "references[n][checksum]"?: string;
        /** File type */
        "references[n][file_type]"?: "PRIMARY_FILE" | "ATTACHMENT" | "OTHER";
        /** Type of Document */
        type?:
          | "UNKNOWN"
          | "INVOICE"
          | "CREDIT_NOTE"
          | "ORDER"
          | "ORDER_RESPONSE"
          | "CATALOGUE"
          | "CATALOGUE_RESPONSE"
          | "SELF_BILLING_INVOICE"
          | "DESPATCH_ADVICE"
          | "RECEIPT"
          | "VOUCHER"
          | "BANK_FILE"
          | "REMINDER"
          | "SCAN"
          | "INVOICE_RESPONSE"
          | "MESSAGE_LEVEL_RESPONSE"
          | "EXPRESSION_OF_INTEREST_REQUEST"
          | "EXPRESSION_OF_INTEREST_RESPONSE"
          | "TENDER_STATUS_REQUEST"
          | "CALL_FOR_TENDERS"
          | "TENDER"
          | "TENDER_RECEIPT";
        /** Unique transmission ID */
        transmission_id?: string;
        /**
         * Official transmission timestamp
         * @format date-time
         */
        transmission_at?: string;
        /** External identifier linked to the document */
        external_id?: string;
        /** Name of Recipient */
        recipient_name?: string;
        /** Recipient country in ISO 3166-1 alpha-2 format (2 letters) */
        recipient_country?: string;
        /** Electronic Invoicing Address of the recipient */
        recipient_eia?: string;
        /** Operator of Recipient */
        recipient_operator?: string;
        /** Name of Sender */
        sender_name?: string;
        /** Sender country in ISO 3166-1 alpha-2 format (2 letters) */
        sender_country?: string;
        /** Electronic Invoicing Address of the sender */
        sender_eia?: string;
      },
      query?: {
        /** Fields to return in response */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesDocument, APIEntitiesError>({
        path: `/v1/documents`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description #### Pagination and sorting The items per page parameter **per_page** will default to 10 if not provided, also the **page** parameter will default to 1 if not provided. The maximum value of the **per_page** parameter is 100. Default order of the items is descending by the created_at attribute. Additional information about returned page can be extracted from the returned header parameters: - **X-Total**: Total number of items - **X-Total-Pages**: Total number of pages - **X-Page**: Index of the current page - **X-Next-Page**: Index of the next page - **X-Prev-Page**: Index of the previous page - **X-Per-Page**: Items per page - **Link**: Links to the first, previous, next, and last pages can be found from this header The page indexing starts from 1.
     *
     * @tags documents
     * @name GetV1Documents
     * @summary Query documents
     * @request GET:/v1/documents
     * @secure
     * @response `200` `(APIEntitiesDocument)[]` Query documents
     */
    getV1Documents: (
      query?: {
        /** Batch of document IDs. Maximum of 100 per query */
        ids?: string[];
        /** Received or sent documents */
        direction?: "INCOMING" | "OUTGOING" | "RECEIVED" | "SENT";
        /**
         * List of document types.
         *                                                     Possible values: UNKNOWN, INVOICE, CREDIT_NOTE, ORDER, ORDER_RESPONSE, CATALOGUE, CATALOGUE_RESPONSE, SELF_BILLING_INVOICE, DESPATCH_ADVICE, RECEIPT, VOUCHER, BANK_FILE, REMINDER, SCAN, INVOICE_RESPONSE, MESSAGE_LEVEL_RESPONSE, EXPRESSION_OF_INTEREST_REQUEST, EXPRESSION_OF_INTEREST_RESPONSE, TENDER_STATUS_REQUEST, CALL_FOR_TENDERS, TENDER, TENDER_RECEIPT
         */
        type?: string[];
        /**
         * List of document states.
         *                                                     Possible values: PROCESSING, DELIVERED, CONFIRMED_DELIVERY, FAILED
         */
        status?: string[];
        /**
         * Creation time
         * @format date-time
         */
        created_at_start?: string;
        /**
         * Creation time
         * @format date-time
         */
        created_at_end?: string;
        /** Document number */
        number?: string;
        /** Document reference */
        reference?: string;
        /** Query Documents on multiple fields. (Exact matches on id, reference and number) */
        query?: string;
        /**
         * List of fields used for sorting.
         *   Ascending by default, include "-" before the field name to reverse the order (descending).
         *   Supported values: **id, type, status, number, reference, created_at, received_at**
         *   E.g. [-created_at, number]
         */
        sort?: string[];
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 10
         */
        per_page?: number;
        /** Fields to return in response */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesDocument[], any>({
        path: `/v1/documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Document's events
     *
     * @tags documents
     * @name GetV1DocumentsIdEvents
     * @request GET:/v1/documents/{id}/events
     * @secure
     * @response `200` `APIEntitiesDocumentEvent` Document's events
     */
    getV1DocumentsIdEvents: (
      id: string,
      query?: {
        /** Fields to return in response */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesDocumentEvent, any>({
        path: `/v1/documents/${id}/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update existing document
     *
     * @tags documents
     * @name PatchV1DocumentsId
     * @request PATCH:/v1/documents/{id}
     * @secure
     * @response `204` `any` Document updated sucessfully
     * @response `409` `APIEntitiesError` - **document_in_invalid_state**: Document must be in the delivered state
     */
    patchV1DocumentsId: (
      id: string,
      V1Documents: PatchV1Documents,
      query?: {
        /** Fields to return in response */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/documents/${id}`,
        method: "PATCH",
        query: query,
        body: V1Documents,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Document details
     *
     * @tags documents
     * @name GetV1DocumentsId
     * @request GET:/v1/documents/{id}
     * @secure
     * @response `200` `APIEntitiesDocument` Document details
     */
    getV1DocumentsId: (
      id: string,
      query?: {
        /** Content type for the details. Will return the stored metadata as default. */
        return_format?: string[];
        /** Fields to return in response */
        fields?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<APIEntitiesDocument, any>({
        path: `/v1/documents/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * No description
     *
     * @tags invoices
     * @name PostV1Invoices
     * @summary Upload new invoice
     * @request POST:/v1/invoices
     * @secure
     * @response `201` `InvoicesHttpApiEntitiesInvoice` Upload new invoice
     */
    postV1Invoices: (
      data: {
        /**
         * File content. Please make sure to provide the "filename" Content-Disposition header field as well as specified in the rfc2183.
         * @format binary
         */
        file: File;
        /** File format */
        format?:
          | "VISMAXML53"
          | "VISMAXML60"
          | "SVEFAKTURA10"
          | "SEDI"
          | "E2B"
          | "EHF20"
          | "PEPPOLBIS20"
          | "PEPPOLBIS30"
          | "SIUBL11"
          | "SIUBL12"
          | "SIUBL20"
          | "OIOUBL"
          | "VISMAUBL10"
          | "VISMAUBL30"
          | "FINVOICE13"
          | "FINVOICE20"
          | "FINVOICE30"
          | "TEAPPS27"
          | "TEAPPS30";
        /**
         * Only in Norway, set to "consumer" to use route_order
         * @default "b2b"
         */
        recipient_type?: "b2b" | "consumer";
        /** Recipient EIA */
        recipient_eia?: string;
        /** Recipient email address */
        recipient_email?: string;
        /** Recipient operator */
        recipient_operator?: string;
        /** Routes to explicitly disable */
        disabled_routes?: ("print" | "email" | "einvoice")[];
        /** Text that will be added in the email message if invoice is delivered by email */
        sender_comment?: string;
        /** Unique invoice uuid, generated automatically if not specified. */
        uuid?: string;
        /** Set language of PDF generated by us and email what recipient receives. */
        lang?: "FI" | "SE" | "NO" | "DK" | "NL" | "EN";
        /** Consumer routes to use. Leave empty to use default. Note! 'netbank_cvl' and 'netbank_cvl_hold' are deprecated since 05/2022. */
        route_order?: (
          | "netbank"
          | "netbank_cvl"
          | "netbank_cvl_hold"
          | "vipps"
          | "dpi"
          | "email"
          | "print"
          | "silent_failure"
        )[];
        /** Recipient phone number in international format. Used in Yes2All lookups. */
        recipient_phone_number?: string;
        /**
         * Recipient date of birth in YYYY-MM-DD format. Used in Yes2All lookups.
         * @format date
         */
        recipient_date_of_birth?: string;
        /** Recipient unique eFaktura ID */
        recipient_efaktura_id?: string;
        /** B2C document type for special documents */
        b2cno_document_type?:
          | "INVOICE"
          | "CREDIT_NOTE"
          | "REMINDER"
          | "COLLECTION_NOTICE"
          | "DUNNING"
          | "PAYMENT_REQUEST"
          | "ENFORCEMENT_WARNING";
        /** PaymentInstructionIdentifier, used in Finnish B2C invoicing only. */
        payment_instruction_identifier?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoicesHttpApiEntitiesInvoice, any>({
        path: `/v1/invoices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoices
     * @name GetV1Invoices
     * @summary List invoices
     * @request GET:/v1/invoices
     * @secure
     * @response `200` `(InvoicesHttpApiEntitiesInvoice)[]` List invoices
     */
    getV1Invoices: (
      query?: {
        /**
         * Received or sent invoices
         * @default "RECEIVED"
         */
        direction?: "RECEIVED" | "SENT";
        /** Invoice status */
        status?: ("PENDING" | "DELIVERED" | "FAILED")[];
        /** Batch of invoice IDs. Maximum of 100 per query */
        ids?: string[];
        /** Invoice number */
        number?: string;
        /** Invoice reference */
        reference?: string;
        /**
         * Received at start timestamp
         * @format date-time
         */
        received_at_start?: string;
        /**
         * Received at end timestamp
         * @format date-time
         */
        received_at_end?: string;
        /**
         * Created at start timestamp
         * @format date-time
         */
        created_at_start?: string;
        /**
         * Created at end timestamp
         * @format date-time
         */
        created_at_end?: string;
        /**
         * List of fields used for sorting.
         *                               Ascending by default, include "-" before the field name to reverse the order (descending).
         *                               Supported values: **received_at**
         *                               E.g. -received_at
         */
        sort?: string[];
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 10
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoicesHttpApiEntitiesInvoice[], any>({
        path: `/v1/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get useful definitions for user reports
     *
     * @tags invoices
     * @name GetV1InvoicesReportsDefinitions
     * @request GET:/v1/invoices/reports/definitions
     * @response `200` `ReportsDefinitions`
     */
    getV1InvoicesReportsDefinitions: (params: RequestParams = {}) =>
      this.request<ReportsDefinitions, any>({
        path: `/v1/invoices/reports/definitions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoices
     * @name PatchV1InvoicesIdInvoiceEvents
     * @summary Change state for recevied events
     * @request PATCH:/v1/invoices/{id}/invoice_events
     * @secure
     * @response `204` `any`
     */
    patchV1InvoicesIdInvoiceEvents: (
      id: string,
      V1InvoicesIdInvoiceEvents: PatchV1InvoicesIdInvoiceEvents,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/invoices/${id}/invoice_events`,
        method: "PATCH",
        body: V1InvoicesIdInvoiceEvents,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoices
     * @name GetV1InvoicesIdActions
     * @summary List invoice actions
     * @request GET:/v1/invoices/{id}/actions
     * @secure
     * @response `200` `(InvoicesHttpApiEntitiesInvoiceAction)[]` List invoice actions
     */
    getV1InvoicesIdActions: (
      id: string,
      query?: {
        /** Action type */
        type?: ("RECEIVED" | "CREATED" | "SENT" | "DELIVERED" | "INFO" | "ERROR")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoicesHttpApiEntitiesInvoiceAction[], any>({
        path: `/v1/invoices/${id}/actions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoices
     * @name GetV1InvoicesId
     * @summary Invoice details
     * @request GET:/v1/invoices/{id}
     * @secure
     * @response `200` `InvoicesHttpApiEntitiesInvoice` Invoice details
     */
    getV1InvoicesId: (
      id: string,
      query?: {
        /** Desired format */
        return_format?:
          | "VISMAXML60"
          | "PEPPOLBIS30"
          | "SIUBL20"
          | "VISMAUBL30"
          | "FINVOICE30"
          | "TEAPPS30"
          | "ORIGINAL_IMAGE"
          | "GENERATED_IMAGE"
          | "ORIGINAL_OR_GENERATED_IMAGE";
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoicesHttpApiEntitiesInvoice, any>({
        path: `/v1/invoices/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags invoices
     * @name GetV1InvoicesIdFilesFileId
     * @summary Fetch file content
     * @request GET:/v1/invoices/{id}/files/{file_id}
     * @secure
     * @response `200` `any` Fetch file content
     */
    getV1InvoicesIdFilesFileId: (id: string, fileId: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/invoices/${id}/files/${fileId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Reroutes invoice via print
     *
     * @tags invoices
     * @name PutV1InvoicesIdReroutePrint
     * @request PUT:/v1/invoices/{id}/reroute/print
     * @secure
     * @response `200` `any` Reroutes invoice via print
     */
    putV1InvoicesIdReroutePrint: (
      id: string,
      V1InvoicesIdReroutePrint: PutV1InvoicesIdReroutePrint,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/invoices/${id}/reroute/print`,
        method: "PUT",
        body: V1InvoicesIdReroutePrint,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Reroutes invoice via email
     *
     * @tags invoices
     * @name PutV1InvoicesIdRerouteEmail
     * @request PUT:/v1/invoices/{id}/reroute/email
     * @secure
     * @response `200` `any` Reroutes invoice via email
     */
    putV1InvoicesIdRerouteEmail: (
      id: string,
      V1InvoicesIdRerouteEmail: PutV1InvoicesIdRerouteEmail,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/invoices/${id}/reroute/email`,
        method: "PUT",
        body: V1InvoicesIdRerouteEmail,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Reroutes invoice via einvoice
     *
     * @tags invoices
     * @name PutV1InvoicesIdRerouteEinvoice
     * @request PUT:/v1/invoices/{id}/reroute/einvoice
     * @secure
     * @response `200` `any` Reroutes invoice via einvoice
     */
    putV1InvoicesIdRerouteEinvoice: (
      id: string,
      V1InvoicesIdRerouteEinvoice: PutV1InvoicesIdRerouteEinvoice,
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/invoices/${id}/reroute/einvoice`,
        method: "PUT",
        body: V1InvoicesIdRerouteEinvoice,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Fetch user reports for invoice
     *
     * @tags invoices
     * @name GetV1InvoicesIdReports
     * @request GET:/v1/invoices/{id}/reports
     * @secure
     * @response `200` `(UserReport)[]` Fetch successfully completed
     * @response `400` `APIEntitiesError` Bad Request
     * @response `401` `APIEntitiesError` Unauthorized
     * @response `403` `APIEntitiesError` Forbidden
     * @response `404` `APIEntitiesError` No user report found
     */
    getV1InvoicesIdReports: (id: string, params: RequestParams = {}) =>
      this.request<UserReport[], APIEntitiesError>({
        path: `/v1/invoices/${id}/reports`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Report sender of fraud attempt
     *
     * @tags invoices
     * @name PostV1InvoicesIdReports
     * @request POST:/v1/invoices/{id}/reports
     * @secure
     * @response `204` `any` Company successfully reported
     * @response `400` `APIEntitiesError` Bad Request
     * @response `401` `APIEntitiesError` Unauthorized
     * @response `403` `APIEntitiesError` Forbidden
     * @response `409` `APIEntitiesError` Conflict: company already reported
     */
    postV1InvoicesIdReports: (id: string, V1InvoicesIdReports: PostV1InvoicesIdReports, params: RequestParams = {}) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/invoices/${id}/reports`,
        method: "POST",
        body: V1InvoicesIdReports,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete user report for invoice
     *
     * @tags invoices
     * @name DeleteV1InvoicesIdReportsReportId
     * @request DELETE:/v1/invoices/{id}/reports/{report_id}
     * @secure
     * @response `204` `any` User report successfully deleted
     * @response `400` `APIEntitiesError` Bad Request
     * @response `401` `APIEntitiesError` Unauthorized
     * @response `403` `APIEntitiesError` Forbidden
     * @response `404` `APIEntitiesError` No user report found
     */
    deleteV1InvoicesIdReportsReportId: (id: string, reportId: string, params: RequestParams = {}) =>
      this.request<any, APIEntitiesError>({
        path: `/v1/invoices/${id}/reports/${reportId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  analysis = {
    /**
     * @description Get definition of all supported analysis checks
     *
     * @tags analysis
     * @name GetV1AnalysisDefinitions
     * @request GET:/v1/analysis/definitions
     * @response `200` `CheckDefinitions`
     */
    getV1AnalysisDefinitions: (
      query?: {
        /** Filter definitions by checks. Possible values:  SUPPLIER_ACTIVATION, BANK_ACCOUNT_CHANGED, SENDER_BID_STATUS, SENDER_WARNING_LIST, VAT */
        checks?: (
          | "SUPPLIER_ACTIVATION"
          | "BANK_ACCOUNT_CHANGED"
          | "SENDER_BID_STATUS"
          | "SENDER_WARNING_LIST"
          | "VAT"
        )[];
        /** Filter only definitions of interest. Possible values:  name, friendly_name, friendly_names, title, titles, description, descriptions, doc_description, resource_type, scope, scopes, sources, metadata, possible_results */
        check_attributes?: (
          | "name"
          | "friendly_name"
          | "friendly_names"
          | "title"
          | "titles"
          | "description"
          | "descriptions"
          | "doc_description"
          | "resource_type"
          | "scope"
          | "scopes"
          | "sources"
          | "metadata"
          | "possible_results"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CheckDefinitions, any>({
        path: `/v1/analysis/definitions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Following checks can be triggered: **SUPPLIER_ACTIVATION** Check performed on: INVOICE For invoices received through scan service, checks if the sender has sent electronic invoices in the past and could be contacted to change to electronic sending. **BANK_ACCOUNT_CHANGED** Check performed on: INVOICE **SENDER_BID_STATUS** Check performed on: INVOICE Checks the invoice sender against national company register to see that the company business ID is registered and active. The check also returns information if the company is going through insolvency or bankruptcy proceedings. For Finland additional checking that the company is found in the Prepayment register. The registries used to get this information, depend on the country of the sender and are as follows: 1. Finland - YTJ [ http://www.ytj.fi ] 2. Norway - Brønnøysundregistrene [ https://brreg.no ] 3. Other countries -> not supported **SENDER_WARNING_LIST** Check performed on: INVOICE Checks the invoice sender against a list of suspicious/fraud companies. **VAT** Check performed on: INVOICE For invoices containing value added tax, checks that the sender of the invoice is found in VAT register. Note that if the total amount of value added tax on the invoice is under 1 EUR/NOK/SEK etc., the invoice sender is not checked against the VAT register. The registries used to get this information, depend on the country of the sender and are as follows: 1. Norway - Brønnøysundregistrene [ https://brreg.no ] 2. EU countries - Vies [ https://ec.europa.eu/taxation_customs/vies/ ] 3. Other countries - not supported
     *
     * @tags analysis
     * @name PostV1Analysis
     * @summary Trigger analysis for resource
     * @request POST:/v1/analysis
     * @secure
     * @response `201` `(Analysis)[]` Analysis was triggered and the status is pending
     * @response `400` `APIEntitiesError` Bad request
     * @response `401` `APIEntitiesError` Unauthorized
     * @response `404` `APIEntitiesError` Resource not found or you don't have access to it
     */
    postV1Analysis: (
      query: {
        /** The ID of the resource */
        resource_id: string;
        /** The type of the resource to run checks for */
        resource_type: "INVOICE";
        /** Which checks to run: e.g. SUPPLIER_ACTIVATION, BANK_ACCOUNT_CHANGED, SENDER_BID_STATUS, SENDER_WARNING_LIST, VAT */
        checks_to_run: (
          | "SUPPLIER_ACTIVATION"
          | "BANK_ACCOUNT_CHANGED"
          | "SENDER_BID_STATUS"
          | "SENDER_WARNING_LIST"
          | "VAT"
        )[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Analysis[], APIEntitiesError>({
        path: `/v1/analysis`,
        method: "POST",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Resource analysis result
     *
     * @tags analysis
     * @name GetV1AnalysisId
     * @request GET:/v1/analysis/{id}
     * @secure
     * @response `200` `(Analysis)[]` Possible results: **SUPPLIER_ACTIVATION** | <div style="width:150px">Status</div> | <div style="width:150px">Result</div> | <div style="width:390px">Reason</div> | <div style="width:200px">Reason code</div> | |------------------|------------------|------------------|-----------------------| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`This is not an invoice. No check was done.`|`SUPPLIER_ACTIVATION_NOT_AN_INVOICE`| `                    RUN_FAILED`|`FAILED`|`Something went wrong when executing the check.`|`SUPPLIER_ACTIVATION_FAILED`| `                       PENDING`||`Check is waiting to be executed.`|`SUPPLIER_ACTIVATION_PENDING`| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`Invoice is not from scan. No check was done.`|`SUPPLIER_ACTIVATION_INVOICE_NOT_FROM_SCAN`| `                RUN_SUCCESSFUL`|`WARNING`|`Not enough/invalid data to execute the check: company organization number, invoice origin and document_type fields should be present.`|`SUPPLIER_ACTIVATION_INVALID_INPUT`| `                RUN_SUCCESSFUL`|`WARNING`|`According to our data it looks that the company '%{bid}' could also send electronic invoices.`|`SUPPLIER_ACTIVATION_COMPANY_CAN_SEND_ELECTRONIC`| `                RUN_SUCCESSFUL`|`OK`|`According to our data, the company '%{bid}' has no record of sending electronic invoices.`|`SUPPLIER_ACTIVATION_COMPANY_CAN_ONLY_SEND_SCAN` **BANK_ACCOUNT_CHANGED** | <div style="width:150px">Status</div> | <div style="width:150px">Result</div> | <div style="width:390px">Reason</div> | <div style="width:200px">Reason code</div> | |------------------|------------------|------------------|-----------------------| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`This is not an invoice. No check was done.`|`BANK_ACCOUNT_CHANGED_NOT_AN_INVOICE`| `                    RUN_FAILED`|`FAILED`|`Something went wrong when executing the check.`|`BANK_ACCOUNT_CHANGED_FAILED`| `                       PENDING`||`Check is waiting to be executed.`|`BANK_ACCOUNT_CHANGED_PENDING`| `                RUN_SUCCESSFUL`|`WARNING`|`Not enough/invalid data`|`BANK_ACCOUNT_CHANGED_INVALID_INPUT`| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`No bank accounts to check were found on the invoice`|`BANK_ACCOUNT_CHANGED_NO_BANK_ACCOUNTS`| `                RUN_SUCCESSFUL`|`WARNING`|`We have no previously known bank accounts for the sender, or use of the data is restricted`|`BANK_ACCOUNT_CHANGED_UNKNOWN`| `                RUN_SUCCESSFUL`|`WARNING`|`The bank account %{bank_account} on the invoice is different than what the sender %{bid} has used before.`|`BANK_ACCOUNT_CHANGED_CHANGED`| `                RUN_SUCCESSFUL`|`OK`|`The bank account %{bank_account} on the invoice is known to be used by the sender %{bid} before.`|`BANK_ACCOUNT_CHANGED_NOT_CHANGED` **SENDER_BID_STATUS** | <div style="width:150px">Status</div> | <div style="width:150px">Result</div> | <div style="width:390px">Reason</div> | <div style="width:200px">Reason code</div> | |------------------|------------------|------------------|-----------------------| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`This is not an invoice. No check was done.`|`SENDER_BID_STATUS_NOT_AN_INVOICE`| `                    RUN_FAILED`|`FAILED`|`Something went wrong when executing the check.`|`SENDER_BID_STATUS_FAILED`| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`The sender bid status check is not supported for senders from '%{country}'.`|`SENDER_BID_STATUS_COUNTRY_NOT_SUPPORTED`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was not found from %{registry_name}.`|`SENDER_BID_STATUS_NOT_FOUND`| `                RUN_SUCCESSFUL`|`WARNING`|`Invalid sender bid '%{bid}' for registry '%{registry_name}'.`|`SENDER_BID_STATUS_INVALID_BID`| `                RUN_SUCCESSFUL`|`WARNING`|`No identifier provided for the sender.`|`SENDER_BID_STATUS_NOT_FOUND_NO_BID`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name}, but has been closed.`|`SENDER_BID_STATUS_INACTIVE`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name}, but is under liquidation (%{liquidation_state}).`|`SENDER_BID_STATUS_UNDER_LIQUIDATION`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name}, but is under reorganization (%{reorganization_state}).`|`SENDER_BID_STATUS_UNDER_REORGANIZATION`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name}, but is bankrupt (%{bankruptcy_state}).`|`SENDER_BID_STATUS_BANKRUPT`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name}, but is on hold (%{on_hold_state}).`|`SENDER_BID_STATUS_ON_HOLD`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' was found from %{registry_name} but is not in the Prepayment register.`|`SENDER_BID_STATUS_PREPAYMENT_REGISTER_NOT_FOUND`| `                RUN_SUCCESSFUL`|`OK`|`The sender '%{bid}' was found from %{registry_name} and is in the Prepayment register.`|`SENDER_BID_STATUS_PREPAYMENT_REGISTER_FOUND`| `                RUN_SUCCESSFUL`|`OK`|`The sender '%{bid}' was found from %{registry_name}.`|`SENDER_BID_STATUS_FOUND`| `                       PENDING`||`Check is waiting to be executed.`|`SENDER_BID_STATUS_PENDING` **SENDER_WARNING_LIST** | <div style="width:150px">Status</div> | <div style="width:150px">Result</div> | <div style="width:390px">Reason</div> | <div style="width:200px">Reason code</div> | |------------------|------------------|------------------|-----------------------| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`This is not an invoice. No check was done.`|`SENDER_WARNING_LIST_NOT_AN_INVOICE`| `                    RUN_FAILED`|`FAILED`|`Something went wrong when executing the check.`|`SENDER_WARNING_LIST_FAILED`| `                       PENDING`||`Check is waiting to be executed.`|`SENDER_WARNING_LIST_PENDING`| `                RUN_SUCCESSFUL`|`WARNING`|`None of following data [identifier, name] was provided for the sender.`|`SENDER_WARNING_LIST_INVALID_INPUT`| `                RUN_SUCCESSFUL`|`OK`|`The sender '%{bid} - %{name}' was not found from warning list.`|`SENDER_WARNING_LIST_NOT_FOUND`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{found_search_term}' was found from warning list (sources: %{sources}%{links_to_source_warnings}). Please be extra careful with the invoice.`|`SENDER_WARNING_LIST_FOUND`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{found_search_term}' was found from warning list (sources: %{sources}%{links_to_source_warnings}), this company has been reported by %{reporter_count} Visma customers.`|`SENDER_WARNING_LIST_USER_REPORTED_FOUND` **VAT** | <div style="width:150px">Status</div> | <div style="width:150px">Result</div> | <div style="width:390px">Reason</div> | <div style="width:200px">Reason code</div> | |------------------|------------------|------------------|-----------------------| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`This is not an invoice. No check was done.`|`VAT_NOT_AN_INVOICE`| `                    RUN_FAILED`|`FAILED`|`Something went wrong when executing the check.`|`VAT_FAILED`| `                       PENDING`||`Check is waiting to be executed.`|`VAT_PENDING`| `                RUN_SUCCESSFUL`|`WARNING`|`Not enough/invalid data to execute the check: company vat number/organization number, country code (only EU + NO supported), invoice total and invoice total with tax fields should be present and valid.`|`VAT_INVALID_INPUT`| `                RUN_SUCCESSFUL`|`WARNING`|`The sender '%{bid}' is not found from VAT registry.`|`VAT_COMPANY_NOT_REGISTERED`| `                NOT_APPLICABLE`|`NOT_APPLICABLE`|`No VAT charged in the invoice.`|`VAT_NO_VAT_CHARGED`| `                RUN_SUCCESSFUL`|`OK`|`The sender '%{bid}' is found from VAT registry.`|`VAT_COMPANY_REGISTERED`
     * @response `401` `APIEntitiesError` Unauthorized
     * @response `404` `APIEntitiesError` Resource not found or you don't have access to it
     */
    getV1AnalysisId: (id: string, params: RequestParams = {}) =>
      this.request<Analysis[], APIEntitiesError>({
        path: `/v1/analysis/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  partner = {
    /**
     * No description
     *
     * @tags partner
     * @name GetV1PartnerLookupsCompanies
     * @summary List companies availability
     * @request GET:/v1/partner/lookups/companies
     * @secure
     * @response `200` `(PartnerHttpApiEntitiesCompanyLookups)[]` List companies availability
     */
    getV1PartnerLookupsCompanies: (
      query: {
        /** Business ids. Maximum number of bids: 10 */
        bids: string[];
        /** Country in ISO 3166-1 alpha-2 format (2 letters) */
        country: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PartnerHttpApiEntitiesCompanyLookups[], any>({
        path: `/v1/partner/lookups/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags partner
     * @name GetV1PartnerInvoiceEventsSentErrors
     * @summary List outbound invoice errors
     * @request GET:/v1/partner/invoice_events/sent_errors
     * @secure
     * @response `200` `(PartnerHttpApiEntitiesInvoiceEventsSentError)[]` List outbound invoice errors
     */
    getV1PartnerInvoiceEventsSentErrors: (
      query: {
        /**
         * Happened after
         * @format date-time
         */
        happened_after: string;
        /**
         * Happened before. Will default to current time.
         * @format date-time
         */
        happened_before?: string;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 100
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PartnerHttpApiEntitiesInvoiceEventsSentError[], any>({
        path: `/v1/partner/invoice_events/sent_errors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags partner
     * @name GetV1PartnerInvoiceEventsReceived
     * @summary List inbound invoice delivery actions
     * @request GET:/v1/partner/invoice_events/received
     * @secure
     * @response `200` `(PartnerHttpApiEntitiesInvoiceEventsReceived)[]` List inbound invoice delivery actions
     */
    getV1PartnerInvoiceEventsReceived: (
      query?: {
        /** @default "CREATED" */
        state?: string;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 100
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PartnerHttpApiEntitiesInvoiceEventsReceived[], any>({
        path: `/v1/partner/invoice_events/received`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags partner
     * @name GetV1PartnerInvoiceDeliveryActionsOutboundErrors
     * @summary List outbound invoice errors
     * @request GET:/v1/partner/invoice_delivery_actions/outbound_errors
     * @secure
     * @response `200` `(PartnerHttpApiEntitiesInvoiceEventsSentError)[]` List outbound invoice errors
     */
    getV1PartnerInvoiceDeliveryActionsOutboundErrors: (
      query: {
        /**
         * Happened after
         * @format date-time
         */
        happened_after: string;
        /**
         * Happened before. Will default to current time.
         * @format date-time
         */
        happened_before?: string;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 100
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PartnerHttpApiEntitiesInvoiceEventsSentError[], any>({
        path: `/v1/partner/invoice_delivery_actions/outbound_errors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags partner
     * @name GetV1PartnerInvoiceDeliveryActionsInbound
     * @summary List inbound invoice delivery actions
     * @request GET:/v1/partner/invoice_delivery_actions/inbound
     * @secure
     * @response `200` `(PartnerHttpApiEntitiesInvoiceEventsReceived)[]` List inbound invoice delivery actions
     */
    getV1PartnerInvoiceDeliveryActionsInbound: (
      query?: {
        /** @default "CREATED" */
        state?: string;
        /**
         * Page to fetch
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * Number of items per page, values up to 100 supported
         * @format int32
         * @default 100
         */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PartnerHttpApiEntitiesInvoiceEventsReceived[], any>({
        path: `/v1/partner/invoice_delivery_actions/inbound`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  fiBankMessages = {
    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name DeleteV1FiBankMessagesRiMessagesId
     * @summary Delete a single RI message
     * @request DELETE:/v1/fi_bank_messages/ri_messages/{id}
     * @secure
     * @response `204` `any` Message deleted successfully
     */
    deleteV1FiBankMessagesRiMessagesId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages/ri_messages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name GetV1FiBankMessagesRiMessagesId
     * @summary Get content of single RI message
     * @request GET:/v1/fi_bank_messages/ri_messages/{id}
     * @secure
     * @response `200` `any` Get content of single RI message
     */
    getV1FiBankMessagesRiMessagesId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages/ri_messages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name GetV1FiBankMessagesRiMessages
     * @summary List IDs of incoming RI messages within given timeframe
     * @request GET:/v1/fi_bank_messages/ri_messages
     * @secure
     * @response `200` `any` List IDs of incoming RI messages within given timeframe
     */
    getV1FiBankMessagesRiMessages: (
      query: {
        /**
         * Start timestamp
         * @format date-time
         */
        timestamp_start: string;
        /**
         * End timestamp
         * @format date-time
         */
        timestamp_end: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages/ri_messages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name GetV1FiBankMessagesErrorMessagesId
     * @summary Get content of single error message
     * @request GET:/v1/fi_bank_messages/error_messages/{id}
     * @secure
     * @response `200` `any` Get content of single error message
     */
    getV1FiBankMessagesErrorMessagesId: (id: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages/error_messages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name GetV1FiBankMessagesErrorMessages
     * @summary List IDs of incoming error messages within given timeframe
     * @request GET:/v1/fi_bank_messages/error_messages
     * @secure
     * @response `200` `any` List IDs of incoming error messages within given timeframe
     */
    getV1FiBankMessagesErrorMessages: (
      query: {
        /**
         * Start timestamp
         * @format date-time
         */
        timestamp_start: string;
        /**
         * End timestamp
         * @format date-time
         */
        timestamp_end: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages/error_messages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name GetV1FiBankMessagesId
     * @summary Get status of sent message
     * @request GET:/v1/fi_bank_messages/{id}
     * @secure
     * @response `200` `FiBankMessagesHttpApiEntitiesFiBankMessageStatus` Get status of sent message
     */
    getV1FiBankMessagesId: (id: string, params: RequestParams = {}) =>
      this.request<FiBankMessagesHttpApiEntitiesFiBankMessageStatus, any>({
        path: `/v1/fi_bank_messages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags fi_bank_messages
     * @name PostV1FiBankMessages
     * @summary Upload new message
     * @request POST:/v1/fi_bank_messages
     * @secure
     * @response `204` `any` Message uploaded successfully
     */
    postV1FiBankMessages: (
      data: {
        /**
         * File content
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/v1/fi_bank_messages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
}

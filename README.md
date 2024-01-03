# maventa-api-client

**MaventaApiClient** is a third party [Maventa AutoXChange API](https://documentation.maventa.com/rest-api/#autoxchange-api) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://ax.maventa.com/swagger_doc) provided by Maventa.

This package also includes **MaventaMassPrintingApiClient** for the [Maventa Payslip API](https://documentation.maventa.com/rest-api/#payslip-api) and **MaventaBillingApiClient** for the Maventa Billing API using its' [OpenAPI schema](https://bling.maventa.com/api/billing/v2/swagger_yml) provided by Maventa.

## Installation

Add to project's package.json:

```
npm install @rantalainen/maventa-api-client
```

### Import to NodeJS project

```javascript
const { MaventaApiClient, MaventaMassPrintingApiClient, MaventaBillingApiClient } = require('@rantalainen/maventa-api-client');
```

### Import to TypeScript project

```javascript
import { MaventaApiClient, MaventaMassPrintingApiClient, MaventaBillingApiClient } from '@rantalainen/maventa-api-client';
```

## AutoXChange API

AutoXChange API (also known as AX API) can be used to create companies, send and receive invoices, orders and other trading documents, register webhooks and activate different networks and services such as Peppol or Scan.

### Setup client with options

In order to obtain an API key, please contact Maventa Integration Support. An API key is needed to access all API functions.

```javascript
const maventa = new MaventaApiClient({
  // Required options:
  clientId: 'company_UUID',
  clientSecret: 'api_key',
  vendorApiKey: 'vendor_api_key'
});
```

Available methods can be found in [Maventa Swagger](https://swagger.maventa.com/?urls.primaryName=PROD%20-%20AutoXChange%20API). Use `maventa.api` to access them:

```javascript
const companies = await maventa.api.companies.getV1Companies();
```

## E-Payslip API

E-Payslip API is used to send out payslips to e-banking.

### Setup client

In order to obtain user and password, please contact Maventa Integration Support.

```javascript
const maventaPayslipReciever = new MaventaPayslipReceiverServiceClient({
  // Required options:
  user: 'username',
  password: '****'
});
```

### maventaPayslipReciever.getContractActiveCustomerVatIdentifiers()

Fetches active companies/contracts connected to API user. Each organization needs to be active before sending e-payslips to employees.

### maventaPayslipReciever.activateCustomerPayrollContract()

Activates new organization to API user, required for sending e-payslips.

### maventaPayslipReciever.submitPayslips(): Promise\<IPayslipBatchId\>

Submits payslip data to API as a batch. Batch can contain one or more payslips.

**required parameters**:

- `files` Array of payslip XML files { fileName: string; fileBuffer: Buffer }[]
  - `fileName` unique from other files in batch
  - `fileBuffer` one payslip xml data buffer per file
- `batchName` Used for logging purposes
- `version` Payslip file version: 1.1 or 2.0

```javascript
// Send one payslip as batch to API
const fileBuffer = fs.readFileSync('payslip-example.xml');
const files = [{ fileName: 'payslip-example.xml', fileBuffer }];
const batchId = await maventaPayslipReciever.submitPayslips(files, 'payslip-example.xml', '1.1');
console.log(batchId);
```

### maventaPayslipReciever.getPayslipProcessingStatusAck(): Promise\<IPayslipProcessingStatusAck\>

Fetch status from submitted payslips.

## Payslip API

Maventa Direct Print (also known as Payslip) is a service that enables sending of EPL and PDF files as letters through the printing service in Finland.

### Setup client with options

In order to obtain an API key, please contact Maventa Integration Support. An API key is needed to access all API functions.

```javascript
const maventaMassPrinting = new MaventaMassPrintingApiClient({
  // Required options:
  clientId: 'company_UUID',
  clientSecret: 'api_key',
  vendorApiKey: 'vendor_api_key',

  // Optional options (and default values):
  apiBaseUrl: 'https://payslip.maventa.com',
  timeout: 120000,
  keepAliveAgent: true,
  dnsCache: true
});
```

### maventaMassPrinting.send(options: IMaventaMassPrintingSendOptions): Promise\<string\>

Sends a letter to Mass printing service.

Response for sending: https://documentation.maventa.com/integration-guide/#response-for-sending

**required**:

- `options.filename` Name of the ZIP package, should be unique
- `options.file` ZIP file content

**optional**:

- `options.version` Name of the software (and its version) making the sending. Makes problem solving easier.
- `options.document_type` Document type: `PDFXML` (default value) or `EPL`
- `options.letter_class` Letter class to use for sending: `economy` or `priority` (default value)
- `options.license_key` License key of software making the call (255 chars max)
- `options.license_meta` Additional information about the licensing system
- `options.color_print` Color printing `true`, black & white `false` (default value)
- `options.duplex` Duplex printing for both sides of the letter: `true`. Default is `false`.

```javascript
// Send letter to Mass printing service
const fileBuffer = fs.readFileSync('letter_example.zip');
const result = await maventaMassPrinting.send({ filename: 'letter_example.zip', file: fileBuffer });
console.log(result);
```

## Billing API

Billing API (also known as AutoInvoice Billing API) can be used fetch billing transactions from Maventa. It uses `MaventaApiClient` under the hood to obtain the access token.

### Setup client with options

In order to obtain an API key, please contact Maventa Integration Support. An API key is needed to access all API functions. Use the invoice receiving company's UUID as clientId.

```javascript
const maventaBilling = new MaventaBillingApiClient({
  // Required options:
  clientId: 'company_UUID',
  clientSecret: 'api_key',
  vendorApiKey: 'vendor_api_key'
});
```

Available methods can be found in [Maventa Swagger](https://swagger.maventa.com/?urls.primaryName=PROD%20-%20AutoInvoice%20Billing%20API). Use `maventaBilling.api.billing` to access them:

```javascript
const transactions = await maventaBilling.api.billing.billingV2ReportsBillingCompanyTransactionsList({
  year: 2023,
  month: 3
});
```

## Resources

- Maventa login page: https://secure.maventa.com/
- Maventa login page for testing: https://testing.maventa.com/
- Maventa Integration documentation: https://documentation.maventa.com/
- Maventa Swagger: https://swagger.maventa.com/

## Changelog

- 1.0.0 First release using the Open API schema (not compatible with older versions)

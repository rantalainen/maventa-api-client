# maventa-api-client

**MaventaApiClient** is a third party [Maventa AutoXChange API](https://documentation.maventa.com/rest-api/#autoxchange-api) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://ax.maventa.com/swagger_doc) provided by Maventa.

This package also includes **MaventaMassPrintingApiClient** for the [Maventa Payslip API](https://documentation.maventa.com/rest-api/#payslip-api).

## Installation

Add to project's package.json:

```
npm install @rantalainen/maventa-api-client
```

### Import to NodeJS project

```javascript
const { MaventaApiClient, MaventaMassPrintingApiClient } = require('@rantalainen/maventa-api-client');
```

### Import to TypeScript project

```javascript
import { MaventaApiClient, MaventaMassPrintingApiClient } from '@rantalainen/maventa-api-client';
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

Available methods can be found in [Maventa Swagger](https://swagger.maventa.com/?urls.primaryName=PROD%20-%20AutoXChange%20API).

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

## Resources

- Maventa login page: https://secure.maventa.com/
- Maventa login page for testing: https://testing.maventa.com/
- Maventa Integration documentation: https://documentation.maventa.com/
- Maventa Swagger: https://swagger.maventa.com/

## Changelog

- 1.0.0 First release using the Open API schema (not compatible with older versions)

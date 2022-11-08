# maventa-api-client

MaventaApiClient is a third party Maventa API client.

:warning: This tool is in early stages and is subject to change.

## Installation

Add to project's package.json:

```
npm install @rantalainen/maventa-api-client
```

## Setup

### Import to NodeJS project

```javascript
const { MaventaApiClient } = require('@rantalainen/maventa-api-client');
```

### Import to TypeScript project

```javascript
import { MaventaApiClient } from '@rantalainen/maventa-api-client';
```

### Setup client with options

In order to obtain an API key, please contact Maventa Integration Support. An API key is needed to access all API functions.

```javascript
const maventa = new MaventaApiClient({
  // Required options:
  maventaClientId: 'company_UUID',
  maventaClientSecret: 'api_key',
  maventaVendorApiKey: 'vendor_api_key',

  // Optional options (and default values):
  apiBaseUrl: 'https://ax.maventa.com',
  timeout: 120000
});
```

## Implemented methods

The following api methods have been implemented:

- `invoices` Operations about invoices
- `validators` The validation service provides XML schema and schematron validations for XML business documents

## Invoices

### maventa.invoices.send(fileBuffer: Buffer, fileMetadata: { filename: string; contentType: string }, options?: any): Promise\<IInvoice\>

Uploads new invoice.

**required**:

- `fileBuffer` File content
- `fileMetadata.filename` File name
- `fileMetadata.contentType` File content type

**optional**:

- `options` Extra information related to sending. See all options: https://swagger.maventa.com/#/invoices/postV1Invoices

```javascript
// Send example Finvoice 3.0 invoice
const fileBuffer = fs.readFileSync('finvoice_30_example.xml');
const response = await maventa.invoices.send(
  fileBuffer,
  { filename: 'finvoice_30_example.xml', contentType: 'text/xml' },
  { format: 'FINVOICE30' }
);
console.log(response);
```

Example response: https://swagger.maventa.com/#/invoices/postV1Invoices

### maventa.invoices.sendZip(invoiceXml: Buffer, invoicePdf: Buffer, options?: any): Promise\<IInvoice\>

Uploads new invoice with invoice image (XML and PDF). Read more about invoice image: https://documentation.maventa.com/integration-guide/invoice-sending/invoice-xml-content/#invoice-image-and-attachment-handling

**required**:

- `fileBufferXml` XML invoice file content
- `fileBufferPdf` PDF invoice image file content

**optional**:

- `options` Extra information related to sending. See all options: https://swagger.maventa.com/#/invoices/postV1Invoices

```javascript
// Send example invoice with invoice image
const fileBufferXml = fs.readFileSync('finvoice_30_example.xml');
const fileBufferPdf = fs.readFileSync('finvoice_30_example.pdf');
const response = await maventa.invoices.sendZip(fileBufferXml, fileBufferPdf);
console.log(response);
```

### maventa.invoices.getAll(options: any): Promise\<IInvoice[]\>

Lists received or sent invoices.

**required**:

- `options.direction` Available values: `RECEIVED`, `SENT`

**optional**:

- `options` See all options: https://swagger.maventa.com/#/invoices/getV1Invoices

```javascript
// List sent invoices
const sentInvoices = await maventa.invoices.getAll({ direction: 'SENT', per_page: 2 });
console.log(sentInvoices);
```

## Validators

### maventa.validators.validate(fileBuffer: string, fileMetadata: { contentType: string }): Promise\<IValidationResponse\>

Identifies and validates provided document (https://swagger.maventa.com/?urls.primaryName=STAGE%20-%20AutoInvoice%20Validator%20API#/validation/post_v1_validate)

Responds with the validation results. The overall status of the validation can be found from the result property in the root of the response.

**required**:

- `fileBuffer` File content
- `fileMetadata.contentType` File content type

```javascript
// Validate Finvoice 3.0 XML file
const fileBuffer = fs.readFileSync('finvoice_30_example.xml');
const result = await maventa.validators.validate(fileBuffer, { contentType: 'text/xml' });
console.log(result);
```

## Mass printing service (Payslip)

### Setup client with options

In order to obtain an API key, please contact Maventa Integration Support. An API key is needed to access all API functions.

```javascript
const maventaMassPrinting = new MaventaMassPrintingApiClient({
  // Required options:
  maventaClientId: 'company_UUID',
  maventaClientSecret: 'api_key',
  maventaVendorApiKey: 'vendor_api_key',

  // Optional options (and default values):
  apiBaseUrl: 'https://payslip.maventa.com',
  timeout: 120000
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

- 0.0.1 First release
- 0.1.0 Add support for Maventa Mass printing service (Payslip)

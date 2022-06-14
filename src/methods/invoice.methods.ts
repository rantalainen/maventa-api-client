import { MaventaApiClient } from '../index';
import { Methods } from '../methods';
import { IInvoice } from '../interfaces/invoice.interfaces';
import { serialize } from 'object-to-formdata';
import * as FormData from 'form-data';
import * as JSZip from 'jszip';

export class InvoiceMethods extends Methods {
  constructor(maventa: MaventaApiClient) {
    super(maventa, 'v1/invoices', 'invoice:receive invoice:send');
  }

  /** List invoices */
  async getAll(options: any): Promise<IInvoice[]> {
    return await super.request('GET', '', undefined, options);
  }

  /** Upload new invoice file */
  async send(fileBuffer: Buffer, fileMetadata: { filename: string; contentType: string }, options?: any): Promise<IInvoice> {
    let formData = new FormData();

    // Add file
    formData.append('file', fileBuffer, fileMetadata);

    // Add other options (convert JS Object to FormData)
    if (options) {
      formData = serialize(options, undefined, formData as any) as any;
    }

    return await super.request('POST', '', formData);
  }

  /** Upload new invoice with invoice image (XML and PDF) */
  async sendZip(invoiceXml: Buffer, invoicePdf: Buffer, options?: any): Promise<IInvoice> {
    // Initialize JSZip
    const zip = new JSZip();

    // Add invoice XML file to ZIP file
    zip.file('invoice.xml', invoiceXml);

    // Add invoice PDF file to ZIP file
    zip.file('invoice.pdf', invoicePdf);

    // Generate ZIP file
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

    // Send ZIP file
    return await this.send(zipBuffer, { filename: 'invoice.zip', contentType: 'application/zip' }, options);
  }
}

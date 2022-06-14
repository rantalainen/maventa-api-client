import { MaventaApiClient } from '../index';
import { Methods } from '../methods';
import * as FormData from 'form-data';
import { IValidationResponse } from '../interfaces/validator.interfaces';

export class ValidatorMethods extends Methods {
  constructor(maventa: MaventaApiClient) {
    super(maventa, 'v1/validate', 'validate', 'validator');
  }

  /** Identifies and validates provided document. */
  async validate(fileBuffer: string, fileMetadata: { contentType: string }): Promise<IValidationResponse> {
    let formData = new FormData();
    formData.append('file', fileBuffer, fileMetadata);
    return await super.request('POST', '', formData);
  }
}

export interface IAssertion {
  id: string;
  status: string;
  title: string;
  location: string;
  test: string;
  phasein: boolean;

  [propName: string]: any;
}

export interface IValidationResponse {
  request_id: string;
  result: string;
  timestamp: Date;
  duration: number;
  service_version: string;
  document_format: string;
  document_version: string;
  document_title: string;
  document_identifier: string;
  document_source: string;
  assertions: IAssertion[];

  [propName: string]: any;
}

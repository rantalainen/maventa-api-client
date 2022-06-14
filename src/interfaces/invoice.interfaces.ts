export interface ISender {
  eia?: string;
  bid: string;
  name: string;
  country: string;

  [propName: string]: any;
}

export interface IRecipient {
  eia: string;
  bid: string;
  name: string;
  country: string;
  operator: string;

  [propName: string]: any;
}

export interface IFile {
  id: string;
  filename: string;
  type: string;
  mimetype: string;
  href: string;

  [propName: string]: any;
}

export interface IAction {
  type: string;
  channel: string;
  message?: string;
  happened_at: Date;

  [propName: string]: any;
}

export interface IInvoice {
  id: string;
  status: string;
  reference: string;
  number: string;
  sender: ISender;
  recipient: IRecipient;
  created_at: Date;
  date: string;
  date_due: string;
  source_format: string;
  sum: number;
  sum_tax: number;
  currency: string;
  destination?: string;
  comment?: string;
  files: IFile[];
  actions: IAction[];

  [propName: string]: any;
}

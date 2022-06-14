import { MaventaApiClient } from './index';
import { Method } from 'got';

export class Methods {
  /** @private */
  _maventa: any;

  /** @private */
  _selectedApi: string;

  /** @private */
  _scope?: string;

  /** @private */
  _api?: string;

  constructor(maventa: MaventaApiClient, selectedApi: string, scope?: string, api?: string) {
    if (!maventa || typeof maventa !== 'object') {
      throw new Error('Incorrect or missing maventa in method initialization');
    }

    if (!selectedApi || typeof selectedApi !== 'string') {
      throw new Error('Incorrect or missing selectedApi in method initialization');
    }

    this._maventa = () => maventa;
    this._selectedApi = selectedApi;
    this._scope = scope;
    this._api = api;
  }

  async request(method: Method, uri: string, body?: any, params?: any): Promise<any> {
    return await this._maventa().request(
      method,
      `${this._selectedApi}${uri !== '' ? `/${uri}` : ''}`,
      body,
      params,
      this._scope,
      this._api
    );
  }
}

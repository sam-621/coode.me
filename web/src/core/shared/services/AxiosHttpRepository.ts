import axios, { AxiosResponse } from 'axios';

import { API_DOMAIN, ApiResponse, ConfigRequest, Headers, HttpRepository } from '../domain';
import { manageAxiosError } from '../errors';

type AxiosHttpResponse<R> = AxiosResponse<ApiResponse<R>> | null;

export class AxiosHttpRequest extends HttpRepository {
  protected apiDomain: string;

  protected endpoint: string;

  protected headers: Headers;

  constructor() {
    super();
    this.endpoint = '';
    this.apiDomain = API_DOMAIN;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  protected configRequest(config: ConfigRequest): void {
    this.endpoint += config.endpoint;
    this.apiDomain = config.apiDomain || this.apiDomain;
    this.headers = {
      ...this.headers,
      ...config.headers
    };
  }

  protected useToken(token: string): void {
    this.headers = {
      ...this.headers,
      authorization: token
    };
  }

  protected async get<R>(): Promise<AxiosHttpResponse<R>> {
    try {
      return await axios.get(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      return manageAxiosError<R>(error);
    }
  }

  protected async post<R = unknown>(data?: unknown): Promise<AxiosHttpResponse<R>> {
    try {
      return await axios.post(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      return manageAxiosError<R>(error);
    }
  }

  protected async put<R = unknown>(data?: unknown): Promise<AxiosHttpResponse<R>> {
    try {
      return await axios.put(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      return manageAxiosError<R>(error);
    }
  }

  protected async delete<R = unknown>(): Promise<AxiosHttpResponse<R>> {
    try {
      return await axios.delete(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      return manageAxiosError<R>(error);
    }
  }

  protected urlBuilder(): string {
    return `${this.apiDomain}${this.endpoint}`;
  }
}

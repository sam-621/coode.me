import axios, { AxiosResponse } from 'axios';

import { API_DOMAIN, ConfigRequest, Env, Headers, HttpRepository } from '../domain';

const UNEXPECTED_ERROR_OCCURRED = 'An unexpected error occurred';

export class AxiosHttpRequest extends HttpRepository {
  protected apiDomain: string;

  protected endpoint: string;

  protected headers: Headers;

  constructor() {
    super();
    this.endpoint = '';
    this.apiDomain = Env.get(API_DOMAIN);
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  protected configRequest(config: ConfigRequest): void {
    this.endpoint = config.endpoint;
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

  protected async get<R>(): Promise<AxiosResponse<R>> {
    try {
      return await axios.get(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error(UNEXPECTED_ERROR_OCCURRED);
      }

      return error.response as AxiosResponse<R>;
    }
  }

  protected async post<R = unknown>(data?: unknown): Promise<AxiosResponse<R>> {
    try {
      return await axios.post(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error(UNEXPECTED_ERROR_OCCURRED);
      }

      return error.response as AxiosResponse<R>;
    }
  }

  protected async put<R = unknown>(data?: unknown): Promise<AxiosResponse<R>> {
    try {
      return await axios.put(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error(UNEXPECTED_ERROR_OCCURRED);
      }

      return error.response as AxiosResponse<R>;
    }
  }

  protected async delete<R = unknown>(): Promise<AxiosResponse<R>> {
    try {
      return await axios.delete(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error(UNEXPECTED_ERROR_OCCURRED);
      }

      return error.response as AxiosResponse<R>;
    }
  }

  protected urlBuilder(): string {
    return `${this.apiDomain}${this.endpoint}`;
  }
}

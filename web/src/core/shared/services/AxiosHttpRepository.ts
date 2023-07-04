import axios, { AxiosResponse } from 'axios';

import { ApiResponse, HttpRepository } from '../domain';
import { manageAxiosError } from '../errors';

type AxiosHttpResponse<R> = AxiosResponse<ApiResponse<R>> | null;

export class AxiosHttpRequest extends HttpRepository {
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
}

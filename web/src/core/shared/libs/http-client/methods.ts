import { AxiosResponse } from 'axios';

import { ApiResponse } from '../../domain';
import { manageAxiosError } from '../../errors';

import { httpClient } from './instance';

type AxiosHttpResponse<R> = AxiosResponse<ApiResponse<R>> | null;

const getMethod = async <R>(url: string): Promise<AxiosHttpResponse<R>> => {
  try {
    return httpClient.get(url);
  } catch (error) {
    return manageAxiosError<R>(error);
  }
};

const postMethod = async <R>(url: string, data: unknown): Promise<AxiosHttpResponse<R>> => {
  try {
    return await httpClient.post(url, data);
  } catch (error) {
    return manageAxiosError<R>(error);
  }
};

const putMethod = async <R>(url: string, data: unknown): Promise<AxiosHttpResponse<R>> => {
  try {
    return await httpClient.put(url, data);
  } catch (error) {
    return manageAxiosError<R>(error);
  }
};

const deleteMethod = async <R>(url: string): Promise<AxiosHttpResponse<R>> => {
  try {
    return await httpClient.delete(url);
  } catch (error) {
    return manageAxiosError<R>(error);
  }
};

export const httpMethods = {
  get: getMethod,
  post: postMethod,
  put: putMethod,
  delete: deleteMethod
};

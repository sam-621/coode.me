import { AxiosResponse, isAxiosError } from 'axios';

import { ApiResponse } from '../domain';

export const manageAxiosError = <R>(error: unknown): AxiosResponse<ApiResponse<R>> | null => {
  if (!isAxiosError(error)) {
    return null;
  }

  if (!error.response) {
    return null;
  }

  return error.response.data;
};

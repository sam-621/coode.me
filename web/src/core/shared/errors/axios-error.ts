import { isAxiosError } from 'axios';

import { AxiosHttpResponse } from '../services';

export const manageAxiosError = <R>(error: unknown): AxiosHttpResponse<R> | null => {
  if (!isAxiosError(error)) {
    return null;
  }

  if (!error.response) {
    return null;
  }

  return error.response.data;
};

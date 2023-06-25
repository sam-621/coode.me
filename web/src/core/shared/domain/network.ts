import { ErrorCode } from './errors';

export type ApiResponse<T> = {
  data: T;
  message: string[];
  errorCode: ErrorCode | null;
};

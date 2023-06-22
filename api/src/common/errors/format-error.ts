import { ErrorCode } from '@/core/shared/domain';

export const formatError = (error: string): ErrorCode => {
  return error.toUpperCase().replace(' ', '_') as ErrorCode;
};

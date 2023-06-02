import { HttpStatus } from '@nestjs/common';

import { ErrorCode } from '@/core/shared/domain';

export const getStatusCodeByErrorCode = (errorCode: ErrorCode) => {
  const DEFAULT_HTTP_STATUS_CODE = HttpStatus.INTERNAL_SERVER_ERROR;

  const statusCodes: ErrorCodesSchema = {
    [ErrorCode.UNKNOWN_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
    [ErrorCode.VALIDATION_ERROR]: HttpStatus.BAD_REQUEST
  };

  return statusCodes[errorCode] || DEFAULT_HTTP_STATUS_CODE;
};

type ErrorCodesSchema = {
  [key in ErrorCode]: HttpStatus;
};

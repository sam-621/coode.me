import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { BusinessError, ErrorCode } from '@/core/shared/domain';

import { formatError, getStatusCodeByErrorCode, LoggerService } from '../errors';
import { HttpResponse } from '../utils';

const DEFAULT_ERROR_MESSAGE = 'Internal server error';
const DEFAULT_ERROR_CODE = ErrorCode.UNKNOWN_ERROR;
const DEFAULT_STATUS_CODE = getStatusCodeByErrorCode(DEFAULT_ERROR_CODE);

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost, readonly logger: LoggerService) {}

  catch(exception: Error, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message } = exception;

      this.logger.businessLog(exception, code, [message]);

      const res = new HttpResponse(null, [message], code);
      const statusCode = getStatusCodeByErrorCode(res?.errorCode ?? ErrorCode.UNKNOWN_ERROR);

      httpAdapter.reply(ctx.getResponse(), res, statusCode);
      return;
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message;
      const statusCode = (exception.getResponse() as HttpGenericError).statusCode;
      const errorCode = (exception.getResponse() as HttpGenericError).error;

      const formattedErrorMessage = Array.isArray(errorMessage) ? errorMessage : [errorMessage];
      const formattedErrorCode = formatError(errorCode);

      this.logger.businessLog(exception, formattedErrorCode, formattedErrorMessage);

      const res = new HttpResponse(null, formattedErrorMessage, formattedErrorCode);

      httpAdapter.reply(ctx.getResponse(), res, statusCode);
      return;
    }

    // Unexpected errors
    const errorMessage = exception.message;
    const errorCode = formatError(exception.name);
    const formattedErrorMessage = Array.isArray(errorMessage) ? errorMessage : [errorMessage];

    this.logger.businessLog(exception, errorCode, formattedErrorMessage);

    const res = new HttpResponse(null, [DEFAULT_ERROR_MESSAGE], DEFAULT_ERROR_CODE);

    httpAdapter.reply(ctx.getResponse(), res, DEFAULT_STATUS_CODE);
  }
}

export type HttpGenericError = {
  message: string;
  statusCode: HttpStatus;
  /**
   * Error name based on status code
   *
   * @example
   * "Not Found"
   */
  error: string;
};

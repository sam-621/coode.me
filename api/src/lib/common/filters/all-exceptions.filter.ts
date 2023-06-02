import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { BusinessError, ErrorCode } from '@/core/shared/domain';

import { getStatusCodeByErrorCode } from '../errors';
import { HttpResponse } from '../utils';

const DEFAULT_ERROR_MESSAGE = 'Internal server error';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let res = new HttpResponse(null, [DEFAULT_ERROR_MESSAGE], ErrorCode.UNKNOWN_ERROR);

    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message } = exception;

      res = new HttpResponse(null, [message], code);
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message;
      const errorCode = ErrorCode.VALIDATION_ERROR;
      const isErrorMessageAnArray = Array.isArray(errorMessage);
      const formattedErrorMessage = isErrorMessageAnArray ? errorMessage : [errorMessage];

      res = new HttpResponse(null, formattedErrorMessage, errorCode);
    }

    const statusCode = getStatusCodeByErrorCode(res?.errorCode);

    httpAdapter.reply(ctx.getResponse(), res, statusCode);
  }
}

export type HttpGenericError = {
  message: string;
  statusCode: number;
};

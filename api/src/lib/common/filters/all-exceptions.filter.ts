import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { BusinessError, ErrorCode } from '@/core/shared/domain';

import { getStatusCodeByErrorCode } from '../errors';
import { LoggerService } from '../errors/logger.service';
import { HttpResponse } from '../utils';

const DEFAULT_ERROR_MESSAGE = 'Internal server error';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost, readonly logger: LoggerService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let res = new HttpResponse(null, [DEFAULT_ERROR_MESSAGE], ErrorCode.UNKNOWN_ERROR);

    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message } = exception;

      res = new HttpResponse(null, [message], code);

      this.logger.businessLog(exception, res.errorCode, res.message);
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message;
      const errorCode = ErrorCode.VALIDATION_ERROR;
      const isErrorMessageAnArray = Array.isArray(errorMessage);
      const formattedErrorMessage = isErrorMessageAnArray ? errorMessage : [errorMessage];

      res = new HttpResponse(null, formattedErrorMessage, errorCode);

      this.logger.businessLog(exception, res.errorCode, res.message);
    }

    const statusCode = getStatusCodeByErrorCode(res?.errorCode);

    httpAdapter.reply(ctx.getResponse(), res, statusCode);
  }
}

export type HttpGenericError = {
  message: string;
  statusCode: number;
};

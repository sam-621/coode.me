import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { BusinessError } from '@/core/shared/domain';

import { formatHttpErrorMessage } from '../utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let res = {};

    console.log({
      e: exception instanceof BusinessError
    });

    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message;
      const errorName = formatHttpErrorMessage(exception.message);
      const isErrorMessageAnArray = Array.isArray(errorMessage);

      res = {
        name: errorName,
        message: isErrorMessageAnArray ? errorMessage : [errorMessage],
        type: errorName
      };
    }

    // console.log({
    //   exception: exception instanceof Error
    // });

    httpAdapter.reply(ctx.getResponse(), res, httpStatus);
  }
}

export type HttpGenericError = {
  message: string;
  statusCode: number;
};

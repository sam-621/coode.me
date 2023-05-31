import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

import { Response } from 'express';

import { formatHttpErrorMessage } from '../utils';

/**
 * Determines the json schema for all the http errors
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const errorMessage = (exception.getResponse() as HttpGenericError).message;
    const errorType = formatHttpErrorMessage(exception.message);
    const isErrorMessageAnArray = Array.isArray(errorMessage);

    res.status(status).json({
      message: isErrorMessageAnArray ? errorMessage : [errorMessage],
      type: errorType
    });
  }
}

/*
"exception": {
        "response": {
            "statusCode": 400,
            "message": "Bad Request"
        },
        "status": 400,
        "options": {},
        "message": "Bad Request",
        "name": "BadRequestException"
    }
*/

type HttpGenericError = {
  message: string;
  statusCode: number;
};

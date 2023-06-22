import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

import { ErrorCode } from '@/app/shared/domain';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  businessLog(error: Error, errorCode: ErrorCode, message: string[], stack?: boolean) {
    this.log({
      error: `${error.name}: ${error.message}`,
      errorCode,
      message,
      trace: stack ? error.stack : undefined
    });
  }
}

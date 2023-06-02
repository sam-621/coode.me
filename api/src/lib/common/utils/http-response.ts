import { ErrorCode } from '@/core/shared/domain';

export const SUCCESS_HTTP_MESSAGE = 'OK';

export class HttpResponse {
  constructor(
    readonly data: unknown,
    readonly message: string[],
    readonly errorCode: ErrorCode | null
  ) {}
}

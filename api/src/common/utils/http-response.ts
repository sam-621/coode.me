import { ErrorCode } from '@/core/shared/domain';

export const SUCCESS_HTTP_MESSAGE = 'OK';

export class HttpResponse<T = unknown> {
  constructor(readonly data: T, readonly message: string[], readonly errorCode: ErrorCode | null) {}
}

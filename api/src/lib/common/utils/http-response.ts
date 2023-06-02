import { ErrorCode } from '@/core/shared/domain';

export class HttpResponse {
  constructor(readonly data: unknown, readonly message: string[], readonly errorCode: ErrorCode) {}
}

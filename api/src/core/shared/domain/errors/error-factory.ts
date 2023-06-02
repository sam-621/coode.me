import { ErrorCode } from './error-codes';

export abstract class BusinessError extends Error {
  constructor(message: string, readonly code: ErrorCode) {
    super(message);
    this.name = code;
  }
}

export const errorFactory = (type: ErrorCode) => {
  return class extends BusinessError {
    constructor(message: string) {
      super(message, type);
    }
  };
};

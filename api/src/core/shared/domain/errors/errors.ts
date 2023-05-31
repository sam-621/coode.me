import { ErrorCode } from './error-codes';
import { errorFactory } from './error-factory';

export const ValidationError = errorFactory(ErrorCode.VALIDATION_ERROR);

import { ValidationError } from '../errors';

type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  constructor(readonly value: T) {
    if (!this.isValid(value)) {
      throw new ValidationError(this.invalidMessage());
    }
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value;
  }

  private isValid(value: T): boolean {
    return value !== null && value !== undefined;
  }

  private invalidMessage(): string {
    return `Value must be defined`;
  }
}

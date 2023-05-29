import { ValidationError, ValueObject } from '@/core/shared/domain';

export class SnippetDescription extends ValueObject<string> {
  static readonly DESCRIPTION_MAX_LENGTH = 160;

  constructor(readonly value: Description) {
    super(value);

    if (!SnippetDescription.isValid(value)) {
      throw new ValidationError(SnippetDescription.invalidMessage());
    }
  }

  public static isValid(value: Description) {
    return value.length < this.DESCRIPTION_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Description is too long. max ${this.DESCRIPTION_MAX_LENGTH} chars allowed`;
  }
}

type Description = string;

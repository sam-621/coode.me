import { ValidationError, ValueObject } from '@/app/shared/domain';

export class TopicDescription extends ValueObject<string> {
  static readonly DESCRIPTION_MAX_LENGTH = 160;

  constructor(value: Description) {
    super(value);

    if (!TopicDescription.isValid(value)) {
      throw new ValidationError(TopicDescription.invalidMessage());
    }
  }

  public static isValid(value: Description) {
    return value.length <= this.DESCRIPTION_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Topic Description is too long. max ${this.DESCRIPTION_MAX_LENGTH} chars allowed`;
  }
}

type Description = string;

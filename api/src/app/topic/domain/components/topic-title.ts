import { ValidationError, ValueObject } from '@/app/shared/domain';

export class TopicTitle extends ValueObject<string> {
  static readonly TITLE_MAX_LENGTH = 20;

  constructor(value: Title) {
    super(value);

    if (!TopicTitle.isValid(value)) {
      throw new ValidationError(TopicTitle.invalidMessage());
    }
  }

  public static isValid(value: Title) {
    return value.length <= this.TITLE_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Topic Title is too long. max ${this.TITLE_MAX_LENGTH} chars allowed`;
  }
}

type Title = string;

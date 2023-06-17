import { ValidationError, ValueObject } from '@/core/shared/domain';

export class ProjectTitle extends ValueObject<string> {
  static readonly TITLE_MAX_LENGTH = 50;

  constructor(readonly value: Cover) {
    super(value);

    if (!ProjectTitle.isValid(value)) {
      throw new ValidationError(ProjectTitle.invalidMessage());
    }
  }

  public static isValid(value: Cover) {
    return value.length <= this.TITLE_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Title is too long. max ${this.TITLE_MAX_LENGTH} chars allowed`;
  }
}

type Cover = string;

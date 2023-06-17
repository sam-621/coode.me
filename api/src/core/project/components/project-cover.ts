import { ValidationError, ValueObject } from '@/core/shared/domain';

export class ProjectCover extends ValueObject<string> {
  static readonly COVER_MAX_LENGTH = 30;

  constructor(readonly value: Cover) {
    super(value);

    if (!ProjectCover.isValid(value)) {
      throw new ValidationError(ProjectCover.invalidMessage());
    }
  }

  public static isValid(value: Cover) {
    return value.length <= this.COVER_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Cover is too long. max ${this.COVER_MAX_LENGTH} chars allowed`;
  }
}

type Cover = string;

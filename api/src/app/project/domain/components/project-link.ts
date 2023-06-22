import { ValidationError, ValueObject } from '@/app/shared/domain';

export class ProjectLink extends ValueObject<string> {
  static readonly LINK_MAX_LENGTH = 30;

  constructor(readonly value: Cover) {
    super(value);

    if (!ProjectLink.isValid(value)) {
      throw new ValidationError(ProjectLink.invalidMessage());
    }
  }

  public static isValid(value: Cover) {
    return value.length <= this.LINK_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Link is too long. max ${this.LINK_MAX_LENGTH} chars allowed`;
  }
}

type Cover = string;

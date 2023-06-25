import { ValidationError, ValueObject } from '@/app/shared/domain';

export class TopicColor extends ValueObject<string> {
  static readonly COLOR_PATTERN = /^#([a-f0-9]{6}|[a-f0-9]{3})$/;

  constructor(readonly value: Color) {
    super(value);

    if (!TopicColor.isValid(value)) {
      throw new ValidationError(TopicColor.invalidMessage());
    }
  }

  public static isValid(value: Color): boolean {
    return this.COLOR_PATTERN.test(value);
  }

  public static invalidMessage() {
    return 'Color does not match with the pattern';
  }
}

type Color = string;

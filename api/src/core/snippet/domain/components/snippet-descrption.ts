export class SnippetDescription {
  static readonly DESCRIPTION_MAX_LENGTH = 160;

  constructor(readonly value: Description) {
    if (!SnippetDescription.isValid(value)) {
      throw new Error(SnippetDescription.invalidMessage());
    }
  }

  public static isValid(value: Description) {
    return value.length < this.DESCRIPTION_MAX_LENGTH;
  }

  public static invalidMessage() {
    return `Description is too long. ${this.DESCRIPTION_MAX_LENGTH} chars allowed`;
  }
}

type Description = string;

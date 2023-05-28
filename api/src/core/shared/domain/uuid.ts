import { v4 as uuid, validate as validateUuid } from 'uuid';

export class Uuid {
  constructor(readonly value: ID) {
    if (!Uuid.isValid(value)) {
      throw new Error(Uuid.invalidMessage(value));
    }
  }

  public static create(): Uuid {
    return new Uuid(uuid());
  }

  public static isValid(value: ID): boolean {
    return validateUuid(value);
  }

  public static invalidMessage(value: ID): string {
    return `${value} is not an allowed id`;
  }
}

type ID = string;

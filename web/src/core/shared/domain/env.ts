export class Env {
  static get(key: Key): string {
    if (!this.isValid(key)) {
      throw new Error(this.invalidMessage(key));
    }

    return this.getFromEnv(key);
  }

  private static isValid(key: Key): boolean {
    return Boolean(this.getFromEnv(key));
  }

  private static invalidMessage(key: Key) {
    return `The env variable ${key} is not defined, please add it in your env file`;
  }

  private static getFromEnv(key: Key): string {
    return process.env[`NEXT_PUBLIC_${key}`] as string;
  }
}

type Key = string;

export const API_DOMAIN = 'API_DOMAIN';

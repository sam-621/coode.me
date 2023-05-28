export class Snippet {
  private constructor(
    readonly id: string,
    readonly code: string,
    readonly language: string,
    readonly description: string,
  ) {}

  public static create({ id, code, language, description }: Snippet) {
    return new Snippet(id, code, language, description);
  }
}

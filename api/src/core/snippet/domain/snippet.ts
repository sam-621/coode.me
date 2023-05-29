import { Primitives, Uuid } from '@/core/shared/domain';

import { SnippetDescription } from './components';

export class Snippet {
  private constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly code: string,
    readonly language: number,
    readonly description: SnippetDescription
  ) {}

  public static create({ id, userId, code, language, description }: PrimitiveSnippet) {
    return new Snippet(
      new Uuid(id),
      new Uuid(userId),
      code,
      language,
      new SnippetDescription(description)
    );
  }
}

export type PrimitiveSnippet = Primitives<Snippet>;

import { Primitives, Uuid } from '@/core/shared/domain';

import { SnippetDescription } from './components';

export class Snippet {
  private constructor(
    readonly id: Uuid,
    readonly code: string,
    readonly language: string,
    readonly description: SnippetDescription
  ) {}

  public static create({ id, code, language, description }: PrimitiveSnippet) {
    return new Snippet(new Uuid(id), code, language, new SnippetDescription(description));
  }
}

export type PrimitiveSnippet = Primitives<Snippet>;

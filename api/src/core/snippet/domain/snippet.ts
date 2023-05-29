import { Primitives, Uuid } from '@/core/shared/domain';

import { SnippetCode, SnippetDescription, SnippetLanguage } from './components';

export class Snippet {
  private constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly code: SnippetCode,
    readonly language: SnippetLanguage,
    readonly description: SnippetDescription
  ) {}

  public static create({ id, userId, code, language, description }: PrimitiveSnippet) {
    return new Snippet(
      new Uuid(id),
      new Uuid(userId),
      new SnippetCode(code),
      new SnippetLanguage(language),
      new SnippetDescription(description)
    );
  }

  toPrimitives(): PrimitiveSnippet {
    return {
      id: this.id.value,
      userId: this.userId.value,
      code: this.code.value,
      language: this.language.value,
      description: this.description.value
    };
  }
}

export type PrimitiveSnippet = Primitives<Snippet>;

import { Entity, Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';

import { SnippetCode, SnippetDescription, SnippetLanguage, SnippetRepo } from './components';

export class Snippet extends Entity {
  private constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly code: SnippetCode,
    readonly language: SnippetLanguage,
    readonly description: SnippetDescription,
    readonly repo: SnippetRepo
  ) {
    super(id, new Date(), new Date());
  }

  public static create({
    id,
    userId,
    code,
    language,
    description,
    repo
  }: Primitives<WithoutDateProperties<Snippet>>) {
    return new Snippet(
      new Uuid(id),
      new Uuid(userId),
      new SnippetCode(code),
      new SnippetLanguage(language),
      new SnippetDescription(description),
      new SnippetRepo(repo)
    );
  }

  toPrimitives(): PrimitiveSnippet {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId.value,
      code: this.code.value,
      language: this.language.value,
      description: this.description.value,
      repo: this.repo.value
    };
  }
}

export type PrimitiveSnippet = Primitives<Snippet>;

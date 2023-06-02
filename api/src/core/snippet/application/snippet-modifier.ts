import { Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';

import { PrimitiveSnippet, Snippet, SnippetRepository } from '../domain';

export class SnippetModifier {
  constructor(private readonly repository: SnippetRepository) {}

  create(input: SnippetModifierCreateInput): Promise<PrimitiveSnippet> {
    const { value: id } = Uuid.create();
    const snippet = Snippet.create({ ...input, id });

    return this.repository.create(snippet);
  }

  update(input: SnippetModifierUpdateInput): Promise<PrimitiveSnippet> {
    const snippet = Snippet.create({ ...input, userId: Uuid.create().value });

    return this.repository.update(snippet);
  }
}

export type SnippetModifierCreateInput = Primitives<Omit<WithoutDateProperties<Snippet>, 'id'>>;
export type SnippetModifierUpdateInput = Omit<Primitives<WithoutDateProperties<Snippet>>, 'userId'>;

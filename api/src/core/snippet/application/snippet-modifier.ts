import { Primitives } from '@/core/shared/domain';

import { PrimitiveSnippet, Snippet, SnippetRepository, UpdateSnippetInput } from '../domain';

export class SnippetModifier {
  constructor(private readonly repository: SnippetRepository) {}

  create(input: PrimitiveSnippet): Promise<PrimitiveSnippet> {
    const snippet = Snippet.create(input);

    return this.repository.create(snippet);
  }

  update(input: Primitives<UpdateSnippetInput>): Promise<PrimitiveSnippet> {
    const snippet = Snippet.create({ ...input, userId: '' });

    return this.repository.update(snippet);
  }
}

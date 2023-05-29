import { Primitives, Uuid } from '@/core/shared/domain';

import {
  CreateSnippetInput,
  PrimitiveSnippet,
  Snippet,
  SnippetRepository,
  UpdateSnippetInput
} from '../domain';

export class SnippetModifier {
  constructor(private readonly repository: SnippetRepository) {}

  create(input: Primitives<CreateSnippetInput>): Promise<PrimitiveSnippet> {
    const snippet = Snippet.create(input);

    return this.repository.create(snippet);
  }

  update(input: Primitives<UpdateSnippetInput>): Promise<PrimitiveSnippet> {
    const snippet = Snippet.create({ ...input, userId: Uuid.create().value });

    return this.repository.update(snippet);
  }
}

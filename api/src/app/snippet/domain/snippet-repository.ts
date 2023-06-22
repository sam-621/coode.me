import { Uuid } from '@/core/shared/domain';

import { PrimitiveSnippet, Snippet } from './snippet';

export interface SnippetRepository {
  findUnique(id: Uuid): Promise<PrimitiveSnippet | null>;
  findMany(): Promise<PrimitiveSnippet[]>;
  create(snippet: Snippet): Promise<PrimitiveSnippet>;
  update(snippet: Snippet): Promise<PrimitiveSnippet>;
}

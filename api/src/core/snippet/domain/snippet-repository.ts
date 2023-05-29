import { Uuid } from '@/core/shared/domain';

import { PrimitiveSnippet } from './snippet';

export interface SnippetRepository {
  findUnique(id: Uuid): Promise<PrimitiveSnippet | null>;
  findMany(): Promise<PrimitiveSnippet[]>;
  create(snippet: PrimitiveSnippet): Promise<PrimitiveSnippet>;
  update(snippet: UpdateSnippetInput): Promise<PrimitiveSnippet>;
}

export type UpdateSnippetInput = Omit<PrimitiveSnippet, 'userId'>;

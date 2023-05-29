import { Uuid } from '@/core/shared/domain';

import { PrimitiveSnippet } from './snippet';

export interface SnippetRepository {
  findUnique(id: Uuid): Promise<PrimitiveSnippet>;
  findMany(): Promise<PrimitiveSnippet>;
}

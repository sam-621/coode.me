import { Uuid, WithoutDateProperties } from '@/core/shared/domain';

import { PrimitiveSnippet, Snippet } from './snippet';

export interface SnippetRepository {
  findUnique(id: Uuid): Promise<PrimitiveSnippet | null>;
  findMany(): Promise<PrimitiveSnippet[]>;
  create(snippet: CreateSnippetInput): Promise<PrimitiveSnippet>;
  update(snippet: UpdateSnippetInput): Promise<PrimitiveSnippet>;
}

export type UpdateSnippetInput = WithoutDateProperties<Omit<Snippet, 'userId'>>;
export type CreateSnippetInput = WithoutDateProperties<Snippet>;

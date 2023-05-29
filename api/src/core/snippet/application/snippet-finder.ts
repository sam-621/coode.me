import { Primitive, Uuid } from '@/core/shared/domain';

import { PrimitiveSnippet, SnippetRepository } from '../domain';

export class SnippetFinder {
  constructor(private readonly repository: SnippetRepository) {}

  findUnique(id: Primitive<Uuid>): Promise<PrimitiveSnippet | null> {
    return this.repository.findUnique(new Uuid(id));
  }

  findMany() {
    return this.repository.findMany();
  }
}

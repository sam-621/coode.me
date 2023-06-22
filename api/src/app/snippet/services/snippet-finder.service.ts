import { Injectable } from '@nestjs/common';

import { SnippetFinder } from '@/core/snippet/application';
import { PrimitiveSnippet } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';

@Injectable()
export class SnippetFinderService {
  constructor(private snippetPostgresRepository: SnippetPostgresRepository) {}

  findMany(): Promise<PrimitiveSnippet[]> {
    const snippetFinder = new SnippetFinder(this.snippetPostgresRepository);

    return snippetFinder.findMany();
  }

  findUnique(id: string): Promise<PrimitiveSnippet | null> {
    const snippetFinder = new SnippetFinder(this.snippetPostgresRepository);

    return snippetFinder.findUnique(id);
  }
}

import { Injectable } from '@nestjs/common';

import { SnippetModifier, SnippetModifierCreateInput } from '@/core/snippet/application';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';

@Injectable()
export class SnippetModifierService {
  constructor(private snippetPostgresRepository: SnippetPostgresRepository) {}

  create(input: SnippetModifierCreateInput) {
    const snippetModifier = new SnippetModifier(this.snippetPostgresRepository);

    return snippetModifier.create(input);
  }
}

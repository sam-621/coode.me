import { Injectable } from '@nestjs/common';

import {
  SnippetModifier,
  SnippetModifierCreateInput,
  SnippetModifierUpdateInput
} from '@/core/snippet/application';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';

@Injectable()
export class SnippetModifierService {
  constructor(private snippetPostgresRepository: SnippetPostgresRepository) {}

  create(input: SnippetModifierCreateInput) {
    const snippetModifier = new SnippetModifier(this.snippetPostgresRepository);

    return snippetModifier.create(input);
  }

  update(input: SnippetModifierUpdateInput) {
    const snippetModifier = new SnippetModifier(this.snippetPostgresRepository);

    return snippetModifier.update(input);
  }
}

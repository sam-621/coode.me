import { Injectable } from '@nestjs/common';

import { Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';

import { Snippet } from '../domain';
import { SnippetPostgresRepository } from '../persistance';

@Injectable()
export class SnippetModifierService {
  constructor(private snippetPostgresRepository: SnippetPostgresRepository) {}

  create(input: SnippetModifierCreateInput) {
    const { value: id } = Uuid.create();
    const snippet = Snippet.create({ ...input, id });

    return this.snippetPostgresRepository.create(snippet);
  }

  update(input: SnippetModifierUpdateInput) {
    const snippet = Snippet.create({ ...input, userId: Uuid.create().value });

    return this.snippetPostgresRepository.update(snippet);
  }
}

type SnippetModifierCreateInput = Primitives<Omit<WithoutDateProperties<Snippet>, 'id'>>;
type SnippetModifierUpdateInput = Omit<Primitives<WithoutDateProperties<Snippet>>, 'userId'>;

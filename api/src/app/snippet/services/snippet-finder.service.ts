import { Injectable } from '@nestjs/common';

import { Uuid } from '@/core/shared/domain';

import { PrimitiveSnippet } from '../domain';
import { SnippetPostgresRepository } from '../persistance';

@Injectable()
export class SnippetFinderService {
  constructor(private snippetPostgresRepository: SnippetPostgresRepository) {}

  findMany(): Promise<PrimitiveSnippet[]> {
    return this.snippetPostgresRepository.findMany();
  }

  findUnique(id: string): Promise<PrimitiveSnippet | null> {
    return this.snippetPostgresRepository.findUnique(new Uuid(id));
  }
}

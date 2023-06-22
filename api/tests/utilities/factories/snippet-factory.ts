import { PrismaClient } from '@prisma/client';

import { Optional, Primitive, Uuid } from '@/app/shared/domain';
import { Snippet } from '@/app/snippet/domain';

export class SnippetFactory {
  constructor(readonly prisma: PrismaClient) {}

  async create(userId: Uuid) {
    return await this.prisma.snippet.create({
      data: {
        id: Uuid.create().value,
        userId: userId.value,
        description: '',
        code: 'code',
        language: 0
      }
    });
  }

  static create(snippet?: Optional<Primitive<Snippet>>) {
    return Snippet.create({
      id: snippet?.id ?? Uuid.create().value,
      userId: snippet?.userId ?? Uuid.create().value,
      code: snippet?.code ?? 'code',
      description: snippet?.description ?? 'description',
      language: snippet?.language ?? 0,
      repo: snippet?.repo ?? 'https://github.com/sam-621/coode.me'
    });
  }

  static createIncorrect(snippet?: Optional<Primitive<Snippet>>): Primitive<Snippet> {
    return {
      id: snippet?.id ?? 'incorrect id',
      userId: snippet?.userId ?? 'incorrect id',
      code: snippet?.code ?? 'code',
      description: snippet?.description ?? 'description',
      language: snippet?.language ?? 0,
      repo: snippet?.repo ?? 'invalid url',
      createdAt: snippet?.createdAt ?? new Date(),
      updatedAt: snippet?.updatedAt ?? new Date()
    };
  }
}

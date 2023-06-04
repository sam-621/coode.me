import { PrismaClient } from '@prisma/client';

import { Uuid } from '@/core/shared/domain';

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
}

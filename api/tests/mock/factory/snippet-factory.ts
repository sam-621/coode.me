import { Uuid } from '@/core/shared/domain';
import { prismaClientTest } from '../lib/prisma';

export class SnippetFactory {
  static readonly id = Uuid.create().value;

  static async create(userId: Uuid, id?: Uuid) {
    return await prismaClientTest.snippet.upsert({
      where: { id: this.id },
      update: {},
      create: {
        id: id?.value ?? this.id,
        userId: userId.value,
        description: '',
        code: 'code',
        language: 0
      }
    });
  }
}

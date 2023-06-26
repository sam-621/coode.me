import { PrismaClient } from '@prisma/client';

import { Optional, Uuid } from '@/app/shared/domain';
import { PrimitiveTopic, Topic } from '@/app/topic/domain';

export class TopicFactory {
  constructor(readonly prisma: PrismaClient) {}

  async create(): Promise<PrimitiveTopic> {
    const record = await this.prisma.topic.create({
      data: {
        id: Uuid.create().value,
        title: 'topic title',
        color: '#fff',
        description: 'topic description'
      },
      include: {
        _count: { select: { users: true } }
      }
    });

    return {
      ...record,
      stats: record._count.users
    };
  }

  static create(topic?: Optional<PrimitiveTopic>): Topic {
    return Topic.create({
      id: topic?.id ?? Uuid.create().value,
      color: topic?.color ?? '#fff',
      description: topic?.description ?? 'topic description',
      title: topic?.title ?? 'topic title'
    });
  }

  static createIncorrect(topic?: Optional<PrimitiveTopic>): PrimitiveTopic {
    return {
      id: topic?.id ?? 'incorrect id',
      createdAt: new Date(),
      updatedAt: new Date(),
      color: topic?.color ?? 'fff',
      description: topic?.description ?? 'topic description',
      title: topic?.title ?? 'topic title topic title topic title',
      stats: 0
    };
  }
}

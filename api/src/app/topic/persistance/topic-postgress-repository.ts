import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/shared/persistance';

import { FollowTopicRepositoryInput, PrimitiveTopic, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async follow({ topicId, userId }: FollowTopicRepositoryInput): Promise<void> {
    await this.prismaService.topicOnUser.upsert({
      create: { userId: userId.value, topicId: topicId.value },
      update: {},
      where: {
        userId_topicId: {
          userId: userId.value,
          topicId: topicId.value
        }
      }
    });
  }

  async findMany(): Promise<PrimitiveTopic[]> {
    const records = await this.prismaService.topic.findMany({
      include: {
        _count: { select: { users: true } }
      },
      orderBy: { title: 'asc' }
    });

    return records.map(r => ({ ...r, _count: undefined, stats: r._count.users }));
  }
}

import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';
import { PrismaService } from '@/app/shared/persistance';

import { FindManyTopicRepository, FollowTopicRepository, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async follow(userId: Uuid, topicId: Uuid): Promise<FollowTopicRepository> {
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

  async findMany(): Promise<FindManyTopicRepository> {
    const records = await this.prismaService.topic.findMany({
      include: {
        _count: { select: { users: true } }
      },
      orderBy: { title: 'asc' }
    });

    return records.map(r => ({ ...r, stats: r._count.users }));
  }
}

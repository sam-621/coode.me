import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';
import { PrismaService } from '@/app/shared/persistance';

import { FindManyTopicRepository, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(userId?: Uuid): Promise<FindManyTopicRepository> {
    return this.prismaService.topic.findMany({
      include: {
        _count: { select: { users: true } },
        users: { where: { userId: userId?.value }, select: { userId: true } }
      },
      orderBy: { title: 'asc' }
    });
  }
}

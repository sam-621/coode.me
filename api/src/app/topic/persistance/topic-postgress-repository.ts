import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/shared/persistance';

import { FindManyTopicRepository, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

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

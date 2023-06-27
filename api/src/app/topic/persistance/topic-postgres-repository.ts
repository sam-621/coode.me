import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';
import { PrismaService } from '@/app/shared/persistance';

import { PrimitiveTopic, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(userId?: Uuid): Promise<PrimitiveTopic[]> {
    const records = await this.prismaService.topic.findMany({
      include: {
        _count: { select: { users: true } },
        users: {
          select: { userId: true },
          where: { userId: userId?.value ?? '' }
        }
      },
      orderBy: { title: 'asc' }
    });

    return records.map(r => ({
      ...r,
      _count: undefined,
      users: undefined,
      stats: r._count.users,
      isFollowed: Boolean(r.users.length)
    }));
  }
}

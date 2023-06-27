import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/shared/persistance';

import { CreateTopicOnUserRepositoryInput, TopicOnUserRepository } from '../domain';

@Injectable()
export class TopicOnUserPostgresRepository implements TopicOnUserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create({ topicId, userId }: CreateTopicOnUserRepositoryInput): Promise<void> {
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
}

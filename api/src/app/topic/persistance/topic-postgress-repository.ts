import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/shared/persistance';

import { PrimitiveTopic, TopicRepository } from '../domain';

@Injectable()
export class TopicPostgresRepository implements TopicRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany(): Promise<PrimitiveTopic[]> {
    return this.prismaService.topic.findMany();
  }
}

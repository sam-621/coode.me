import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';

import { PrimitiveTopic } from '../domain';
import { TopicPostgresRepository } from '../persistance';

@Injectable()
export class TopicService {
  constructor(private topicPostgresRepository: TopicPostgresRepository) {}

  async findMany({ userId }: FindManyInput): Promise<PrimitiveTopic[]> {
    return this.topicPostgresRepository.findMany(userId ? new Uuid(userId) : undefined);
  }
}

type FindManyInput = {
  userId?: string;
};

import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';

import { FollowTopicRepository } from '../domain';
import { TopicPostgresRepository } from '../persistance';

@Injectable()
export class TopicModifierService {
  constructor(private topicPostgresRepository: TopicPostgresRepository) {}

  async follow(userId: string, topicId: string): Promise<FollowTopicRepository> {
    this.topicPostgresRepository.follow(new Uuid(userId), new Uuid(topicId));
  }
}

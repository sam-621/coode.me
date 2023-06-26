import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';

import { TopicPostgresRepository } from '../persistance';

@Injectable()
export class TopicModifierService {
  constructor(private topicPostgresRepository: TopicPostgresRepository) {}

  async follow({ topicId, userId }: FollowInput): Promise<void> {
    this.topicPostgresRepository.follow({ userId: new Uuid(userId), topicId: new Uuid(topicId) });
  }
}

type FollowInput = {
  userId: string;
  topicId: string;
};

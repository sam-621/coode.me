import { Injectable } from '@nestjs/common';

import { Uuid } from '@/app/shared/domain';

import { TopicOnUserPostgresRepository } from '../persistance';

@Injectable()
export class TopicModifierService {
  constructor(private topicOnUserPostgresRepository: TopicOnUserPostgresRepository) {}

  async follow({ topicId, userId }: FollowInput): Promise<void> {
    this.topicOnUserPostgresRepository.create({
      userId: new Uuid(userId),
      topicId: new Uuid(topicId)
    });
  }
}

type FollowInput = {
  userId: string;
  topicId: string;
};

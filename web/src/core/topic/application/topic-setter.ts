import { TopicRepository } from '../domain';

export class TopicSetter {
  constructor(private readonly repository: TopicRepository) {}

  async follow({ userId, topicId }: FollowInput): Promise<void> {
    await this.repository.follow({ userId, topicId });
  }
}

type FollowInput = {
  userId: string;
  topicId: string;
};

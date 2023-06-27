import { Topic, TopicRepository } from '../domain';

export class TopicService {
  constructor(private readonly repository: TopicRepository) {}

  getAll(): Promise<Topic[]> {
    return this.repository.getAll();
  }

  async follow({ userId, topicId }: FollowInput): Promise<void> {
    await this.repository.follow({ userId, topicId });
  }
}

type FollowInput = {
  userId: string;
  topicId: string;
};

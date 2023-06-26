import { Topic } from './topic';

export interface TopicRepository {
  getAll(): Promise<Topic[]>;
  follow(topicOnUser: FollowTopicRepositoryInput): Promise<void>;
}

export type FollowTopicRepositoryInput = {
  userId: string;
  topicId: string;
};

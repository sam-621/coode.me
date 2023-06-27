import { Uuid } from '@/app/shared/domain';

export interface TopicOnUserRepository {
  create(topicOnUser: CreateTopicOnUserRepositoryInput): Promise<void>;
}

export type CreateTopicOnUserRepositoryInput = {
  userId: Uuid;
  topicId: Uuid;
};

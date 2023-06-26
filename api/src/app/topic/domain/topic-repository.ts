import { Uuid } from '@/app/shared/domain';

import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(): Promise<PrimitiveTopic[]>;
  follow(topicOnUser: FollowTopicRepositoryInput): Promise<void>;
}

export type FollowTopicRepositoryInput = {
  userId: Uuid;
  topicId: Uuid;
};

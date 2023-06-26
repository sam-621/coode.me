import { Uuid } from '@/app/shared/domain';

import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(): Promise<FindManyTopicRepository>;
  follow(userId: Uuid, topicId: Uuid): Promise<FollowTopicRepository>;
}

export type FindManyTopicRepository = PrimitiveTopic[];
export type FollowTopicRepository = void;

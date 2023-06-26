import { Uuid, WithCount } from '@/app/shared/domain';

import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(userId?: Uuid): Promise<FindManyTopicRepository>;
}

export type FindManyTopicRepository = WithCount<PrimitiveTopic, 'users'>[];

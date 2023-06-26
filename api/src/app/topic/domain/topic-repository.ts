import { Uuid } from '@/app/shared/domain';

import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(): Promise<FindManyTopicRepository>;
}

export type FindManyTopicRepository = PrimitiveTopic[];

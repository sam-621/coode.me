import { WithCount } from '@/core/shared/domain';

import { Topic } from './topic';

export interface TopicRepository {
  getAll(): Promise<GetAllTopicRepository>;
}

export type GetAllTopicRepository = WithCount<Topic, 'users'>[];

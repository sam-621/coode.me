import { Uuid } from '@/app/shared/domain';

import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(userId?: Uuid): Promise<PrimitiveTopic[]>;
}

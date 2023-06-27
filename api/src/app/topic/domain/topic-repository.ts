import { PrimitiveTopic } from './topic';

export interface TopicRepository {
  findMany(): Promise<PrimitiveTopic[]>;
}

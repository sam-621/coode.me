import { Topic } from './topic';

export interface TopicRepository {
  findMany(): Promise<Topic[]>;
}

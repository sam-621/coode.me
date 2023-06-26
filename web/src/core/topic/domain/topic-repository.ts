import { Topic } from './topic';

export interface TopicRepository {
  getAll(): Promise<Topic[]>;
}

import { Topic, TopicRepository } from '../domain';

export class TopicGetter {
  constructor(readonly repository: TopicRepository) {}

  getAll(): Promise<Topic[]> {
    return this.repository.getAll();
  }
}

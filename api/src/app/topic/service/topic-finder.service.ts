import { Injectable } from '@nestjs/common';

import { FindManyTopicRepository } from '../domain';
import { TopicPostgresRepository } from '../persistance';

@Injectable()
export class TopicFinderService {
  constructor(private topicPostgresRepository: TopicPostgresRepository) {}

  findMany(): Promise<FindManyTopicRepository> {
    return this.topicPostgresRepository.findMany();
  }
}

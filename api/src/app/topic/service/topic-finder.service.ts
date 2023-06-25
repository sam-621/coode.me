import { Injectable } from '@nestjs/common';

import { PrimitiveTopic } from '../domain';
import { TopicPostgresRepository } from '../persistance';

@Injectable()
export class TopicFinderService {
  constructor(private topicPostgresRepository: TopicPostgresRepository) {}

  findMany(): Promise<PrimitiveTopic[]> {
    return this.topicPostgresRepository.findMany();
  }
}

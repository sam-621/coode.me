import { Module } from '@nestjs/common';

import { TopicFinderController } from './controllers';
import { TopicPostgresRepository } from './persistance';
import { TopicFinderService } from './service';

@Module({
  providers: [TopicPostgresRepository, TopicFinderService],
  controllers: [TopicFinderController]
})
export class TopicModule {}

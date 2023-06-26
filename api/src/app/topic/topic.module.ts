import { Module } from '@nestjs/common';

import { TopicModifierController } from './controllers/topic-modifier.controller';
import { TopicFinderController } from './controllers';
import { TopicPostgresRepository } from './persistance';
import { TopicFinderService, TopicModifierService } from './service';

@Module({
  providers: [TopicPostgresRepository, TopicFinderService, TopicModifierService],
  controllers: [TopicFinderController, TopicModifierController]
})
export class TopicModule {}

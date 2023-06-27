import { Module } from '@nestjs/common';

import { TopicController, TopicOnUserController } from './controllers';
import { TopicOnUserPostgresRepository, TopicPostgresRepository } from './persistance';
import { TopicOnUserService, TopicService } from './service';

const repositories = [TopicPostgresRepository, TopicOnUserPostgresRepository];
const services = [TopicService, TopicOnUserService];

@Module({
  providers: [...repositories, ...services],
  controllers: [TopicController, TopicOnUserController]
})
export class TopicModule {}

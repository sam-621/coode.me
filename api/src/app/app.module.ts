import { Module } from '@nestjs/common';

import { ConfigModule } from '@/common/config';
import { LoggerModule } from '@/common/errors';

import { PrismaModule } from './shared/persistance';
import { ProjectModule } from './project';
import { SnippetModule } from './snippet';
import { TopicModule } from './topic';

@Module({
  imports: [LoggerModule, ConfigModule, PrismaModule, SnippetModule, ProjectModule, TopicModule]
})
export class AppModule {}

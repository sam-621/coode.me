import { Module } from '@nestjs/common';

import { ConfigModule } from '@/common/config';
import { LoggerModule } from '@/common/errors';

import { PrismaModule } from './shared/persistance';
import { ProjectModule } from './project';
import { SnippetModule } from './snippet';

@Module({
  imports: [LoggerModule, ConfigModule, PrismaModule, SnippetModule, ProjectModule]
})
export class AppModule {}

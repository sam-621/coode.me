import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/common/config';
import { LoggerModule } from 'src/common/errors';

import { PrismaModule } from './shared/persistance';
import { ProjectModule } from './project';
import { SnippetModule } from './snippet';

@Module({
  imports: [LoggerModule, ConfigModule, PrismaModule, SnippetModule, ProjectModule]
})
export class AppModule {}

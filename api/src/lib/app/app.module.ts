import { Module } from '@nestjs/common';

import { ConfigModule } from '@/common/config';
import { LoggerModule } from '@/common/errors';
import { PrismaModule } from '@/core/shared/infrastructure';

import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [LoggerModule, ConfigModule, PrismaModule, SnippetModule]
})
export class AppModule {}

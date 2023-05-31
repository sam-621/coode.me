import { Module } from '@nestjs/common';

import { ConfigModule } from '@/common/config';
import { PrismaModule } from '@/core/shared/infrastructure';

import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [ConfigModule, PrismaModule, SnippetModule]
})
export class AppModule {}

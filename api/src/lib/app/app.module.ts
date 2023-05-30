import { Module } from '@nestjs/common';

import { ConfigModule } from '@/common/config';

import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [ConfigModule, SnippetModule]
})
export class AppModule {}

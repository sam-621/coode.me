import { Module } from '@nestjs/common';

import { SnipperPostgresModule } from '@/core/snippet/infrastructure';

import { SnippetController } from './snippet.controller';
import { SnippetService } from './snippet.service';

@Module({
  imports: [SnipperPostgresModule],
  controllers: [SnippetController],
  providers: [SnippetService]
})
export class SnippetModule {}

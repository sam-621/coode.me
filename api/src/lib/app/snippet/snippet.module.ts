import { Module } from '@nestjs/common';

import { SnipperPostgresModule } from '@/core/snippet/infrastructure';

import { SnippetFinderController } from './controllers/snippet-finder.controller';
import { SnippetFinderService } from './services/snippet-finder.service';

@Module({
  imports: [SnipperPostgresModule],
  controllers: [SnippetFinderController],
  providers: [SnippetFinderService]
})
export class SnippetModule {}

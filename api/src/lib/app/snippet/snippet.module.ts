import { Module } from '@nestjs/common';

import { SnipperPostgresModule } from '@/core/snippet/infrastructure';

import { SnippetFinderController } from './controllers/snippet-finder.controller';
import { SnippetModifierController } from './controllers/snippet-modifier.controller';
import { SnippetFinderService } from './services/snippet-finder.service';
import { SnippetModifierService } from './services/snippet-modifier.service';

@Module({
  imports: [SnipperPostgresModule],
  controllers: [SnippetFinderController, SnippetModifierController],
  providers: [SnippetFinderService, SnippetModifierService]
})
export class SnippetModule {}

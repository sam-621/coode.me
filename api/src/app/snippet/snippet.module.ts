import { Module } from '@nestjs/common';

import { SnippetFinderController, SnippetModifierController } from './controllers';
import { SnippetPostgresRepository } from './persistance';
import { SnippetFinderService, SnippetModifierService } from './services';

@Module({
  controllers: [SnippetFinderController, SnippetModifierController],
  providers: [SnippetPostgresRepository, SnippetFinderService, SnippetModifierService]
})
export class SnippetModule {}

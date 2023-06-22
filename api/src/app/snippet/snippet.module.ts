import { Module } from '@nestjs/common';

import { SnippetPostgresModule } from '@/core/snippet/infrastructure';

import { SnippetFinderController, SnippetModifierController } from './controllers';
import { SnippetFinderService, SnippetModifierService } from './services';

@Module({
  imports: [SnippetPostgresModule],
  controllers: [SnippetFinderController, SnippetModifierController],
  providers: [SnippetFinderService, SnippetModifierService]
})
export class SnippetModule {}

import { Module } from '@nestjs/common';

import { SnipperPostgresModule } from '@/core/snippet/infrastructure';

import { SnippetFinderController, SnippetModifierController } from './controllers';
import { SnippetFinderService, SnippetModifierService } from './services';

@Module({
  imports: [SnipperPostgresModule],
  controllers: [SnippetFinderController, SnippetModifierController],
  providers: [SnippetFinderService, SnippetModifierService]
})
export class SnippetModule {}

import { Module } from '@nestjs/common';

import { SnippetPostgresRepository } from './snippet-postgres-repository';

@Module({
  providers: [SnippetPostgresRepository],
  exports: [SnippetPostgresRepository]
})
export class SnipperPostgresModule {}

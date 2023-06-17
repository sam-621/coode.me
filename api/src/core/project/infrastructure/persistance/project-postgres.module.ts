import { Module } from '@nestjs/common';

import { ProjectPostgresRepository } from './project-postgres-repository';

@Module({
  providers: [ProjectPostgresRepository],
  exports: [ProjectPostgresRepository]
})
export class ProjectPostgresModule {}

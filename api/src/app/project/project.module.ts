import { Module } from '@nestjs/common';

import { ProjectFinderController, ProjectModifierController } from './controllers';
import { ProjectPostgresRepository } from './persistance';
import { ProjectFinderService, ProjectModifierService } from './services';

@Module({
  controllers: [ProjectFinderController, ProjectModifierController],
  providers: [ProjectPostgresRepository, ProjectFinderService, ProjectModifierService]
})
export class ProjectModule {}

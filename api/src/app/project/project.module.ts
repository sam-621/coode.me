import { Module } from '@nestjs/common';

import { ProjectPostgresModule } from '@/core/project/infrastructure';

import { ProjectFinderController, ProjectModifierController } from './controllers';
import { ProjectFinderService, ProjectModifierService } from './services';

@Module({
  imports: [ProjectPostgresModule],
  controllers: [ProjectFinderController, ProjectModifierController],
  providers: [ProjectFinderService, ProjectModifierService]
})
export class ProjectModule {}

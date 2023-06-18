import { Module } from '@nestjs/common';

import { ProjectFinderController, ProjectModifierController } from './controllers';
import { ProjectFinderService, ProjectModifierService } from './services';

@Module({
  controllers: [ProjectFinderController, ProjectModifierController],
  providers: [ProjectFinderService, ProjectModifierService]
})
export class ProjectModule {}

import { Module } from '@nestjs/common';

import { ProjectFinderController } from './controllers';
import { ProjectFinderService, ProjectModifierService } from './services';

@Module({
  controllers: [ProjectFinderController],
  providers: [ProjectFinderService, ProjectModifierService]
})
export class ProjectModule {}

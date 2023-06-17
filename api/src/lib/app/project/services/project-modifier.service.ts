import { Injectable } from '@nestjs/common';

import {
  ProjectModifier,
  ProjectModifierCreateInput,
  ProjectModifierUpdateInput
} from '@/core/project/application';
import { ProjectPostgresRepository } from '@/core/project/infrastructure';

@Injectable()
export class ProjectFinderService {
  constructor(private projectPostgresRepository: ProjectPostgresRepository) {}

  create(input: ProjectModifierCreateInput) {
    const projectModifier = new ProjectModifier(this.projectPostgresRepository);

    return projectModifier.create(input);
  }

  update(input: ProjectModifierUpdateInput) {
    const projectModifier = new ProjectModifier(this.projectPostgresRepository);

    return projectModifier.update(input);
  }
}

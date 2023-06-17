import { Injectable } from '@nestjs/common';

import { ProjectFinder } from '@/core/project/application';
import { PrimitiveProject } from '@/core/project/domain';
import { ProjectPostgresRepository } from '@/core/project/infrastructure';

@Injectable()
export class ProjectFinderService {
  constructor(private projectPostgresRepository: ProjectPostgresRepository) {}

  findMany(): Promise<PrimitiveProject[]> {
    const projectFinder = new ProjectFinder(this.projectPostgresRepository);

    return projectFinder.findMany();
  }

  findUnique(id: string): Promise<PrimitiveProject | null> {
    const projectFinder = new ProjectFinder(this.projectPostgresRepository);

    return projectFinder.findUnique(id);
  }
}

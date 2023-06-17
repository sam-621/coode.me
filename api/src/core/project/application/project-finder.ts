import { Primitive, Uuid } from '@/core/shared/domain';

import { PrimitiveProject, ProjectRepository } from '../domain';

export class ProjectFinder {
  constructor(private readonly repository: ProjectRepository) {}

  findUnique(id: Primitive<Uuid>): Promise<PrimitiveProject | null> {
    return this.repository.findUnique(new Uuid(id));
  }

  findMany() {
    return this.repository.findMany();
  }
}

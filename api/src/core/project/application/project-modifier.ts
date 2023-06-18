import { Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';

import { PrimitiveProject, Project, ProjectRepository } from '../domain';

export class ProjectModifier {
  constructor(private readonly repository: ProjectRepository) {}

  create(input: ProjectModifierCreateInput): Promise<PrimitiveProject> {
    const { value: id } = Uuid.create();
    const project = Project.create({ ...input, id, isFeatured: false });

    return this.repository.create(project);
  }

  update(input: ProjectModifierUpdateInput): Promise<PrimitiveProject> {
    const project = Project.create({ ...input, userId: Uuid.create().value });

    return this.repository.update(project);
  }
}

export type ProjectModifierCreateInput = Primitives<
  Omit<WithoutDateProperties<Project>, 'id' | 'isFeatured'>
>;
export type ProjectModifierUpdateInput = Omit<Primitives<WithoutDateProperties<Project>>, 'userId'>;

import { Injectable } from '@nestjs/common';

import { Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';

import { Project } from '../domain';
import { ProjectPostgresRepository } from '../persistance';

@Injectable()
export class ProjectModifierService {
  constructor(private projectPostgresRepository: ProjectPostgresRepository) {}

  create(input: ProjectModifierCreateInput) {
    const { value: id } = Uuid.create();
    const project = Project.create({ ...input, id, isFeatured: false });

    return this.projectPostgresRepository.create(project);
  }

  update(input: ProjectModifierUpdateInput) {
    const project = Project.create({ ...input, userId: Uuid.create().value });

    return this.projectPostgresRepository.update(project);
  }
}

export type ProjectModifierCreateInput = Primitives<
  Omit<WithoutDateProperties<Project>, 'id' | 'isFeatured'>
>;
export type ProjectModifierUpdateInput = Omit<Primitives<WithoutDateProperties<Project>>, 'userId'>;

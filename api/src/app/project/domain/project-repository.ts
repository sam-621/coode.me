import { Uuid } from '@/app/shared/domain';

import { PrimitiveProject, Project } from './project';

export interface ProjectRepository {
  findUnique(id: Uuid): Promise<PrimitiveProject | null>;
  findMany(): Promise<PrimitiveProject[]>;
  create(project: Project): Promise<PrimitiveProject>;
  update(project: Project): Promise<PrimitiveProject>;
}

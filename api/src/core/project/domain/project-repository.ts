import { Uuid } from '@/core/shared/domain';

import { PrimitiveProject, Project } from './project';

export interface ProjectRepository {
  findUnique(id: Uuid): Promise<PrimitiveProject | null>;
  findMany(): Promise<PrimitiveProject[]>;
  create(snippet: Project): Promise<PrimitiveProject>;
  update(snippet: Project): Promise<PrimitiveProject>;
}

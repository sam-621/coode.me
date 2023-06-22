import { Injectable } from '@nestjs/common';

import { PrimitiveProject } from '@/app/project/domain';
import { Uuid } from '@/app/shared/domain';

import { ProjectPostgresRepository } from '../persistance';

@Injectable()
export class ProjectFinderService {
  constructor(private projectPostgresRepository: ProjectPostgresRepository) {}

  findUnique(id: string): Promise<PrimitiveProject | null> {
    return this.projectPostgresRepository.findUnique(new Uuid(id));
  }

  findMany(): Promise<PrimitiveProject[]> {
    return this.projectPostgresRepository.findMany();
  }
}

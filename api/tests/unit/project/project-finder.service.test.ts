import { beforeEach, describe, expect, it } from 'vitest';

import { ProjectFinderService } from '@/app/project/services';
import { Project } from '@/core/project/domain';
import { ProjectPostgresRepository } from '@/core/project/infrastructure';
import { Primitive, Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { ProjectFactory } from '@/utilities/factories/project-factory';
import { prismaMock } from '@/utilities/mocks';

describe('project-finder.service', () => {
  let projectFinderService: ProjectFinderService;

  beforeEach(() => {
    const projectPostgresRepository = new ProjectPostgresRepository(
      prismaMock as unknown as PrismaService
    );
    projectFinderService = new ProjectFinderService(projectPostgresRepository);
  });

  describe('Find many', () => {
    it('Should return a list of projects', async () => {
      const projects = [
        ProjectFactory.create().toPrimitives(),
        ProjectFactory.create().toPrimitives()
      ];

      prismaMock.project.findMany.mockResolvedValue(projects);

      const result = await projectFinderService.findMany();

      expect(result[0]).toStrictEqual(projects[0]);
      expect(result[1]).toStrictEqual(projects[1]);
    });

    it('Should return an empty list of projects', async () => {
      const projects: Primitive<Project>[] = [];

      prismaMock.project.findMany.mockResolvedValue(projects);

      const result = await projectFinderService.findMany();

      expect(result).toHaveLength(0);
    });
  });

  describe('Find unique', () => {
    it('Should return a unique project related to the given id', async () => {
      const projectToFind = ProjectFactory.create().toPrimitives();

      prismaMock.project.findUnique.mockResolvedValue(projectToFind);

      const result = await projectFinderService.findUnique(projectToFind.id);

      expect(result).toStrictEqual(projectToFind);
    });

    it('Should return a null project when providing an id that does not exist', async () => {
      const { value: randomId } = Uuid.create();

      prismaMock.project.findUnique.mockResolvedValue(null);

      const result = await projectFinderService.findUnique(randomId);

      expect(result).toBeNull();
    });
  });
});

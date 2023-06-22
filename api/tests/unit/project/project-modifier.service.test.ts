import { beforeEach, describe, expect, it } from 'vitest';

import { ProjectPostgresRepository } from '@/app/project/persistance';
import { ProjectModifierService } from '@/app/project/services';
import { ValidationError } from '@/app/shared/domain';
import { PrismaService } from '@/app/shared/persistance';
import { ProjectFactory } from '@/utilities/factories';
import { prismaMock } from '@/utilities/mocks';

describe('project-modifier.service', () => {
  let projectModifierService: ProjectModifierService;

  beforeEach(() => {
    const projectPostgresRepository = new ProjectPostgresRepository(
      prismaMock as unknown as PrismaService
    );
    projectModifierService = new ProjectModifierService(projectPostgresRepository);
  });

  describe('Create', () => {
    it('Should create a project when providing correct data', async () => {
      const projectToCreate = ProjectFactory.create().toPrimitives();

      prismaMock.project.create.mockResolvedValue(projectToCreate);

      const result = await projectModifierService.create(projectToCreate);

      expect(result).toStrictEqual(projectToCreate);
    });

    it('Should not create a project when providing incorrect data', async () => {
      const incorrectProject = ProjectFactory.createIncorrect();

      const throwsInvalidProjectError = async () =>
        await projectModifierService.create(incorrectProject);

      expect(throwsInvalidProjectError).rejects.toThrow(ValidationError);
    });
  });

  describe('Update', () => {
    it('Should update a project when providing correct data', async () => {
      const projectToUpdate = ProjectFactory.create().toPrimitives();

      prismaMock.project.update.mockResolvedValue(projectToUpdate);

      const result = await projectModifierService.update(projectToUpdate);

      expect(result).toStrictEqual(projectToUpdate);
    });

    it('Should not update a project when providing incorrect data', async () => {
      const incorrectProject = ProjectFactory.createIncorrect();

      const throwsInvalidProjectError = async () =>
        await projectModifierService.update(incorrectProject);

      expect(throwsInvalidProjectError).rejects.toThrow(ValidationError);
    });
  });
});

import { beforeEach, describe, expect, it } from 'vitest';

import { SnippetModifierService } from '@/app/snippet/services';
import { Uuid, ValidationError } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { SnippetDescription } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
import { SnippetFactory } from '@/utilities/factories';
import { prismaMock } from '@/utilities/mocks';

describe('snippet-modifier.service', () => {
  let snippetModifierService: SnippetModifierService;

  beforeEach(() => {
    const snippetPostgresRepository = new SnippetPostgresRepository(
      prismaMock as unknown as PrismaService
    );
    snippetModifierService = new SnippetModifierService(snippetPostgresRepository);
  });

  describe('Create', () => {
    it('Should create a snippet when providing correct data', async () => {
      const snippetToCreate = SnippetFactory.create().toPrimitives();

      prismaMock.snippet.create.mockResolvedValue(snippetToCreate);

      const result = await snippetModifierService.create(snippetToCreate);

      expect(result).toStrictEqual(snippetToCreate);
    });

    it('Should not create a snippet when providing incorrect data', async () => {
      const incorrectIdsSnippet = SnippetFactory.createIncorrect();
      const incorrectDescriptionSnippet = SnippetFactory.createIncorrect({
        id: Uuid.create().value,
        userId: Uuid.create().value,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
      });

      const throwsInvalidIdsError = async () =>
        await snippetModifierService.create(incorrectIdsSnippet);

      const throwsInvalidDescriptionError = async () =>
        await snippetModifierService.create(incorrectDescriptionSnippet);

      expect(throwsInvalidIdsError).rejects.toThrow(ValidationError);
      expect(throwsInvalidIdsError).rejects.toThrow(Uuid.invalidMessage(incorrectIdsSnippet.id));

      expect(throwsInvalidDescriptionError).rejects.toThrow(ValidationError);
      expect(throwsInvalidDescriptionError).rejects.toThrow(SnippetDescription.invalidMessage());
    });
  });

  describe('Update', () => {
    it('Should update an snippet when providing correct data', async () => {
      const snippetToUpdate = SnippetFactory.create().toPrimitives();

      prismaMock.snippet.update.mockResolvedValue(snippetToUpdate);

      const result = await snippetModifierService.update(snippetToUpdate);

      expect(result).toStrictEqual(snippetToUpdate);
    });

    it('Should not update an snippet when providing incorrect data', async () => {
      const incorrectIdsSnippet = SnippetFactory.createIncorrect();
      const incorrectDescriptionSnippet = SnippetFactory.createIncorrect({
        id: Uuid.create().value,
        userId: Uuid.create().value,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
      });

      const throwsInvalidIdsError = async () =>
        await snippetModifierService.update(incorrectIdsSnippet);

      const throwsInvalidDescriptionError = async () =>
        await snippetModifierService.update(incorrectDescriptionSnippet);

      expect(throwsInvalidIdsError).rejects.toThrow(ValidationError);
      expect(throwsInvalidIdsError).rejects.toThrow(Uuid.invalidMessage(incorrectIdsSnippet.id));

      expect(throwsInvalidDescriptionError).rejects.toThrow(ValidationError);
      expect(throwsInvalidDescriptionError).rejects.toThrow(SnippetDescription.invalidMessage());
    });
  });
});

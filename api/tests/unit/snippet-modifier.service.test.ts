import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SnippetModifierService } from '@/app/snippet/services';
import { Uuid, ValidationError } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
import { SnippetFactory } from '@/utilities/factories';
import { prismaMock } from '@/utilities/mocks';

describe('snippet-modifier.service', () => {
  let snippetModifierService: SnippetModifierService;

  beforeEach(() => {
    vi.restoreAllMocks();

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
      const snippetToCreate = SnippetFactory.createIncorrect();

      const t = async () => {
        await snippetModifierService.create(snippetToCreate);
      };

      expect(t).rejects.toThrow(ValidationError);
      expect(t).rejects.toThrow(Uuid.invalidMessage(snippetToCreate.id));
    });
  });
});

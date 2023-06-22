import { beforeEach, describe, expect, it } from 'vitest';

import { Snippet } from '@/app/snippet/domain';
import { SnippetPostgresRepository } from '@/app/snippet/persistance';
import { SnippetFinderService } from '@/app/snippet/services';
import { Primitive, Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { SnippetFactory } from '@/utilities/factories';
import { prismaMock } from '@/utilities/mocks';

describe('snippet-finder.service', () => {
  let snippetFinderService: SnippetFinderService;

  beforeEach(() => {
    const snippetPostgresRepository = new SnippetPostgresRepository(
      prismaMock as unknown as PrismaService
    );
    snippetFinderService = new SnippetFinderService(snippetPostgresRepository);
  });

  describe('Find many', () => {
    it('Should return a list of snippets', async () => {
      const snippets = [
        SnippetFactory.create().toPrimitives(),
        SnippetFactory.create().toPrimitives()
      ];

      prismaMock.snippet.findMany.mockResolvedValue(snippets);

      const result = await snippetFinderService.findMany();

      expect(result[0]).toStrictEqual(snippets[0]);
      expect(result[1]).toStrictEqual(snippets[1]);
    });

    it('Should return an empty list of snippets', async () => {
      const snippets: Primitive<Snippet>[] = [];

      prismaMock.snippet.findMany.mockResolvedValue(snippets);

      const result = await snippetFinderService.findMany();

      expect(result).toHaveLength(0);
    });
  });

  describe('Find unique', () => {
    it('Should return a unique snippet related to the given id', async () => {
      const snippetToFind = SnippetFactory.create().toPrimitives();

      prismaMock.snippet.findUnique.mockResolvedValue(snippetToFind);

      const result = await snippetFinderService.findUnique(snippetToFind.id);

      expect(result).toStrictEqual(snippetToFind);
    });

    it('Should return a null snippet when providing an id that does not exist', async () => {
      const { value: randomId } = Uuid.create();

      prismaMock.snippet.findUnique.mockResolvedValue(null);

      const result = await snippetFinderService.findUnique(randomId);

      expect(result).toBeNull();
    });
  });
});

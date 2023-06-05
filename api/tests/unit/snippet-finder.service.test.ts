import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SnippetFinderService } from '@/app/snippet/services';
import { Primitive } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { Snippet } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
import { SnippetFactory } from '@/utilities/factories';
import { prismaMock } from '@/utilities/mocks';

describe('snippet-finder.service', () => {
  let snippetFinderService: SnippetFinderService;

  beforeEach(() => {
    vi.restoreAllMocks();

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
});

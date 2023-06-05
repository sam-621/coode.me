import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SnippetFinderService } from '@/app/snippet/services';
import { Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { Snippet } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
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
        Snippet.create({
          id: Uuid.create().value,
          userId: Uuid.create().value,
          code: 'code',
          language: 0,
          description: 'description'
        }).toPrimitives(),
        Snippet.create({
          id: Uuid.create().value,
          userId: Uuid.create().value,
          code: 'code',
          language: 0,
          description: 'description'
        }).toPrimitives()
      ];

      prismaMock.snippet.findMany.mockResolvedValue(snippets);

      const result = await snippetFinderService.findMany();

      expect(result[0]).toStrictEqual(snippets[0]);
      expect(result[1]).toStrictEqual(snippets[1]);
    });
  });
});

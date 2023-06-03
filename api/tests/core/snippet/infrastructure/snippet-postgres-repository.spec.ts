import { Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { Snippet } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
import { Context, createMockContext, MockContext } from '@/mock/lib/prisma';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe('Snippet Postgres Repository', () => {
  test('Should create the snippet when providing the correct information', async () => {
    const snippet = Snippet.create({
      id: Uuid.create().value,
      userId: Uuid.create().value,
      code: 'code',
      language: 3,
      description: 'description'
    });

    const primitiveSnippet = snippet.toPrimitives();
    mockCtx.snippet.create.mockResolvedValue(primitiveSnippet);

    const snippetPostgresRepository = new SnippetPostgresRepository(ctx as PrismaService);
    const result = await snippetPostgresRepository.create(snippet);

    expect(result).toEqual(primitiveSnippet);
  });

  test('Should update the snippet when providing the correct information', async () => {
    const snippet = Snippet.create({
      id: Uuid.create().value,
      userId: Uuid.create().value,
      code: 'code',
      language: 3,
      description: 'description'
    });

    const primitiveSnippet = snippet.toPrimitives();
    mockCtx.snippet.update.mockResolvedValue(primitiveSnippet);

    const snippetPostgresRepository = new SnippetPostgresRepository(ctx as PrismaService);
    const result = await snippetPostgresRepository.update(snippet);

    expect(result).toEqual(primitiveSnippet);
  });
});

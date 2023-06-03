import { Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';
import { Snippet } from '@/core/snippet/domain';
import { SnippetPostgresRepository } from '@/core/snippet/infrastructure';
import { UserFactory } from '@/mock/factory/user-factory';
import { prismaClientTest } from '@/mock/lib/prisma';

beforeAll(async () => {
  await UserFactory.create();
  console.log('✨ User for tests successfully created!');
});

afterAll(async () => {
  const deleteSnippets = prismaClientTest.snippet.deleteMany();
  const deleteUser = prismaClientTest.user.deleteMany();

  prismaClientTest.$transaction([deleteSnippets, deleteUser]);
  await prismaClientTest.$disconnect();
});

describe('Snippet Postgres Repository', () => {
  test('Should not update the snippet user id and the snippet created at when updating snippet', async () => {
    const owner = await prismaClientTest.user.findUnique({
      where: { username: UserFactory.username }
    });

    const snippet = Snippet.create({
      id: Uuid.create().value,
      userId: new Uuid(owner?.id ?? '').value,
      code: 'code',
      language: 3,
      description: 'description'
    });
    const primitiveSnippet = snippet.toEssentialPrimitives();

    const originalSnippet = await prismaClientTest.snippet.create({ data: primitiveSnippet });

    const newSnippet = Snippet.create({
      id: originalSnippet.id,
      userId: originalSnippet.userId,
      code: 'code updated',
      language: 5,
      description: 'description updated'
    });

    const snippetPostgresRepository = new SnippetPostgresRepository(
      prismaClientTest as PrismaService
    );
    const snippetUpdated = await snippetPostgresRepository.update(newSnippet);

    expect(snippetUpdated.createdAt).toEqual(originalSnippet.createdAt);
    expect(snippetUpdated.userId).toEqual(originalSnippet.userId);
  });
});

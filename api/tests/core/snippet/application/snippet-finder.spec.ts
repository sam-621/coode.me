import { Uuid } from '@/core/shared/domain';
import { SnippetFinder } from '@/core/snippet/application';
import { mockSnippets, SnippetMockRepository } from '@/mock/repositories';

describe('Snippet Finder', () => {
  it('Should not find any snippet when given an id that does not exist', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetFinder = new SnippetFinder(snippetMockRepository);

    const snippetId = Uuid.create();

    const snippet = await snippetFinder.findUnique(snippetId.value);

    expect(snippet).toBe(null);
  });

  it('Should find a snippet when given an existing id', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetFinder = new SnippetFinder(snippetMockRepository);

    const mockSnippet = mockSnippets[0];
    const { id: snippetId } = mockSnippet;

    const snippet = await snippetFinder.findUnique(snippetId.value);

    expect(snippet?.id).toBe(mockSnippet.id.value);
  });
});

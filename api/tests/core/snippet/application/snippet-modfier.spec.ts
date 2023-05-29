import { Uuid } from '@/core/shared/domain';
import { SnippetModifier } from '@/core/snippet/application';
import { mockSnippets, SnippetMockRepository } from '@/mock/repositories';

describe('Snippet Modifier', () => {
  it('Should not create snippet when data given is wrong', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetModifier = new SnippetModifier(snippetMockRepository);

    const initialLength = mockSnippets.length;

    // catch the error and not break the test
    try {
      await snippetModifier.create({
        id: Uuid.create().value,
        userId: 'incorrect id',
        code: '',
        description: '',
        language: 0
      });
    } catch (error) {}

    expect(mockSnippets.length).toBe(initialLength);
  });

  it('Should create snippet when data given is correct', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetModifier = new SnippetModifier(snippetMockRepository);

    const initialLength = mockSnippets.length;

    await snippetModifier.create({
      id: Uuid.create().value,
      userId: Uuid.create().value,
      code: '',
      description: '',
      language: 0
    });

    expect(mockSnippets.length).toBe(initialLength + 1);
  });

  it('Should not update snippet when data given is wrong', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetModifier = new SnippetModifier(snippetMockRepository);

    const modifiedDescription = 'modified';
    const mockSnippet = mockSnippets[0];

    // catch the error and not break the test
    try {
      await snippetModifier.update({
        id: 'incorrect id',
        code: '',
        description: modifiedDescription,
        language: 0
      });
    } catch (error) {}

    expect(mockSnippet.description).not.toBe(modifiedDescription);
  });

  it('Should update snippet when data given is correct', async () => {
    const snippetMockRepository = new SnippetMockRepository();
    const snippetModifier = new SnippetModifier(snippetMockRepository);

    const modifiedDescription = 'modified';
    const firstMockSnippet = mockSnippets[0];

    // catch the error and not break the test
    try {
      await snippetModifier.update({
        id: firstMockSnippet.id.value,
        code: '',
        description: modifiedDescription,
        language: 0
      });
    } catch (error) {
      console.log(error);
    }

    const firstMockedSnippetUpdated = mockSnippets[0];

    expect(firstMockedSnippetUpdated.description.value).toBe(modifiedDescription);
  });
});

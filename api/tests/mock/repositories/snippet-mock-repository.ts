import { Uuid } from '@/core/shared/domain';
import { PrimitiveSnippet, Snippet, SnippetRepository } from '@/core/snippet/domain';

export class SnippetMockRepository implements SnippetRepository {
  async findUnique(id: Uuid): Promise<PrimitiveSnippet | null> {
    const snippet = mockSnippets.find(curr => curr.id.equals(id));
    return snippet?.toPrimitives() ?? null;
  }

  async findMany(): Promise<PrimitiveSnippet[]> {
    return mockSnippets.map(s => s.toPrimitives());
  }

  async create(snippet: Snippet): Promise<PrimitiveSnippet> {
    mockSnippets.push(snippet);

    return snippet.toPrimitives();
  }

  async update(snippet: Snippet): Promise<PrimitiveSnippet> {
    let position = 0;

    const snippetFound = mockSnippets
      .find((curr, i) => {
        position = i;
        return curr.id.equals(snippet.id);
      })
      ?.toPrimitives();

    const newSnippet = Snippet.create({
      ...snippetFound,
      ...snippet.toPrimitives()
    });

    mockSnippets.splice(position, 1, newSnippet);

    return mockSnippets[position].toPrimitives();
  }
}

export const mockSnippets: Snippet[] = [
  snippetFactory({ code: '', description: 'snippet 1', language: 0 }),
  snippetFactory({ code: '', description: 'snippet 2', language: 0 }),
  snippetFactory({ code: '', description: 'snippet 3', language: 0 }),
  snippetFactory({ code: '', description: 'snippet 4', language: 0 })
];

function snippetFactory({
  code = '',
  description = '',
  language = 0
}: Pick<PrimitiveSnippet, 'code' | 'description' | 'language'>) {
  const { value: id } = Uuid.create();
  const { value: userId } = Uuid.create();

  return Snippet.create({ id, userId, code, description, language });
}

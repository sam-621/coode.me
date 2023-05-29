import { Uuid } from '@/core/shared/domain';
import {
  PrimitiveSnippet,
  Snippet,
  SnippetRepository,
  UpdateSnippetInput
} from '@/core/snippet/domain';

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

  async update(snippet: UpdateSnippetInput): Promise<PrimitiveSnippet> {
    let position = 0;
    mockSnippets.forEach((curr, i) => {
      if (curr.id.equals(snippet.id)) {
        position = i;
        curr = {
          ...curr,
          ...snippet
        };
      }
    });

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

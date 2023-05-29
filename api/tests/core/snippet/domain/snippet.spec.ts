import { Uuid, ValidationError } from '@/core/shared/domain';
import { Snippet, SnippetDescription } from '@/core/snippet/domain';

describe('Snippet', () => {
  it('Should throw validation error when providing incorrect id', () => {
    const t = () => {
      Snippet.create({ id: 'incorrect id', code: '', description: '', language: '' });
    };

    expect(t).toThrow(ValidationError);
  });

  it(`Should throw validation error when providing a description with more than ${SnippetDescription.DESCRIPTION_MAX_LENGTH} chars`, () => {
    const DESCRIPTION_WITH_MORE_THAN_ALLOWED_CHARS = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

    const t = () => {
      const { value: uuid } = Uuid.create();

      Snippet.create({
        id: uuid,
        code: '',
        description: DESCRIPTION_WITH_MORE_THAN_ALLOWED_CHARS,
        language: ''
      });
    };

    expect(t).toThrow(ValidationError);
  });

  it('Should create a snippet when providing correct information', () => {
    const { value: uuid } = Uuid.create();

    const snippet = Snippet.create({ id: uuid, code: '', language: '', description: '' });

    expect(snippet).toBeInstanceOf(Snippet);
  });
});
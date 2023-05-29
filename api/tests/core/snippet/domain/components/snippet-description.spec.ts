import { ValidationError } from '@/core/shared/domain';
import { SnippetDescription } from '@/core/snippet/domain';

describe('Snippet description', () => {
  it(`Should throw validation error when providing a description with more than ${SnippetDescription.DESCRIPTION_MAX_LENGTH} chars`, () => {
    const DESCRIPTION_WITH_MORE_THAN_ALLOWED_CHARS = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

    const t = () => {
      new SnippetDescription(DESCRIPTION_WITH_MORE_THAN_ALLOWED_CHARS);
    };

    expect(t).toThrow(ValidationError);
  });

  it('Should throw validation error when providing an undefined or null description', () => {
    const tUndefined = () => {
      new SnippetDescription(undefined as unknown as string);
    };

    const tNull = () => {
      new SnippetDescription(null as unknown as string);
    };

    expect(tUndefined).toThrow(ValidationError);
    expect(tNull).toThrow(ValidationError);
  });

  it('Should create description when providing a correct description', () => {
    const description = new SnippetDescription('correct description');

    expect(description).toBeInstanceOf(SnippetDescription);
  });
});

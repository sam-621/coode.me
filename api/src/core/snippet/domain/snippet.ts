import { Primitives } from '@/core/shared/domain';
import { SnippetDescription } from './components';

export class Snippet {
  private constructor(
    readonly id: string,
    readonly code: string,
    readonly language: string,
    readonly description: SnippetDescription
  ) {}

  public static create({ id, code, language, description }: Primitives<Snippet>) {
    return new Snippet(id, code, language, new SnippetDescription(description));
  }
}

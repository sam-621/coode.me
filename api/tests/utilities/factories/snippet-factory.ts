import { Optional, Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';

export class SnippetFactory {
  static create(snippet?: Optional<Primitive<Snippet>>) {
    return Snippet.create({
      id: snippet?.id ?? Uuid.create().value,
      userId: snippet?.userId ?? Uuid.create().value,
      code: snippet?.code ?? 'code',
      description: snippet?.description ?? 'description',
      language: snippet?.language ?? 0
    });
  }

  static createIncorrect(): Primitive<Snippet> {
    return {
      id: 'incorrect id',
      userId: 'incorrect id',
      code: 'code',
      description: 'description',
      language: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}

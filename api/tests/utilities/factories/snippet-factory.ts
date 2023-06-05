import { Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';

export class SnippetFactory {
  static create(userId?: Uuid) {
    return Snippet.create({
      id: Uuid.create().value,
      userId: userId?.value ?? Uuid.create().value,
      code: 'code',
      description: 'description',
      language: 0
    });
  }
}

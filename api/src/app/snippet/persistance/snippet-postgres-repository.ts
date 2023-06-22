import { Injectable } from '@nestjs/common';

import { Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';

import { PrimitiveSnippet, Snippet, SnippetRepository } from '../domain';

@Injectable()
export class SnippetPostgresRepository implements SnippetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUnique(id: Uuid): Promise<PrimitiveSnippet | null> {
    return this.prismaService.snippet.findUnique({ where: { id: id.value } });
  }

  findMany(): Promise<PrimitiveSnippet[]> {
    return this.prismaService.snippet.findMany();
  }

  create(snippet: Snippet): Promise<PrimitiveSnippet> {
    const { code, description, id, language, repo, userId } = snippet.toPrimitives();
    const input: CreateSnippetInput = {
      code,
      description,
      id,
      language,
      repo,
      userId
    };

    return this.prismaService.snippet.create({ data: input });
  }

  update(snippet: Snippet): Promise<PrimitiveSnippet> {
    const { id, code, description, language, repo } = snippet.toPrimitives();
    const input: UpdateSnippetInput = {
      code,
      description,
      language,
      repo
    };

    return this.prismaService.snippet.update({
      data: input,
      where: { id }
    });
  }
}

type CreateSnippetInput = Primitives<WithoutDateProperties<Snippet>>;
type UpdateSnippetInput = Omit<Primitives<WithoutDateProperties<Snippet>>, 'id' | 'userId'>;

import { Injectable } from '@nestjs/common';

import { Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';

import { PrimitiveSnippet, Snippet, SnippetRepository } from '../../domain';

@Injectable()
export class SnippetPostgresRepository implements SnippetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(id: Uuid): Promise<PrimitiveSnippet | null> {
    return this.prismaService.snippet.findUnique({ where: { id: id.value } });
  }

  findMany(): Promise<PrimitiveSnippet[]> {
    return this.prismaService.snippet.findMany();
  }

  create(snippet: Snippet): Promise<PrimitiveSnippet> {
    const primitiveSnippet = snippet.toEssentialPrimitives();
    const input: CreateSnippetInput = primitiveSnippet;

    return this.prismaService.snippet.create({ data: input });
  }

  update(snippet: Snippet): Promise<PrimitiveSnippet> {
    const { id, code, description, language } = snippet.toPrimitives();
    const input: UpdateSnippetInput = {
      code,
      description,
      language
    };

    return this.prismaService.snippet.update({
      data: input,
      where: { id }
    });
  }
}

export type CreateSnippetInput = Primitives<WithoutDateProperties<Snippet>>;
export type UpdateSnippetInput = Omit<Primitives<WithoutDateProperties<Snippet>>, 'id' | 'userId'>;

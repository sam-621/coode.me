import { Injectable } from '@nestjs/common';

import { Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';

import { PrimitiveSnippet, Snippet, SnippetRepository, UpdateSnippetInput } from '../../domain';

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
    const snippetPrimitives = snippet.toPrimitives();

    return this.prismaService.snippet.create({ data: snippetPrimitives });
  }

  update(snippet: UpdateSnippetInput): Promise<PrimitiveSnippet> {
    const snippetPrimitives = snippet.toPrimitives();

    return this.prismaService.snippet.update({
      data: snippetPrimitives,
      where: { id: snippetPrimitives.id }
    });
  }
}

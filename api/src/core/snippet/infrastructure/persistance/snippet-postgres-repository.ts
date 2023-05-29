import { Injectable } from '@nestjs/common';

import { Uuid } from '@/core/shared/domain';
import { PrismaService } from '@/core/shared/infrastructure';

import { PrimitiveSnippet, SnippetRepository } from '../../domain';

@Injectable()
export class SnippetPostgresRepository implements SnippetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(id: Uuid): Promise<PrimitiveSnippet | null> {
    return this.prismaService.snippet.findUnique({
      where: { id: id.value }
    });
  }

  findMany(): Promise<PrimitiveSnippet[]> {
    return this.prismaService.snippet.findMany();
  }
}

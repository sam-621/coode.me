import { PrismaClient } from '@prisma/client';

export class TestDbHandler {
  constructor(private readonly prisma: PrismaClient) {}

  async cleanUp() {
    const deleteSnippet = this.prisma.snippet.deleteMany();
    const deleteUser = this.prisma.user.deleteMany();

    await this.prisma.$transaction([deleteSnippet, deleteUser]);
  }
}

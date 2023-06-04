import { PrismaClient } from '@prisma/client';

export class TestDbHandler {
  constructor(private readonly prisma: PrismaClient) {}

  async cleanUp() {
    try {
      await this.prisma.snippet.deleteMany();
      await this.prisma.user.deleteMany();
    } catch (error) {}
  }
}

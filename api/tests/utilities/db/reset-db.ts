import { PrismaClient } from '@prisma/client';

export const resetDb = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    prisma.snippet.deleteMany(),
    prisma.project.deleteMany(),
    prisma.user.deleteMany()
  ]);
};

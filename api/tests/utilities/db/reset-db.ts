import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resetDb = async () => {
  await prisma.$transaction([prisma.snippet.deleteMany(), prisma.user.deleteMany()]);
};

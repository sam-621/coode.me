import { PrismaClient } from '@prisma/client';

import { seedTopic } from './seed/topic-seed';
import { seedUser } from './seed/user-seed';

const prisma = new PrismaClient();

const seed = async () => {
  await seedUser(prisma);
  await seedTopic(prisma);
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

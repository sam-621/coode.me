import { PrismaClient } from '@prisma/client';

export const seedUser = async (prisma: PrismaClient) => {
  const test = await prisma.user.upsert({
    where: { username: 'test' },
    update: {},
    create: {
      username: 'test',
      position: 'Frontend developer',
      bio: 'As a Front-end developer, I design, develop and deliver software products to improve the world with technology.',
      link: 'rogeliosamuel.com',
      gh: 'sam-621',
      location: 'Sinaloa, Mexico',
      language: {
        create: {
          name: 'Español',
          ISO: 'ES'
        }
      }
    }
  });

  console.log({ test });
};

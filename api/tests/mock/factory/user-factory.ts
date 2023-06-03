import { prismaClientTest } from '../lib/prisma';

export class UserFactory {
  static readonly username = 'test';

  static async create() {
    await prismaClientTest.user.upsert({
      where: { username: this.username },
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
  }
}

import { PrismaClient } from '@prisma/client';

import { Uuid } from '@/core/shared/domain';

export class UserFactory {
  constructor(private readonly prisma: PrismaClient) {}

  async create() {
    return await this.prisma.user.create({
      data: {
        username: 'test' + Uuid.create().value.slice(0, 7),
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

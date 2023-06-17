import { PrismaClient } from '@prisma/client';

import { Project } from '@/core/project/domain';
import { Optional, Primitive, Primitives, Uuid } from '@/core/shared/domain';

export class ProjectFactory {
  constructor(readonly prisma: PrismaClient) {}

  async create(userId: Uuid): Promise<Primitives<Project>> {
    return await this.prisma.project.create({
      data: {
        id: Uuid.create().value,
        userId: userId.value,
        cover: 'https://cover.com',
        title: 'Project title',
        content: 'Project content',
        isFeatured: false,
        link: 'https://rogeliosamuel.com',
        repo: 'https://github.com/sam-621/coode.me'
      }
    });
  }

  static create(project?: Optional<Primitive<Project>>): Project {
    return Project.create({
      id: project?.id ?? Uuid.create().value,
      userId: project?.userId ?? Uuid.create().value,
      cover: project?.cover ?? 'https://cover.com',
      title: project?.title ?? 'Project title',
      content: project?.content ?? 'Project content',
      isFeatured: project?.isFeatured ?? false,
      link: project?.link ?? 'https://rogeliosamuel.com',
      repo: project?.repo ?? 'https://github.com/sam-621/coode.me'
    });
  }

  static createIncorrect(project?: Optional<Primitive<Project>>): Primitive<Project> {
    return {
      id: project?.id ?? 'incorrect id',
      userId: project?.userId ?? 'incorrect id',
      createdAt: project?.createdAt ?? new Date(),
      updatedAt: project?.updatedAt ?? new Date(),
      cover: project?.cover ?? 'incorrect url',
      title: project?.title ?? 'Project title',
      content: project?.content ?? 'Project content',
      isFeatured: project?.isFeatured ?? false,
      link: project?.link ?? 'incorrect url',
      repo: project?.repo ?? 'incorrect url'
    };
  }
}

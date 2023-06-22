import { Injectable } from '@nestjs/common';

import { Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';
import { PrismaService } from '@/app/shared/persistance';

import { PrimitiveProject, Project, ProjectRepository } from '../domain';

@Injectable()
export class ProjectPostgresRepository implements ProjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUnique(id: Uuid): Promise<PrimitiveProject | null> {
    return this.prismaService.project.findUnique({ where: { id: id.value } });
  }

  findMany(): Promise<PrimitiveProject[]> {
    return this.prismaService.project.findMany();
  }

  create(project: Project): Promise<PrimitiveProject> {
    const { id, userId, cover, title, content, isFeatured, link, repo } = project.toPrimitives();
    const input: CreateProjectInput = {
      id,
      userId,
      cover,
      title,
      content,
      isFeatured,
      link,
      repo
    };

    return this.prismaService.project.create({ data: input });
  }

  update(project: Project): Promise<PrimitiveProject> {
    const { cover, title, content, isFeatured, link, repo, id } = project.toPrimitives();
    const input: UpdateProjectInput = {
      cover,
      title,
      content,
      isFeatured,
      link,
      repo
    };

    return this.prismaService.project.update({
      data: input,
      where: { id }
    });
  }
}

export type CreateProjectInput = Primitives<WithoutDateProperties<Project>>;
export type UpdateProjectInput = Omit<Primitives<WithoutDateProperties<Project>>, 'id' | 'userId'>;

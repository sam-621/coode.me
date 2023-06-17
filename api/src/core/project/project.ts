import { Entity, Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';

import {
  ProjectContent,
  ProjectCover,
  ProjectIsFeatured,
  ProjectLink,
  ProjectRepo,
  ProjectTitle
} from './components';

export class Project extends Entity {
  private constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly cover: ProjectCover,
    readonly title: ProjectTitle,
    readonly link: ProjectLink,
    readonly content: ProjectContent,
    readonly isFeatured: ProjectIsFeatured,
    readonly repo: ProjectRepo
  ) {
    super(id, new Date(), new Date());
  }

  public static create({
    id,
    userId,
    cover,
    title,
    link,
    content,
    isFeatured,
    repo
  }: Primitives<WithoutDateProperties<Project>>) {
    return new Project(
      new Uuid(id),
      new Uuid(userId),
      new ProjectCover(cover),
      new ProjectTitle(title),
      new ProjectLink(link),
      new ProjectContent(content),
      new ProjectIsFeatured(isFeatured),
      new ProjectRepo(repo)
    );
  }

  toPrimitives(): PrimitiveProject {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId.value,
      cover: this.cover.value,
      title: this.title.value,
      link: this.link.value,
      content: this.content.value,
      isFeatured: this.isFeatured.value,
      repo: this.repo.value
    };
  }
}

export type PrimitiveProject = Primitives<Project>;

import { Entity, Primitives, Uuid, WithoutDateProperties } from '@/core/shared/domain';

export class Project extends Entity {
  private constructor(
    readonly id: Uuid,
    readonly userId: Uuid,
    readonly cover: string,
    readonly title: string,
    readonly link: string,
    readonly content: string,
    readonly isFeatured: boolean,
    readonly repo: string
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
      cover,
      title,
      link,
      content,
      isFeatured,
      repo
    );
  }

  toPrimitives(): PrimitiveProject {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId.value,
      cover: this.cover,
      title: this.title,
      link: this.link,
      content: this.content,
      isFeatured: this.isFeatured,
      repo: this.repo
    };
  }
}

export type PrimitiveProject = Primitives<Project>;

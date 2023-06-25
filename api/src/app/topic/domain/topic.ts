import { Entity, Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';

import { TopicColor, TopicDescription, TopicTitle } from './components';

export class Topic extends Entity {
  private constructor(
    readonly id: Uuid,
    readonly title: TopicTitle,
    readonly description: TopicDescription,
    readonly color: TopicColor
  ) {
    super(id, new Date(), new Date());
  }

  static create({ id, title, description, color }: Primitives<WithoutDateProperties<Topic>>) {
    return new Topic(
      new Uuid(id),
      new TopicTitle(title),
      new TopicDescription(description),
      new TopicColor(color)
    );
  }

  toPrimitives(): PrimitiveTopic {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title.value,
      description: this.description.value,
      color: this.color.value
    };
  }
}

export type PrimitiveTopic = Primitives<Topic>;

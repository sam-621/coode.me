import { Entity, Primitives, Uuid, WithoutDateProperties } from '@/app/shared/domain';

import {
  TopicColor,
  TopicDescription,
  TopicIsFollowed,
  TopicStats,
  TopicTitle
} from './components';

export class Topic extends Entity {
  private constructor(
    readonly id: Uuid,
    readonly title: TopicTitle,
    readonly description: TopicDescription,
    readonly color: TopicColor,
    readonly stats: TopicStats,
    readonly isFollowed: TopicIsFollowed
  ) {
    super(id, new Date(), new Date());
  }

  static create({
    id,
    title,
    description,
    color
  }: Primitives<WithoutDateProperties<Omit<Topic, 'stats' | 'isFollowed'>>>) {
    return new Topic(
      new Uuid(id),
      new TopicTitle(title),
      new TopicDescription(description),
      new TopicColor(color),
      new TopicStats(0),
      new TopicIsFollowed(false)
    );
  }

  toPrimitives(): PrimitiveTopic {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title.value,
      description: this.description.value,
      color: this.color.value,
      stats: this.stats.value,
      isFollowed: this.isFollowed.value
    };
  }
}

export type PrimitiveTopic = Primitives<Topic>;

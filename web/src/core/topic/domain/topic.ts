import { Entity } from '@/core/shared/domain';

export interface Topic extends Entity {
  readonly title: string;
  readonly description: string;
  readonly color: string;
  readonly stats: number;
  readonly isFollowed: boolean;
}

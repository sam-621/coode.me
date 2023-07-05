import { Entity } from '../shared/domain';

export interface User extends Entity {
  readonly username: string;
  readonly avatar: string;
  readonly bio: string;
  readonly position: string;
  readonly link: string;
  readonly gh: string;
  readonly country: string;
}

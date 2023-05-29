import { Uuid } from './components';

export class Entity {
  constructor(readonly id: Uuid, readonly createdAt: Date, readonly updatedAt: Date) {}
}

export type WithoutDateProperties<T extends Entity> = Omit<T, 'createdAt' | 'updatedAt'>;

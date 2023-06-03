import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export type Context = PrismaClient;

export type MockContext = DeepMockProxy<PrismaClient>;

export const createMockContext = (): MockContext => {
  return mockDeep<PrismaClient>();
};

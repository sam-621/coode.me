import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaClient } from '@prisma/client';
import { afterAll, beforeEach } from 'vitest';

import { AppModule } from '@/app/app.module';

import { resetDb } from './db';

beforeEach(async () => {
  await resetDb(testPrismaClient);

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  testNestApp = moduleFixture.createNestApplication();

  /**
   * Server config
   */
  testNestApp.useGlobalPipes(new ValidationPipe({ transform: true }));

  await testNestApp.init();
});

afterAll(async () => {
  await testNestApp.close();
});

export let testNestApp: INestApplication;
export const testPrismaClient = new PrismaClient();

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { afterAll, beforeEach } from 'vitest';

import { AppModule } from '@/app/app.module';

import { serverConfig } from './../../src/server-config';
import { resetDb } from './db';

beforeEach(async () => {
  await resetDb();

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  testNestApp = moduleFixture.createNestApplication();

  serverConfig(testNestApp);

  await testNestApp.init();
});

afterAll(async () => {
  await testNestApp.close();
});

export let testNestApp: INestApplication;

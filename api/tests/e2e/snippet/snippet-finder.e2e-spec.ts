import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';

import { AppModule } from '@/app/app.module';
import { Uuid } from '@/core/shared/domain';
import { TestDbHandler } from '@/mock/db/db-handlers';
import { SnippetFactory, UserFactory } from '@/mock/factory';

describe('Snippet finder', () => {
  let app: INestApplication;

  const prisma = new PrismaClient();
  const testDbHandler = new TestDbHandler(prisma);

  beforeAll(async () => {
    await testDbHandler.cleanUp();

    const userFactory = new UserFactory(prisma);
    const snippetFactory = new SnippetFactory(prisma);

    const { id } = await userFactory.create();
    snippetFactory.create(new Uuid(id));
    snippetFactory.create(new Uuid(id));
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await testDbHandler.cleanUp();
    await app.close();
  });

  it(`/GET snippet/all`, async () => {
    const res = await request(app.getHttpServer()).get('/snippet/all');

    expect(res.status).toBe(200);
    expect(res.body.snippets.length).toBe(2);
  });
});

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';

import { AppModule } from '@/app/app.module';
import { HttpResponse } from '@/common/utils';
import { Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';
import { TestDbHandler } from '@/mock/db/db-handlers';
import { SnippetFactory, UserFactory } from '@/mock/factory';

describe('Snippet finder', () => {
  let app: INestApplication;
  let snippetsInDb: Primitive<Snippet>[];

  const prisma = new PrismaClient();
  const testDbHandler = new TestDbHandler(prisma);

  beforeAll(async () => {
    await testDbHandler.cleanUp();

    const userFactory = new UserFactory(prisma);
    const snippetFactory = new SnippetFactory(prisma);

    const { id } = await userFactory.create();
    snippetsInDb = [
      await snippetFactory.create(new Uuid(id)),
      await snippetFactory.create(new Uuid(id))
    ];
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
    const body: HttpResponse<Primitive<Snippet>[]> = res.body;

    expect(res.status).toBe(200);
    expect(body.data.length).toBe(snippetsInDb.length);
  });

  it('/GET snippet/:id', async () => {
    const snippetToQuery = snippetsInDb[0];

    const res = await request(app.getHttpServer()).get(`/snippet/${snippetToQuery.id}`);
    const body: HttpResponse<Primitive<Snippet>> = res.body;

    expect(res.status).toBe(200);
    expect(body.data.id).toBe(snippetToQuery.id);
  });
});

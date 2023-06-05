import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaClient } from '@prisma/client';
import request from 'supertest';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';

import { AppModule } from '@/app/app.module';
import { HttpResponse } from '@/common/utils';
import { Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';
import { SnippetFactory, UserFactory } from '@/utilities/factories';

describe('snippet-finder', () => {
  let app: INestApplication;

  const prisma = new PrismaClient();

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/GET snippet/all', () => {
    it('Should return a list of snippets', async () => {
      const userFactory = new UserFactory(prisma);
      const snippetFactory = new SnippetFactory(prisma);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const snippetsInDb = await prisma.snippet.count();

      const res = await request(app.getHttpServer()).get('/snippet/all');
      const body: HttpResponse<Primitive<Snippet>[]> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.length).toBe(snippetsInDb);
    });
  });

  describe('/GET snippet/:id', () => {
    it('Should return the correct snippet with the given id', async () => {
      const userFactory = new UserFactory(prisma);
      const snippetFactory = new SnippetFactory(prisma);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const snippetToQuery = await prisma.snippet.findFirst();

      const res = await request(app.getHttpServer()).get(`/snippet/${snippetToQuery?.id}`);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.id).toBe(snippetToQuery?.id);
    });

    it('Should return a null snippet when providing an id that does not exist', async () => {
      const userFactory = new UserFactory(prisma);
      const snippetFactory = new SnippetFactory(prisma);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const randomId = Uuid.create();

      const res = await request(app.getHttpServer()).get(`/snippet/${randomId}`);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data).toBe(null);
    });
  });
});

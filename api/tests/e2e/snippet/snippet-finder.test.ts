import { HttpStatus } from '@nestjs/common';

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { HttpResponse } from '@/common/utils';
import { Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';
import { SnippetFactory, UserFactory } from '@/utilities/factories';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';

describe('/snippet (snippet-finder)', () => {
  describe('/GET snippet/all', () => {
    it('Should return a list of snippets', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const snippetFactory = new SnippetFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const snippetsInDb = await testPrismaClient.snippet.count();

      const res = await request(testNestApp.getHttpServer()).get('/snippet/all');
      const body: HttpResponse<Primitive<Snippet>[]> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.length).toBe(snippetsInDb);
    });
  });

  describe('/GET snippet/:id', () => {
    it('Should return the correct snippet with the given id', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const snippetFactory = new SnippetFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const snippetToQuery = await testPrismaClient.snippet.findFirst();

      const res = await request(testNestApp.getHttpServer()).get(`/snippet/${snippetToQuery?.id}`);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.id).toBe(snippetToQuery?.id);
    });

    it('Should return a null snippet when providing an id that does not exist', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const snippetFactory = new SnippetFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await snippetFactory.create(new Uuid(id));
      await snippetFactory.create(new Uuid(id));

      const randomId = Uuid.create();

      const res = await request(testNestApp.getHttpServer()).get(`/snippet/${randomId}`);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data).toBe(null);
    });
  });
});

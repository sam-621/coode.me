import { HttpStatus } from '@nestjs/common';

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { CreateSnippetDto, UpdateSnippetDto } from '@/app/snippet/dto';
import { HttpResponse } from '@/common/utils';
import { Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';
import { SnippetFactory, UserFactory } from '@/utilities/factories';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';

describe('/snippet (snippet-modifier)', () => {
  describe(`/POST snippet/create`, () => {
    it('Should create snippet when providing correct data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const { id: ownerId } = await userFactory.create();

      const dto: CreateSnippetDto = {
        userId: ownerId,
        code: 'code',
        description: 'description',
        language: 0,
        repo: 'https://github.com/sam-621/coode.me'
      };

      const res = await request(testNestApp.getHttpServer()).post('/snippet/create').send(dto);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      const snippetCreated: CreateSnippetDto = {
        userId: body.data.userId,
        code: body.data.code,
        description: body.data.description,
        language: body.data.language,
        repo: body.data.repo
      };

      expect(res.status).toBe(HttpStatus.CREATED);
      expect(snippetCreated).toEqual(dto);
    });

    it('Should not create snippet when providing incorrect data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      await userFactory.create();

      const dto = {
        userId: 'ownerId',
        code: 0,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
        language: '0',
        repo: 'some invalid url'
      };

      const res = await request(testNestApp.getHttpServer()).post('/snippet/create').send(dto);

      expect(res.status).toBe(HttpStatus.BAD_REQUEST);
    });
  });

  describe('/PUT snippet/update', () => {
    it('Should update snippet when providing correct data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const snippetFactory = new SnippetFactory(testPrismaClient);

      const { id: ownerId } = await userFactory.create();
      const { id: snippetId, createdAt } = await snippetFactory.create(new Uuid(ownerId));

      const dto: UpdateSnippetDto = {
        id: snippetId,
        code: 'code update',
        description: 'description update',
        language: 3,
        repo: 'https://github.com/sam-621/portfolio'
      };

      const res = await request(testNestApp.getHttpServer()).put('/snippet/update').send(dto);
      const body: HttpResponse<Primitive<Snippet>> = res.body;

      const snippetUpdated: UpdateSnippetDto = {
        id: body.data.id,
        code: body.data.code,
        description: body.data.description,
        language: body.data.language,
        repo: body.data.repo
      };

      expect(res.status).toBe(HttpStatus.OK);
      expect(snippetUpdated).toEqual(dto);
      // createdAt date did not update
      expect(createdAt.toISOString()).toBe(body.data.createdAt);
    });

    it('Should not update snippet when providing incorrect data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const snippetFactory = new SnippetFactory(testPrismaClient);

      const { id: ownerId } = await userFactory.create();
      await snippetFactory.create(new Uuid(ownerId));

      const dto = {
        id: 'snippetId',
        code: 0,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo`,
        language: '3',
        repo: 'some invalid url'
      };

      const res = await request(testNestApp.getHttpServer()).put('/snippet/update').send(dto);

      expect(res.status).toBe(HttpStatus.BAD_REQUEST);
    });
  });
});

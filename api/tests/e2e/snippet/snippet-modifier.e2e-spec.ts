import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';

import { AppModule } from '@/app/app.module';
import { CreateSnippetDto, UpdateSnippetDto } from '@/app/snippet/dto';
import { HttpResponse } from '@/common/utils';
import { Primitive, Uuid } from '@/core/shared/domain';
import { Snippet } from '@/core/snippet/domain';
import { TestDbHandler } from '@/mock/db/db-handlers';
import { SnippetFactory, UserFactory } from '@/mock/factory';

describe('Snippet modifier', () => {
  let app: INestApplication;

  const prisma = new PrismaClient();
  const testDbHandler = new TestDbHandler(prisma);

  beforeEach(async () => {
    await testDbHandler.cleanUp();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await testDbHandler.cleanUp();
  });

  afterAll(async () => {
    await app.close();
  });

  it(`/POST snippet/create`, async () => {
    const userFactory = new UserFactory(prisma);
    const { id: ownerId } = await userFactory.create();

    const dto: CreateSnippetDto = {
      userId: ownerId,
      code: 'code',
      description: 'description',
      language: 0
    };

    const res = await request(app.getHttpServer()).post('/snippet/create').send(dto);
    const body: HttpResponse<Primitive<Snippet>> = res.body;

    expect(res.status).toBe(HttpStatus.CREATED);
    expect(body.data.userId).toBe(ownerId);
    expect(true).toBe(true);
  });

  it('/PUT snippet/update', async () => {
    const userFactory = new UserFactory(prisma);
    const snippetFactory = new SnippetFactory(prisma);

    const { id: ownerId } = await userFactory.create();
    const { id: snippetId } = await snippetFactory.create(new Uuid(ownerId));

    const dto: UpdateSnippetDto = {
      id: snippetId,
      code: 'code update',
      description: 'description update',
      language: 3
    };

    const res = await request(app.getHttpServer()).put('/snippet/update').send(dto);
    const body: HttpResponse<Primitive<Snippet>> = res.body;

    expect(res.status).toBe(HttpStatus.OK);
    expect(body.data.userId).toBe(ownerId);
    expect(body.data.code).toBe(dto.code);
    expect(body.data.description).toBe(dto.description);
    expect(body.data.language).toBe(dto.language);
    expect(true).toBe(true);
  });
});

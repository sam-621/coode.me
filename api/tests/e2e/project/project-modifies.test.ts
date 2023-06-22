import { HttpStatus } from '@nestjs/common';

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { Project } from '@/app/project/domain';
import { CreateProjectDto, UpdateProjectDto } from '@/app/project/dto';
import { Primitive, Uuid } from '@/app/shared/domain';
import { ProjectFactory, UserFactory } from '@/utilities/factories';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';
import { HttpResponse } from 'src/common/utils';

describe('/project (project-modifier)', () => {
  describe(`/POST project/create`, () => {
    it('Should create project when providing correct data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const { id: ownerId } = await userFactory.create();

      const dto: CreateProjectDto = {
        userId: ownerId,
        content: 'content',
        cover: 'rogeliosamuel.com/image',
        link: 'rogeliosamuel.com',
        title: 'project title',
        repo: 'sam-621/coode.me'
      };

      const res = await request(testNestApp.getHttpServer()).post('/project/create').send(dto);
      const body: HttpResponse<Primitive<Project>> = res.body;

      const projectCreated: CreateProjectDto = {
        userId: body.data.userId,
        content: body.data.content,
        cover: body.data.cover,
        link: body.data.link,
        title: body.data.title,
        repo: body.data.repo
      };

      expect(res.status).toBe(HttpStatus.CREATED);
      expect(projectCreated).toEqual(dto);
    });

    it('Should not create project when providing incorrect data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      await userFactory.create();

      const dto = {
        userId: 'ownerId',
        content: 0,
        cover: 0,
        link: 0,
        title: 0,
        repo: 0
      };

      const res = await request(testNestApp.getHttpServer()).post('/project/create').send(dto);

      expect(res.status).toBe(HttpStatus.BAD_REQUEST);
    });
  });

  describe('/PUT project/update', () => {
    it('Should update project when providing correct data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const projectFactory = new ProjectFactory(testPrismaClient);

      const { id: ownerId } = await userFactory.create();
      const { id: projectId, createdAt } = await projectFactory.create(new Uuid(ownerId));

      const dto: UpdateProjectDto = {
        id: projectId,
        content: 'content updated',
        cover: 'rogeliosamuel.com/update',
        link: 'rogeliosamuel-update.com',
        title: 'project title updated',
        isFeatured: false,
        repo: 'sam-621/portfolio.com'
      };

      const res = await request(testNestApp.getHttpServer()).put('/project/update').send(dto);
      const body: HttpResponse<Primitive<Project>> = res.body;

      const projectUpdated: UpdateProjectDto = {
        id: body.data.id,
        content: body.data.content,
        cover: body.data.cover,
        link: body.data.link,
        title: body.data.title,
        isFeatured: body.data.isFeatured,
        repo: body.data.repo
      };

      expect(res.status).toBe(HttpStatus.OK);
      expect(projectUpdated).toEqual(dto);
      // createdAt date did not update
      expect(createdAt.toISOString()).toBe(body.data.createdAt);
    });

    it('Should not update project when providing incorrect data', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const projectFactory = new ProjectFactory(testPrismaClient);

      const { id: ownerId } = await userFactory.create();
      await projectFactory.create(new Uuid(ownerId));

      const dto = {
        userId: 'ownerId',
        content: 0,
        cover: 0,
        link: 0,
        title: 0,
        repo: 0
      };

      const res = await request(testNestApp.getHttpServer()).put('/project/update').send(dto);

      expect(res.status).toBe(HttpStatus.BAD_REQUEST);
    });
  });
});

import { HttpStatus } from '@nestjs/common';

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { HttpResponse } from 'src/common/utils';
import { Project } from '@/core/project/domain';
import { Primitive, Uuid } from '@/core/shared/domain';
import { ProjectFactory, UserFactory } from '@/utilities/factories';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';

describe('/project (project-finder)', () => {
  describe('/GET project/all', () => {
    it('Should return a list of projects', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const projectFactory = new ProjectFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await projectFactory.create(new Uuid(id));
      await projectFactory.create(new Uuid(id));

      const projectsInDb = await testPrismaClient.project.count();

      const res = await request(testNestApp.getHttpServer()).get('/project/all');
      const body: HttpResponse<Primitive<Project>[]> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.length).toBe(projectsInDb);
    });
  });

  describe('/GET project/:id', () => {
    it('Should return the correct project with the given id', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const projectFactory = new ProjectFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await projectFactory.create(new Uuid(id));
      await projectFactory.create(new Uuid(id));

      const projectToQuery = await testPrismaClient.project.findFirst();

      const res = await request(testNestApp.getHttpServer()).get(`/project/${projectToQuery?.id}`);
      const body: HttpResponse<Primitive<Project>> = res.body;
      const projectInJson = JSON.parse(JSON.stringify(projectToQuery));

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data).toEqual(projectInJson);
    });

    it('Should return a null project when providing an id that does not exist', async () => {
      const userFactory = new UserFactory(testPrismaClient);
      const projectFactory = new ProjectFactory(testPrismaClient);

      const { id } = await userFactory.create();
      await projectFactory.create(new Uuid(id));
      await projectFactory.create(new Uuid(id));

      const randomId = Uuid.create();

      const res = await request(testNestApp.getHttpServer()).get(`/project/${randomId}`);
      const body: HttpResponse<Primitive<Project>> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data).toBe(null);
    });
  });
});

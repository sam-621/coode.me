import { HttpStatus } from '@nestjs/common';

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { PrimitiveTopic } from '@/app/topic/domain';
import { HttpResponse } from '@/common/utils';
import { TopicFactory } from '@/utilities/factories/topic-factory';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';

describe('/topic (topic-finder)', () => {
  describe('/GET topic/all', () => {
    it('Should return a list of topics', async () => {
      const topicFactory = new TopicFactory(testPrismaClient);

      await topicFactory.create();
      await topicFactory.create();

      const topicsInDb = await testPrismaClient.topic.findMany();

      const res = await request(testNestApp.getHttpServer()).get('/topic/all');
      const body: HttpResponse<PrimitiveTopic[]> = res.body;

      expect(res.status).toBe(HttpStatus.OK);
      expect(body.data.length).toBe(topicsInDb.length);
    });
  });
});

import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { FollowTopicDto } from '@/app/topic/dto';
import { HttpResponse } from '@/common/utils';
import { TopicFactory, UserFactory } from '@/utilities/factories';
import { testNestApp, testPrismaClient } from '@/utilities/setup-e2e';
import { ConvertAny } from '@/utilities/types';

describe('/topic (topic-modifier)', () => {
  describe('/POST topic/follow', () => {
    it('Should not follow topic when provide incorrect data', async () => {
      const dto: ConvertAny<FollowTopicDto> = {
        topicId: 'incorrect id',
        userId: 'incorrect id'
      };

      const res = await request(testNestApp.getHttpServer()).post('/topic/follow').send(dto);
      const body: HttpResponse<null> = res.body;

      expect(res.status).toBe(400);
      expect(body.message).length(Object.keys(dto).length);
    });

    it('Should follow topic when provide correct data', async () => {
      const topicFactory = new TopicFactory(testPrismaClient);
      const userFactory = new UserFactory(testPrismaClient);

      const { id: topicId } = await topicFactory.create();
      const { id: userId } = await userFactory.create();

      const dto: FollowTopicDto = {
        topicId,
        userId
      };

      const res = await request(testNestApp.getHttpServer()).post('/topic/follow').send(dto);

      expect(res.status).toBe(201);
    });
  });
});

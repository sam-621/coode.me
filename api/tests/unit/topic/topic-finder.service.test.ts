import { beforeEach, describe, expect, it } from 'vitest';

import { PrismaService } from '@/app/shared/persistance';
import { PrimitiveTopic } from '@/app/topic/domain';
import { TopicPostgresRepository } from '@/app/topic/persistance';
import { TopicFinderService } from '@/app/topic/service';
import { TopicFactory } from '@/utilities/factories/topic-factory';
import { prismaMock } from '@/utilities/mocks';

describe('topic-finder.service', () => {
  let topicFinderService: TopicFinderService;

  beforeEach(() => {
    const topicPostgresRepository = new TopicPostgresRepository(
      prismaMock as unknown as PrismaService
    );
    topicFinderService = new TopicFinderService(topicPostgresRepository);
  });

  describe('Find Many', () => {
    it('Should return a list of topic', async () => {
      const topics = [
        TopicFactory.create().toPrimitives(),
        TopicFactory.create().toPrimitives()
      ].map(t => ({ ...t, _count: { users: 0 } }));

      prismaMock.topic.findMany.mockResolvedValue(topics);

      const result = await topicFinderService.findMany();

      expect(result[0]).toStrictEqual(topics[0]);
      expect(result[1]).toStrictEqual(topics[1]);
    });

    it('Should return an empty list of topic', async () => {
      const topics: PrimitiveTopic[] = [];

      prismaMock.topic.findMany.mockResolvedValue(topics);

      const result = await topicFinderService.findMany();

      expect(result).toHaveLength(0);
    });
  });
});

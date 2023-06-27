import { TopicApiRepository } from '@/core/topic/repositories';
import { TopicService } from '@/core/topic/services';

import { CList } from '../lib';

import { TopicCard } from './TopicCard';

export const TopicsList = async () => {
  const topicApiRepository = new TopicApiRepository();
  const topicService = new TopicService(topicApiRepository);

  const topics = await topicService.getAll();

  return (
    <CList>
      {topics.map(t => (
        <TopicCard topic={t} key={t.id} />
      ))}
    </CList>
  );
};

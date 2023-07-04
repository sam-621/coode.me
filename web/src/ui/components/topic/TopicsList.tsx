import { TopicApiRepository } from '@/core/topic/repositories';

import { CList } from '../lib';

import { TopicCard } from './TopicCard';

export const TopicsList = async () => {
  const topicApiRepository = new TopicApiRepository();

  const topics = await topicApiRepository.getAll();

  return (
    <CList>
      {topics.map(t => (
        <TopicCard topic={t} key={t.id} />
      ))}
    </CList>
  );
};

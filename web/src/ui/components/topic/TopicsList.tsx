import { TopicGetter } from '@/core/topic/application';
import { TopicApiRepository } from '@/core/topic/services';

import { CList } from '../lib';

import { TopicCard } from './TopicCard';

export const TopicsList = async () => {
  const topicApiRepository = new TopicApiRepository();
  const topicGetter = new TopicGetter(topicApiRepository);

  const topics = await topicGetter.getAll();

  return (
    <CList>
      {topics.data.map(t => (
        <TopicCard />
      ))}
    </CList>
  );
};

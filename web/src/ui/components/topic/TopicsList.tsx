import { FC } from 'react';

import { Topic } from '@/core/topic/domain';
import { filterTopicsByTitle } from '@/core/topic/utils';

import { CList } from '../lib';

import { TopicCard } from './TopicCard';

export const TopicsList: FC<Props> = async ({ topics, query }) => {
  const filteredTopics = filterTopicsByTitle(topics, query ?? '');

  return (
    <CList>
      {filteredTopics.map(t => (
        <TopicCard topic={t} key={t.id} />
      ))}
    </CList>
  );
};

type Props = {
  topics: Topic[];
  query?: string;
};

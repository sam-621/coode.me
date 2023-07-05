'use client';

import { FC } from 'react';

import { useSearchProvider } from '@/core/shared/providers';
import { Topic } from '@/core/topic/domain';

import { TopicsList } from './TopicsList';

export const FilteredTopicsList: FC<Props> = ({ topics }) => {
  const { query } = useSearchProvider();

  return <TopicsList topics={topics} query={query} />;
};

type Props = {
  topics: Topic[];
};

import { FC } from 'react';

import { Topic } from '@/core/topic/domain';

import { CCard, CText } from '../lib';

import { TopicCardButton } from './TopicCardButton';
import { TopicTitle } from './TopicTitle';

export const TopicCard: FC<Props> = ({ topic }) => {
  return (
    <CCard className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <TopicTitle color={`#${topic.color}`} title={topic.title} />
          <CText textStyle="strong" color="text.secondary">
            {topic.stats} Posts
          </CText>
        </div>
        <CText textStyle="subtitle1" color="text.secondary">
          {topic.description}
        </CText>
      </div>
      <div className="text-right">
        <TopicCardButton isFollowed={topic.isFollowed} topicId={topic.id} />
      </div>
    </CCard>
  );
};

type Props = {
  topic: Topic;
};

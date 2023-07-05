'use client';

import { FC } from 'react';

import { useFollowTopic } from '@/core/topic/hooks';

import { CButton } from '../lib';

export const TopicCardButton: FC<Props> = ({ isFollowed, topicId }) => {
  const { followTopic } = useFollowTopic();

  return (
    <CButton
      onClick={() => followTopic({ topicId, userId: '' })}
      variant={isFollowed ? 'filled' : 'outline'}
      colorScheme="common.white"
    >
      Follow
    </CButton>
  );
};

type Props = {
  isFollowed: boolean;
  topicId: string;
};

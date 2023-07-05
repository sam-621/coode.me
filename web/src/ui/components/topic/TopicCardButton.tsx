'use client';

import { FC } from 'react';

import { useFollowTopic } from '@/core/topic/hooks';

import { CButton } from '../lib';

export const TopicCardButton: FC<Props> = ({ isFollowed, topicId }) => {
  const { followUser } = useFollowTopic();

  return (
    <CButton
      onClick={() => followUser({ topicId, userId: '' })}
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

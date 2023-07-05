import { useMutation } from '@tanstack/react-query';

import { TopicApiRepository } from '../repositories';

export const useFollowTopic = () => {
  const { mutateAsync } = useMutation(TopicApiRepository.follow);

  const followUser = ({ topicId, userId }: Input) => {
    mutateAsync({ topicId, userId });
  };

  return {
    followUser
  };
};

type Input = {
  topicId: string;
  userId: string;
};

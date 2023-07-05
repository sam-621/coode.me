import { useMutation } from '@tanstack/react-query';

import { TopicApiRepository } from '../repositories';

export const useFollowTopic = () => {
  const topicApiRepository = new TopicApiRepository();

  const { mutateAsync } = useMutation(topicApiRepository.follow);

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

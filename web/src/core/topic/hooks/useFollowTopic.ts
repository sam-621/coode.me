import { useMutation } from '@tanstack/react-query';

import { TopicApiRepository } from '../repositories';

export const useFollowTopic = () => {
  const { mutateAsync: follow } = useMutation(TopicApiRepository.follow);

  const followTopic = ({ topicId, userId }: Input) => {
    follow({ topicId, userId });
  };

  return {
    followTopic
  };
};

type Input = {
  topicId: string;
  userId: string;
};

import { httpMethods } from '@/core/shared/libs/http-client';

import { FollowTopicRepositoryInput, Topic, TopicRepository } from '../domain';

const BASE_ENDPOINT = '/topic';

const getAll = async () => {
  const topics = await httpMethods.get<Topic[]>(`${BASE_ENDPOINT}/all`);

  return topics?.data.data ?? [];
};

const follow = async (input: FollowTopicRepositoryInput): Promise<void> => {
  await httpMethods.post(`${BASE_ENDPOINT}/follow`, input);
};

export const TopicApiRepository: TopicRepository = {
  getAll,
  follow
};

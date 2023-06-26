import { AxiosHttpRequest } from '@/core/shared/services';

import { FollowTopicRepositoryInput, Topic, TopicRepository } from '../domain';

export class TopicApiRepository extends AxiosHttpRequest implements TopicRepository {
  constructor() {
    super();
    this.configRequest({
      endpoint: '/topic'
    });
  }

  async follow(input: FollowTopicRepositoryInput): Promise<void> {
    this.configRequest({
      endpoint: '/follow'
    });

    await this.post(input);
  }

  async getAll(): Promise<Topic[]> {
    this.configRequest({
      endpoint: '/all'
    });

    const topics = await this.get<Topic[]>();

    return topics?.data.data ?? [];
  }
}

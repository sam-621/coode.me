import { AxiosHttpRequest } from '@/core/shared/services';

import { GetAllTopicRepository, TopicRepository } from '../domain';

export class TopicApiRepository extends AxiosHttpRequest implements TopicRepository {
  constructor() {
    super();
    this.configRequest({
      endpoint: '/topic'
    });
  }

  async getAll(): Promise<GetAllTopicRepository> {
    this.configRequest({
      endpoint: '/all'
    });

    const topics = await this.get<GetAllTopicRepository>();

    return topics?.data.data ?? [];
  }
}

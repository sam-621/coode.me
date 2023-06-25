import { AxiosHttpRequest } from '@/core/shared/services';

import { Topic, TopicRepository } from '../domain';

export class TopicApiRepository extends AxiosHttpRequest implements TopicRepository {
  constructor() {
    super();
    this.configRequest({
      endpoint: '/topic'
    });
  }

  async getAll(): Promise<Topic[]> {
    this.configRequest({
      endpoint: '/all'
    });

    const topics = await this.get<Topic[]>();

    return topics?.data.data ?? [];
  }
}

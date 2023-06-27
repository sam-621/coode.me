import { Controller, Get } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { TopicService } from '../service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService) {}

  @Get('all')
  async findMany() {
    const topics = await this.topicService.findMany();

    return new HttpResponse(topics, [SUCCESS_HTTP_MESSAGE], null);
  }
}

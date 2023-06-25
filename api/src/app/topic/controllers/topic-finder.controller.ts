import { Controller, Get } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { TopicFinderService } from '../service';

@Controller('topic')
export class TopicFinderController {
  constructor(private topicFinderService: TopicFinderService) {}

  @Get('all')
  async findMany() {
    const topics = await this.topicFinderService.findMany();

    return new HttpResponse(topics, [SUCCESS_HTTP_MESSAGE], null);
  }
}

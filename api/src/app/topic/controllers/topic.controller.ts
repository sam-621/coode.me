import { Controller, Get, Query } from '@nestjs/common';

import { OptionalIdParam } from '@/app/shared/dtos';
import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { TopicService } from '../service';

@Controller('topic')
export class TopicController {
  constructor(private topicService: TopicService) {}

  @Get('all')
  async findMany(@Query() { id }: OptionalIdParam) {
    const topics = await this.topicService.findMany({ userId: id });

    return new HttpResponse(topics, [SUCCESS_HTTP_MESSAGE], null);
  }
}

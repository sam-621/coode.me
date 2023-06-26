import { Body, Controller, Post } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { FollowTopicDto } from '../dto';
import { TopicModifierService } from '../service';

@Controller('topic')
export class TopicModifierController {
  constructor(private topicModifierService: TopicModifierService) {}

  @Post('follow')
  async findMany(@Body() dto: FollowTopicDto) {
    await this.topicModifierService.follow(dto.userId, dto.topicId);

    return new HttpResponse(null, [SUCCESS_HTTP_MESSAGE], null);
  }
}

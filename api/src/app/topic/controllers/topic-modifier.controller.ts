import { Body, Controller, Post } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { FollowTopicDto } from '../dto';
import { TopicModifierService } from '../service';

@Controller('topic')
export class TopicModifierController {
  constructor(private topicModifierService: TopicModifierService) {}

  @Post('follow')
  async findMany(@Body() { topicId, userId }: FollowTopicDto) {
    await this.topicModifierService.follow({ userId, topicId });

    return new HttpResponse(null, [SUCCESS_HTTP_MESSAGE], null);
  }
}

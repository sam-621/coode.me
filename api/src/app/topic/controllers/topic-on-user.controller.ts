import { Body, Controller, Post } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { FollowTopicDto } from '../dto';
import { TopicOnUserService } from '../service';

@Controller('topic')
export class TopicOnUserController {
  constructor(private topicOnUserService: TopicOnUserService) {}

  @Post('follow')
  async findMany(@Body() { topicId, userId }: FollowTopicDto) {
    await this.topicOnUserService.follow({ userId, topicId });

    return new HttpResponse(null, [SUCCESS_HTTP_MESSAGE], null);
  }
}

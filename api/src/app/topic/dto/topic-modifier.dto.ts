import { IsUUID } from 'class-validator';

export class FollowTopicDto {
  @IsUUID('4')
  userId: string;

  @IsUUID('4')
  topicId: string;
}

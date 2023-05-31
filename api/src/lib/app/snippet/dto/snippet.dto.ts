import { IsUUID } from 'class-validator';

export class FindUniqueParams {
  @IsUUID('4')
  id: string;
}

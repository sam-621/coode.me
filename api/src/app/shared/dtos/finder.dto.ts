import { IsUUID } from 'class-validator';

export class FindUniqueByIdParam {
  @IsUUID('4')
  id: string;
}

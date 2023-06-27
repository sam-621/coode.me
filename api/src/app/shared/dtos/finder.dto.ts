import { IsOptional, IsUUID } from 'class-validator';

export class FindUniqueByIdParam {
  @IsUUID('4')
  id: string;
}

export class OptionalIdParam {
  @IsOptional()
  @IsUUID('4', {})
  id: string;
}

import { IsInt, IsString, IsUrl, IsUUID, Length } from 'class-validator';

import { SnippetDescription } from '../domain';
import { SnippetModifierCreateInput, SnippetModifierUpdateInput } from '../services';

export class CreateSnippetDto implements SnippetModifierCreateInput {
  @IsUUID('4')
  userId: string;

  @IsString()
  @Length(0, SnippetDescription.DESCRIPTION_MAX_LENGTH)
  description: string;

  @IsString()
  code: string;

  @IsInt()
  language: number;

  @IsUrl()
  repo: string;
}

export class UpdateSnippetDto implements SnippetModifierUpdateInput {
  @IsUUID('4')
  id: string;

  @IsString()
  @Length(0, SnippetDescription.DESCRIPTION_MAX_LENGTH)
  description: string;

  @IsString()
  code: string;

  @IsInt()
  language: number;

  @IsUrl()
  repo: string;
}

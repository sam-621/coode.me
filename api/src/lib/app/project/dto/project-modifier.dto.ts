import { IsBoolean, IsString, IsUrl, IsUUID, Length } from 'class-validator';

import { ProjectModifierCreateInput, ProjectModifierUpdateInput } from '@/core/project/application';
import { ProjectCover, ProjectLink, ProjectRepo, ProjectTitle } from '@/core/project/domain';

export class CreateProjectDto implements ProjectModifierCreateInput {
  @IsUUID('4')
  userId: string;

  @IsString()
  @Length(0, ProjectCover.COVER_MAX_LENGTH)
  cover: string;

  @IsString()
  @Length(0, ProjectTitle.TITLE_MAX_LENGTH)
  title: string;

  @IsUrl()
  @Length(0, ProjectLink.LINK_MAX_LENGTH)
  link: string;

  @IsString()
  content: string;

  @IsUrl()
  @Length(0, ProjectRepo.REPO_MAX_LENGTH)
  repo: string;
}

export class UpdateProjectDto implements ProjectModifierUpdateInput {
  @IsUUID('4')
  id: string;

  @IsString()
  @Length(0, ProjectCover.COVER_MAX_LENGTH)
  cover: string;

  @IsString()
  @Length(0, ProjectTitle.TITLE_MAX_LENGTH)
  title: string;

  @IsUrl()
  @Length(0, ProjectLink.LINK_MAX_LENGTH)
  link: string;

  @IsString()
  content: string;

  @IsBoolean()
  isFeatured: boolean;

  @IsUrl()
  @Length(0, ProjectRepo.REPO_MAX_LENGTH)
  repo: string;
}
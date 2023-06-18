import { Body, Controller, Post, Put } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { CreateProjectDto, UpdateProjectDto } from '../dto';
import { ProjectModifierService } from '../services';

@Controller('project')
export class ProjectModifierController {
  constructor(private projectModifierService: ProjectModifierService) {}

  @Post('create')
  async create(@Body() dto: CreateProjectDto) {
    const snippetCreated = await this.projectModifierService.create(dto);

    return new HttpResponse(snippetCreated, [SUCCESS_HTTP_MESSAGE], null);
  }

  @Put('update')
  async update(@Body() dto: UpdateProjectDto) {
    const snippetUpdated = await this.projectModifierService.update(dto);

    return new HttpResponse(snippetUpdated, [SUCCESS_HTTP_MESSAGE], null);
  }
}

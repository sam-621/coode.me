import { Controller, Get, Param } from '@nestjs/common';

import { FindUniqueByIdParam } from '@/app/shared/dtos';
import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { ProjectFinderService } from '../services';

@Controller('project')
export class ProjectFinderController {
  constructor(private projectFinderService: ProjectFinderService) {}

  @Get('all')
  async findMany() {
    const project = await this.projectFinderService.findMany();

    return new HttpResponse(project, [SUCCESS_HTTP_MESSAGE], null);
  }

  @Get(':id')
  async findUnique(@Param() { id }: FindUniqueByIdParam) {
    const project = await this.projectFinderService.findUnique(id);

    return new HttpResponse(project, [SUCCESS_HTTP_MESSAGE], null);
  }
}

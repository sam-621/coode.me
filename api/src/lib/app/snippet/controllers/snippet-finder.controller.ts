import { Controller, Get, Param } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { FindUniqueParams } from '../dto/snippet-finder.dto';
import { SnippetFinderService } from '../services/snippet-finder.service';

@Controller('snippet')
export class SnippetFinderController {
  constructor(private snippetFinderService: SnippetFinderService) {}

  @Get('all')
  async findMany() {
    const snippets = await this.snippetFinderService.findMany();

    return new HttpResponse(snippets, [SUCCESS_HTTP_MESSAGE], null);
  }

  @Get(':id')
  async findUnique(@Param() { id }: FindUniqueParams) {
    const snippet = await this.snippetFinderService.findUnique(id);

    return new HttpResponse(snippet, [SUCCESS_HTTP_MESSAGE], null);
  }
}

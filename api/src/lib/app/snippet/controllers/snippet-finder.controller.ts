import { Controller, Get, Param } from '@nestjs/common';

import { FindUniqueParams } from '../dto/snippet-finder.dto';
import { SnippetFinderService } from '../services/snippet-finder.service';

@Controller('snippet')
export class SnippetFinderController {
  constructor(private snippetService: SnippetFinderService) {}

  @Get('all')
  async findMany() {
    const snippets = await this.snippetService.findMany();

    return {
      snippets
    };
  }

  @Get(':id')
  async findUnique(@Param() { id }: FindUniqueParams) {
    const snippet = await this.snippetService.findUnique(id);

    return {
      snippet: snippet
    };
  }
}

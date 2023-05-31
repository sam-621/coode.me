import { Controller, Get, Param } from '@nestjs/common';

import { FindUniqueParams } from './dto/snippet.dto';
import { SnippetService } from './snippet.service';

@Controller('snippet')
export class SnippetController {
  constructor(private snippetService: SnippetService) {}

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

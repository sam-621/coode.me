import { Controller, Get } from '@nestjs/common';

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
}

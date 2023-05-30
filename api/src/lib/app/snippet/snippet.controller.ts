import { Controller, Get, Req } from '@nestjs/common';

import { Request } from 'express';

@Controller('snippet')
export class SnippetController {
  @Get('all')
  getAll(@Req() req: Request) {
    return {
      snippets: [],
      ok: true,
      req: req.body
    };
  }
}

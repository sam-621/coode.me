import { Body, Controller, Post } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from '@/common/utils';

import { CreateSnippetDto } from '../dto/snippet-modifier.dto';
import { SnippetModifierService } from '../services/snippet-modifier.service';

@Controller('snippet')
export class SnippetModifierController {
  constructor(private snippetModifierService: SnippetModifierService) {}

  @Post('create')
  async create(@Body() dto: CreateSnippetDto) {
    const snippetCreated = await this.snippetModifierService.create(dto);

    return new HttpResponse(snippetCreated, [SUCCESS_HTTP_MESSAGE], null);
  }
}

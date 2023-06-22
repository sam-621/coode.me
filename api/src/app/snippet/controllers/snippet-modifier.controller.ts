import { Body, Controller, Post, Put } from '@nestjs/common';

import { HttpResponse, SUCCESS_HTTP_MESSAGE } from 'src/common/utils';

import { CreateSnippetDto, UpdateSnippetDto } from '../dto/snippet-modifier.dto';
import { SnippetModifierService } from '../services/snippet-modifier.service';

@Controller('snippet')
export class SnippetModifierController {
  constructor(private snippetModifierService: SnippetModifierService) {}

  @Post('create')
  async create(@Body() dto: CreateSnippetDto) {
    const snippetCreated = await this.snippetModifierService.create(dto);

    return new HttpResponse(snippetCreated, [SUCCESS_HTTP_MESSAGE], null);
  }

  @Put('update')
  async update(@Body() dto: UpdateSnippetDto) {
    const snippetUpdated = await this.snippetModifierService.update(dto);

    return new HttpResponse(snippetUpdated, [SUCCESS_HTTP_MESSAGE], null);
  }
}

import { Module } from '@nestjs/common';
import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [SnippetModule],
})
export class AppModule {}

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { Env } from '@/common/config';

import { AppModule } from './lib/app/app.module';

async function bootstrap() {
  /**
   * Creates nest application
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Env variables
   */
  const configService = app.get(ConfigService);

  const port = configService.get<number>(Env.PORT, { infer: true });

  /**
   * Server configuration
   */
  app.useGlobalPipes(new ValidationPipe());

  /**
   * Start application
   */
  await app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}
bootstrap();

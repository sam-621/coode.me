import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AppModule } from '@/app/app.module';
import { Env } from '@/common/config';
import { LoggerService } from '@/common/errors';
import { AllExceptionsFilter } from '@/common/filters';

async function bootstrap() {
  /**
   * Creates nest application
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Server configuration
   */
  const httpAdapter = app.get(HttpAdapterHost);
  const loggerService = await app.resolve(LoggerService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, loggerService));

  /**
   * Env variables
   */
  const configService = app.get(ConfigService);

  const port = configService.get<number>(Env.PORT, { infer: true });

  /**
   * Start application
   */
  await app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}

bootstrap();

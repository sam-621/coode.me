import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { LoggerService } from '@/common/errors';
import { AllExceptionsFilter } from '@/common/filters';

export const serverConfig = async (app: INestApplication) => {
  const httpAdapter = app.get(HttpAdapterHost);
  const loggerService = await app.resolve(LoggerService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, loggerService));
};

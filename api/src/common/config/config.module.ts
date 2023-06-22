import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { schemaValidations } from './schema.config';
import { getEnvPath } from './values.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: getEnvPath(process.env.NODE_ENV ?? ''),
      isGlobal: true,
      validationSchema: schemaValidations
    })
  ]
})
export class ConfigModule {}

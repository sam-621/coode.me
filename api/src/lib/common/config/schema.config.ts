import * as joi from 'joi';

export const schemaValidations = joi.object({
  PORT: joi.number().required(),
  POSTGRES_URL: joi.string().required()
});

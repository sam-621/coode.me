import * as joi from 'joi';

export const schemaValidations = joi.object({
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required()
});

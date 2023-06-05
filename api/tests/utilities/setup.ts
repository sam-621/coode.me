// import * as dotenv from 'dotenv';
import { beforeEach } from 'vitest';

import { resetDb } from './db';

beforeEach(async () => {
  await resetDb();
});

// dotenv.config({ path: '.env.test' });

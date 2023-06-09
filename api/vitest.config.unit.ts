import { defineConfig } from 'vitest/config';

import { globalTestsConfig } from './vitest.config.global';

export default defineConfig({
  ...globalTestsConfig,
  test: {
    include: ['./tests/unit/**/*.test.ts']
  }
});

import { defineConfig } from 'vitest/config';

import { globalTestsConfig } from './vitest.config.global';

export default defineConfig({
  ...globalTestsConfig,
  test: {
    include: ['./tests/e2e/**/*.test.ts'],
    threads: false,
    setupFiles: ['./tests/setup.ts']
  }
});

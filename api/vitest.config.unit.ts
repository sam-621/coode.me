import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./tests/unit/**/*.test.ts']
  },
  resolve: {
    alias: {
      '@/core': '/src/core',
      '@/utilities': '/tests/utilities',
      '@/common': '/src/lib/common',
      '@/app': '/src/lib/app'
    }
  }
});

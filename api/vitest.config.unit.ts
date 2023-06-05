import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts']
  },
  resolve: {
    alias: {
      '@/core': '/src/core',
      '@/mock': '/tests/mock',
      '@/common': '/src/lib/common',
      '@/app': '/src/lib/app'
    }
  }
});

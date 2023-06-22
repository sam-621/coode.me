import { UserConfigExport } from 'vitest/config';

export const globalTestsConfig: UserConfigExport = {
  resolve: {
    alias: {
      '@/core': '/src/core',
      '@/utilities': '/tests/utilities',
      '@/common': '/src/common',
      '@/app': '/src/app'
    }
  }
};

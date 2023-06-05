import { UserConfigExport } from 'vitest/config';

export const globalTestsConfig: UserConfigExport = {
  resolve: {
    alias: {
      '@/core': '/src/core',
      '@/utilities': '/tests/utilities',
      '@/common': '/src/lib/common',
      '@/app': '/src/lib/app'
    }
  }
};

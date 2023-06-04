import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'tests',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/core/(.*)$': '<rootDir>/../src/core/$1',
    '^@/mock/(.*)$': '<rootDir>/../tests/mock/$1',
    '^@/common/(.*)$': '<rootDir>/../src/lib/common/$1',
    '^@/app/(.*)$': '<rootDir>/../src/lib/app/$1'
  },
  setupFilesAfterEnv: ['./set-up-tests.ts']
};

export default config;

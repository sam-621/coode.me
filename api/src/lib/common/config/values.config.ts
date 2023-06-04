import { HashMap } from '@/core/shared/domain';

export const getEnvPath = (env: string): string => {
  const envPaths: HashMap<string> = {
    local: '.env',
    test: '.env.test'
  };

  return envPaths[env] || envPaths.local;
};

export enum Env {
  PORT = 'PORT',
  POSTGRES_URL = 'POSTGRES_URL'
}

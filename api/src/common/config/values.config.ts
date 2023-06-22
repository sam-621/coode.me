import { HashMap } from '@/app/shared/domain';

export const getEnvPath = (env: string): string => {
  const envPaths: HashMap<string> = {
    local: '.env',
    test: '.env.test'
  };

  return envPaths[env] || envPaths.local;
};

export enum Env {
  PORT = 'PORT',
  DATABASE_URL = 'DATABASE_URL'
}

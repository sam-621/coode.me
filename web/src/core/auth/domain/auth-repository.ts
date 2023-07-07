import { Auth } from './auth';

export interface AuthRepository {
  login: (email: string) => Promise<string>;
  validateToken: (token: string) => Promise<boolean>;
  getAuth: () => Promise<Auth>;
}

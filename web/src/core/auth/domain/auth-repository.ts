import { Auth } from './auth';

export interface AuthRepository {
  login: () => string;
  validateDidToken: () => boolean;
  getAuth: () => Auth;
}

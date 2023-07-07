import { magic } from '@/core/shared/libs/auth';

import { AuthRepository } from '../domain';

const login: AuthRepository['login'] = async email => {
  const didToken = await magic?.auth.loginWithMagicLink({
    email
  });

  return didToken ?? '';
};

const validateToken: AuthRepository['validateToken'] = async token => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  return res.ok;
};

const getAuth: AuthRepository['getAuth'] = async () => {
  const isLoggedIn = await magic?.user.isLoggedIn();

  if (!isLoggedIn) {
    return {
      email: null,
      issuer: null,
      isLoggedIn: false
    };
  }

  const userMetadata = await magic?.user.getMetadata();

  return {
    email: userMetadata?.email ?? null,
    issuer: userMetadata?.issuer ?? null,
    isLoggedIn: true
  };
};

export const AuthMagicRepository: AuthRepository = {
  login,
  validateToken,
  getAuth
};

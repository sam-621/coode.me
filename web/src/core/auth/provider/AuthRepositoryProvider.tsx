'use client';

import { createContext, FC, PropsWithChildren, useContext } from 'react';

import { AuthRepository } from '../domain';
import { AuthMagicRepository } from '../repository';

const Context = createContext<AuthRepository>({
  login: AuthMagicRepository.login,
  validateToken: AuthMagicRepository.validateToken,
  getAuth: AuthMagicRepository.getAuth
});

export const AuthRepositoryProvider: FC<Props> = ({ children }) => {
  return (
    <Context.Provider
      value={{
        login: AuthMagicRepository.login,
        validateToken: AuthMagicRepository.validateToken,
        getAuth: AuthMagicRepository.getAuth
      }}
    >
      {children}
    </Context.Provider>
  );
};

type Props = PropsWithChildren;

export const useAUthRepositoryProvider = () => useContext(Context);

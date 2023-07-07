import { createContext, FC, PropsWithChildren, useContext, useEffect } from 'react';

import { AuthRepository } from '../domain';
import { AuthMagicRepository } from '../repository';

const Context = createContext<AuthRepository>({
  login: AuthMagicRepository.login,
  validateToken: AuthMagicRepository.validateToken,
  getAuth: AuthMagicRepository.getAuth
});

export const AuthRepositoryProvider: FC<Props> = ({ children }) => {
  useEffect(() => {
    (async () => {
      const isLoggedIn = await AuthMagicRepository.getAuth();

      if (!isLoggedIn) {
        // redirect or do something
      }
    })();
  }, []);

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

export const useAuthProvider = () => useContext(Context);

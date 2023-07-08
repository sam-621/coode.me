'use client';

import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';

import { Auth } from '../domain';

import { useAUthRepositoryProvider } from './AuthRepositoryProvider';

type ContextSchema = Auth & {
  reloadAuthState: () => void;
};

const INITIAL_VALUE: ContextSchema = {
  email: null,
  isLoggedIn: false,
  issuer: null,
  reloadAuthState: () => {
    throw new Error('NOT IMPLEMENTED YET');
  }
};

const Context = createContext<ContextSchema>(INITIAL_VALUE);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({
    email: INITIAL_VALUE.email,
    isLoggedIn: INITIAL_VALUE.isLoggedIn,
    issuer: INITIAL_VALUE.issuer
  });
  const [reload, setReload] = useState(0);

  const repository = useAUthRepositoryProvider();

  useEffect(() => {
    (async () => {
      const currentAuth = await repository.getAuth();

      if (!currentAuth.isLoggedIn) {
        setAuth(INITIAL_VALUE);
        return;
      }

      setAuth({ ...currentAuth });
    })();
  }, [reload, repository]);

  const reloadAuthState = () => {
    setReload(prevState => prevState + 1);
  };

  return <Context.Provider value={{ ...auth, reloadAuthState }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren;

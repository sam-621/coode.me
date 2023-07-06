'use client';

import { createContext, FC, PropsWithChildren, useState } from 'react';

type ContextSchema = {
  user: any;
  setUser: (user: any) => void;
};

export const Context = createContext<ContextSchema>({ user: null, setUser: () => null });

export const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState();
  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren;

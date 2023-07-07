'use client';

import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { magic } from '@/core/shared/libs/auth';

type ContextSchema = {
  user: any;
  setUser: (user: any) => void;
};

export const Context = createContext<ContextSchema>({ user: null, setUser: () => null });

export const UserProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js

    // Check if the user is authenticated already
    magic?.user.isLoggedIn().then(isLoggedIn => {
      console.log({
        isLoggedIn
      });

      if (isLoggedIn) {
        // Pull their metadata, update our state, and route to dashboard
        magic?.user.getMetadata().then(userData => console.log({ userData }));
      } else {
        // If false, route them to the login page and reset the user state
      }
    });
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, []);

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren;

export const useUserProvider = () => useContext(Context);

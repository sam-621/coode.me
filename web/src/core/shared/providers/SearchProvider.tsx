'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

type ContextSchema = {
  query: string;
  setQuery: (query: string) => void;
};

const Context = createContext<ContextSchema>({
  query: 'yes',
  setQuery: _ => {
    throw new Error('SEARCH PROVIDER NOT MOUNTED YET');
  }
});

export const SearchProvider: FC<Props> = ({ defaultQuery = '', children }) => {
  const [query, setQuery] = useState(defaultQuery);

  return <Context.Provider value={{ query, setQuery }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren & {
  defaultQuery?: string;
};

export const useSearchProvider = () => useContext(Context);

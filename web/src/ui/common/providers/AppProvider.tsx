'use client';

import { FC, PropsWithChildren } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};

type Props = PropsWithChildren;

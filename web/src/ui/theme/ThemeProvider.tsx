'use client';

import { FC, PropsWithChildren } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

type Props = PropsWithChildren;

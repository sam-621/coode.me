'use client';

import { FC, PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Box marginX={{ base: '1rem', xl: '9.38rem' }} marginY={{ base: '1.25rem', xl: '2.25rem' }}>
      {children}
    </Box>
  );
};

type Props = PropsWithChildren;

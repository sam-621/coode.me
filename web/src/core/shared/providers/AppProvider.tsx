import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@/ui/theme';

import { ReactQueryProvider } from '../libs/react-query';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
};

type Props = PropsWithChildren;

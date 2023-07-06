import { FC, PropsWithChildren } from 'react';

import { UserProvider } from '@/core/user/provider';
import { ThemeProvider } from '@/ui/theme';

import { ReactQueryProvider } from '../libs/react-query';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </ReactQueryProvider>
  );
};

type Props = PropsWithChildren;

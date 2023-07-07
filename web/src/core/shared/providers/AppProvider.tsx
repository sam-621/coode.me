import { FC, PropsWithChildren } from 'react';

import { AuthRepositoryProvider } from '@/core/auth/provider';
import { ThemeProvider } from '@/ui/theme';

import { ReactQueryProvider } from '../libs/react-query';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthRepositoryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthRepositoryProvider>
    </ReactQueryProvider>
  );
};

type Props = PropsWithChildren;

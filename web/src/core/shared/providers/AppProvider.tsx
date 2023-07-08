import { FC, PropsWithChildren } from 'react';

import { AuthProvider, AuthRepositoryProvider } from '@/core/auth/provider';
import { ThemeProvider } from '@/ui/theme';

import { ReactQueryProvider } from '../libs/react-query';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthRepositoryProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </AuthRepositoryProvider>
    </ReactQueryProvider>
  );
};

type Props = PropsWithChildren;

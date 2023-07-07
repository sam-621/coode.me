import { FC, PropsWithChildren } from 'react';

import { AuthMagicRepositoryProvider } from '@/core/auth/provider';
import { ThemeProvider } from '@/ui/theme';

import { ReactQueryProvider } from '../libs/react-query';

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthMagicRepositoryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthMagicRepositoryProvider>
    </ReactQueryProvider>
  );
};

type Props = PropsWithChildren;

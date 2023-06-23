'use client';

import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '@/ui/theme';

export const AppProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

type Props = PropsWithChildren;

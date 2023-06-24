'use client';

import { Text } from '@chakra-ui/react';

import { AppTitle } from '@/ui/components/customs';

import { SignInForm } from './components';

export const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AppTitle />
      <div className="flex flex-col gap-8">
        <div>
          <Text as="h1" textStyle="h3">
            Sign In
          </Text>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

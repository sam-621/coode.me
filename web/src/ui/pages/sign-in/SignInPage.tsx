'use client';

import { Box, Stack, Text } from '@chakra-ui/react';

import { AppTitle } from '@/ui/components/customs';

import { SignInForm } from './components';

export const SignInPage = () => {
  return (
    <Stack spacing="2rem">
      <AppTitle />
      <Stack spacing="2rem">
        <Box>
          <Text as="h1" textStyle="h3">
            Sign In
          </Text>
        </Box>
        <SignInForm />
      </Stack>
    </Stack>
  );
};

'use client';

import { Box, Stack, Text } from '@chakra-ui/react';

import { AppTitle } from '@/ui/components/customs/AppTitle';

export const SignInPage = () => {
  return (
    <Stack spacing="2rem">
      <AppTitle />
      <Box>
        <Text as="h1" textStyle="h3">
          Sign In
        </Text>
      </Box>
    </Stack>
  );
};

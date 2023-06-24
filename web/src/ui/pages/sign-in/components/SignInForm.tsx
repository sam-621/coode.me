import { Box, Button, Divider, HStack, Stack, Text } from '@chakra-ui/react';

import { GithubButton, InputContainer } from '@/ui/components/customs';

export const SignInForm = () => {
  return (
    <Stack spacing="1.5rem">
      <Stack spacing="1.25rem">
        <InputContainer label="Email" placeholder="example@example.com" />
        <Box className="w-full">
          <Button width="100%" variant="filled" colorScheme="common.white">
            Sign in
          </Button>
        </Box>
      </Stack>
      <HStack alignItems="center" spacing="0.5rem">
        <Divider />
        <Text whiteSpace="nowrap" textStyle="body2" color="text.secondary">
          Or continue with
        </Text>
        <Divider />
      </HStack>
      <HStack justifyContent="center">
        <GithubButton />
      </HStack>
    </Stack>
  );
};

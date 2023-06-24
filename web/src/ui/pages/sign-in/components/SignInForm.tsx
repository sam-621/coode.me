import { Button, Divider, Text } from '@chakra-ui/react';

import { GithubButton, InputContainer } from '@/ui/components/customs';

export const SignInForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <InputContainer label="Email" placeholder="example@example.com" />
        <div className="w-full">
          <Button width="100%" variant="filled" colorScheme="common.white">
            Sign in
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Divider />
        <Text whiteSpace="nowrap" textStyle="body2" color="text.secondary">
          Or continue with
        </Text>
        <Divider />
      </div>
      <div className="flex justify-center">
        <GithubButton />
      </div>
    </div>
  );
};

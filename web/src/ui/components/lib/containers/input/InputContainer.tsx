'use client';

import { ComponentProps, forwardRef } from 'react';

import { FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';

export const InputContainer = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...rest }, ref) => {
    return (
      <FormControl display="flex" flexDirection="column" gap={2} isInvalid={Boolean(error)}>
        <FormLabel m={0} textStyle="body1">
          {label}
        </FormLabel>
        <Input ref={ref} variant={error ? 'error' : 'default'} {...rest} />
        <FormErrorMessage m={0}>
          <Text textStyle="caption" color="error.500">
            {error}
          </Text>
        </FormErrorMessage>
      </FormControl>
    );
  }
);

type Props = ComponentProps<typeof Input> & {
  label: string;
  error?: string;
};

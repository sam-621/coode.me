'use client';

import { ChangeEvent, FC } from 'react';

import { FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';

export const InputContainer: FC<Props> = ({ placeholder, label, value, onChange, error }) => {
  return (
    <FormControl display="flex" flexDirection="column" gap={2} isInvalid={Boolean(error)}>
      <FormLabel m={0} textStyle="body1">
        {label}
      </FormLabel>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="email"
        variant={error ? 'error' : 'default'}
      />
      <FormErrorMessage m={0}>
        <Text textStyle="caption" color="error.500">
          {error}
        </Text>
      </FormErrorMessage>
    </FormControl>
  );
};

type Props = {
  placeholder: string;
  label: string;
  value: string;
  onChange: (v: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

'use client';

import { FormEvent, useState } from 'react';

import { useLogin } from '@/core/auth/hook';
import { CButton, CDivider, CText, InputContainer } from '@/ui/components/lib';
import { GithubButton } from '@/ui/components/social';

export const SignInForm = () => {
  const { login } = useLogin();
  const [email, setEmail] = useState('');

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email);
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <InputContainer
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          placeholder="example@example.com"
        />
        <div className="w-full">
          <CButton type="submit" size="lg" width="100%" variant="filled" colorScheme="common.white">
            Sign in
          </CButton>
        </div>
      </form>
      <div className="flex items-center gap-2">
        <CDivider />
        <CText whiteSpace="nowrap" textStyle="body1" color="text.secondary">
          Or continue with
        </CText>
        <CDivider />
      </div>
      <div className="flex justify-center">
        <GithubButton />
      </div>
    </div>
  );
};

'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { magic } from '@/core/shared/libs/auth';
import { useUserProvider } from '@/core/user/provider';
import { CButton, CDivider, CText, InputContainer } from '@/ui/components/lib';
import { GithubButton } from '@/ui/components/social';

export const SignInForm = () => {
  const { user, setUser } = useUserProvider();
  const [email, setEmail] = useState('');

  const handleLogin = async e => {
    e.preventDefault();

    // Log in using our email with Magic and store the returned DID token in a variable
    try {
      const didToken = await magic?.auth.loginWithMagicLink({
        email
      });

      console.log({
        didToken
      });

      // Send this token to our validation endpoint
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${didToken}`
        }
      });

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic?.user.getMetadata();
        setUser(userMetadata);
        console.log({
          userMetadata
        });
      }
    } catch (error) {
      console.error(error);
    }
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
          <CButton size="lg" width="100%" variant="filled" colorScheme="common.white">
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

'use client';

import { useRouter } from 'next/navigation';

import { useAuthProvider } from '../provider';

export const useLogin = () => {
  const router = useRouter();
  const repository = useAuthProvider();

  const login = async (email: string) => {
    const token = await repository.login(email);

    const isValidToken = await repository.validateToken(token);

    if (!isValidToken) {
      // Validate Error
    }

    router.push('/sign-in/preferences');
  };

  return {
    login
  };
};

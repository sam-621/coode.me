'use client';

import { useRouter } from 'next/navigation';

import { useAUthRepositoryProvider } from '../provider';

export const useLogin = () => {
  const router = useRouter();
  const repository = useAUthRepositoryProvider();

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

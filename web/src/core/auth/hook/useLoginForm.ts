import { z } from 'zod';

import { useForm } from '@/core/shared/libs/forms';

import { useLogin } from './useLogin';

const schema = z.object({
  email: z.string().email({ message: 'Email is invalid' })
});

export const useLoginForm = () => {
  const { login } = useLogin();
  const { register, handleSubmit, isSubmitting, errors } = useForm<FromInputs>(schema);

  const onSubmit = async (input: FromInputs) => {
    await login(input.email);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting
  };
};

type FromInputs = {
  email: string;
};

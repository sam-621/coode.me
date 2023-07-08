import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useLogin } from './useLogin';

const schema = z.object({
  email: z.string().email({ message: 'Email is invalid' })
});

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FromInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(schema)
  });

  const { login } = useLogin();

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

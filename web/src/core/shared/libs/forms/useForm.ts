import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';
import { ZodType } from 'zod';

export const useForm = <T extends FieldValues>(schema: ZodType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useReactHookForm<T>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(schema)
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting
  };
};

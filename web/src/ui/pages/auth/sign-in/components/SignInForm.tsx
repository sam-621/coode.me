'use client';

import { useLoginForm } from '@/core/auth/hook/useLoginForm';
import { CButton, CDivider, CText, InputContainer } from '@/ui/components/lib';
import { GithubButton } from '@/ui/components/social';

export const SignInForm = () => {
  const { register, onSubmit, isSubmitting, errors } = useLoginForm();

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <InputContainer
          label="Email"
          placeholder="example@example.com"
          {...register('email')}
          error={errors.email?.message}
        />
        <div className="w-full">
          <CButton
            isLoading={isSubmitting}
            loadingText="Signing in..."
            type="submit"
            size="lg"
            width="100%"
            variant="filled"
            colorScheme="common.white"
            _hover={{ bg: '' }}
          >
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

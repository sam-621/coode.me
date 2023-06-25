import { CButton, CDivider, CText, InputContainer } from '@/ui/components/lib';
import { GithubButton } from '@/ui/components/social';

export const SignInForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <InputContainer label="Email" placeholder="example@example.com" />
        <div className="w-full">
          <CButton size="lg" width="100%" variant="filled" colorScheme="common.white">
            Sign in
          </CButton>
        </div>
      </div>
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

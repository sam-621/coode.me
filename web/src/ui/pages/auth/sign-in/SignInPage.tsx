import { AppTitle } from '@/ui/components/layout';
import { CText } from '@/ui/components/lib';

import { SignInForm } from './components';

export const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AppTitle />
      <div className="flex flex-col gap-8">
        <div>
          <CText as="h1" textStyle="h3">
            Sign In
          </CText>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

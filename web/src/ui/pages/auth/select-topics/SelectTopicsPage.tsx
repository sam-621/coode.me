import { AppTitle } from '@/ui/components/layout';
import { CText } from '@/ui/components/lib';

export const SelectTopicsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AppTitle />
      <div className="flex flex-col gap-8">
        <div>
          <CText as="h1" textStyle="h3">
            Select topics
          </CText>
          <CText textStyle="">
            Customize your experience. Select at least 3 topics and discover relevant content for
            you
          </CText>
        </div>
        {/* <SignInForm /> */}
      </div>
    </div>
  );
};

import { AppTitle } from '@/ui/components/layout';
import { CButton, CList, CText, SearchInputContainer } from '@/ui/components/lib';
import { TopicCard } from '@/ui/components/topic';

export const PreferencesPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AppTitle />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <CText as="h1" textStyle="h3">
            Select topics
          </CText>
          <CText textStyle="body1" color="text.secondary">
            Customize your experience. Select at least 3 topics and discover relevant content for
            you
          </CText>
        </div>
        <SearchInputContainer />
        <CList>
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </CList>
      </div>
      <div className="sticky bottom-5">
        <CButton size="lg" width="full">
          Go to coode.me
        </CButton>
      </div>
    </div>
  );
};
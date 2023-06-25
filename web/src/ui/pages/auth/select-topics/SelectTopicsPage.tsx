import { AppTitle } from '@/ui/components/layout';
import { CText, SearchInputContainer } from '@/ui/components/lib';
import { TopicCard } from '@/ui/components/topic';

export const SelectTopicsPage = () => {
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
        <div className="flex flex-col gap-5">
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </div>
      </div>
    </div>
  );
};

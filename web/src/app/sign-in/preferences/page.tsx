import { TopicRepositoryProvider } from '@/core/topic/providers';
import { PreferencesPage } from '@/ui/pages/auth';

export default function PreferencesRoute() {
  return (
    <TopicRepositoryProvider>
      <PreferencesPage />
    </TopicRepositoryProvider>
  );
}

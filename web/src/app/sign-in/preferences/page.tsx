import { TopicProvider } from '@/core/topic/provider';
import { PreferencesPage } from '@/ui/pages/auth';

export default function PreferencesRoute() {
  return (
    <TopicProvider>
      <PreferencesPage />
    </TopicProvider>
  );
}

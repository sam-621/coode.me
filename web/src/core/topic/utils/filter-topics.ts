import { Topic } from '../domain';

export const filterTopicsByTitle = (topics: Topic[], title: string) => {
  return topics.filter(t => t.title.includes(title));
};

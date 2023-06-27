'use client';

import { createContext, FC, PropsWithChildren, useCallback, useContext } from 'react';

import { Topic } from '../domain';
import { TopicApiRepository } from '../repositories';
import { TopicService } from '../services';

type ContextSchema = {
  getAll: () => Promise<Topic[]>;
};

const Context = createContext<ContextSchema>({} as ContextSchema);

const topicApiRepository = new TopicApiRepository();

export const TopicProvider: FC<Props> = ({ children }) => {
  const getAll = useCallback((): Promise<Topic[]> => {
    const topicService = new TopicService(topicApiRepository);

    return topicService.getAll();
  }, []);

  return <Context.Provider value={{ getAll }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren;

export const useTopicProvider = () => useContext(Context);

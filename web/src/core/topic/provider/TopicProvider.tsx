'use client';

import { createContext, FC, PropsWithChildren, useCallback, useContext } from 'react';

import { TopicGetter } from '../application/topic-getter';
import { Topic } from '../domain';
import { TopicApiRepository } from '../services';

type ContextSchema = {
  getAll: () => Promise<Topic[]>;
};

const Context = createContext<ContextSchema>({} as ContextSchema);

const topicApiRepository = new TopicApiRepository();

export const TopicProvider: FC<Props> = ({ children }) => {
  const getAll = useCallback((): Promise<Topic[]> => {
    const topicGetter = new TopicGetter(topicApiRepository);

    return topicGetter.getAll();
  }, []);

  return <Context.Provider value={{ getAll }}>{children}</Context.Provider>;
};

type Props = PropsWithChildren;

export const useTopicProvider = () => useContext(Context);

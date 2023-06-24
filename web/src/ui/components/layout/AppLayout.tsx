import { FC, PropsWithChildren } from 'react';

export const AppLayout: FC<Props> = ({ children }) => {
  return <div className="mx-4 my-5 xl:mx-[9.38rem] xl:my-10">{children}</div>;
};

type Props = PropsWithChildren;

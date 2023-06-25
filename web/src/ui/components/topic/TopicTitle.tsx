import { FC } from 'react';

import { CText } from '../lib';

export const TopicTitle: FC<Props> = ({ color, title }) => {
  return (
    <CText color="text.primary" textStyle="h5">
      <CText as="span" color={color}>
        #
      </CText>
      {title}
    </CText>
  );
};

type Props = {
  color: `#${string}`;
  title: string;
};

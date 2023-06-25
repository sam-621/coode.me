import { CButton, CCard, CText } from '../lib';

import { TopicTitle } from './TopicTitle';

export const TopicCard = () => {
  return (
    <CCard className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <TopicTitle color="#562765" title="Web" />
          <CText textStyle="strong" color="text.secondary">
            1,789 Posts
          </CText>
        </div>
        <CText textStyle="subtitle1" color="text.secondary">
          Because the internet...
        </CText>
      </div>
      <div className="text-right">
        <CButton variant="outline" colorScheme="common.white">
          Follow
        </CButton>
      </div>
    </CCard>
  );
};

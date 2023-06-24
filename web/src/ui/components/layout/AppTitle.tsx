import { Manrope } from 'next/font/google';

import { CText } from '../lib';

const manrope = Manrope({ subsets: ['latin'] });

export const AppTitle = () => {
  return (
    <CText
      className={manrope.className}
      textAlign="center"
      color="text.primary"
      as="h1"
      fontSize="2.5rem"
      fontWeight={700}
    >
      Coode
      <CText as="strong" color="primary.500">
        .
      </CText>
      Me
    </CText>
  );
};

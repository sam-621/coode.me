import { Manrope } from 'next/font/google';

import { Text } from '@chakra-ui/react';

const manrope = Manrope({ subsets: ['latin'] });

export const AppTitle = () => {
  return (
    <Text
      className={manrope.className}
      textAlign="center"
      color="text.primary"
      as="h1"
      fontSize="2.5rem"
      fontWeight={700}
    >
      Coode
      <Text as="strong" color="primary.500">
        .
      </Text>
      Me
    </Text>
  );
};

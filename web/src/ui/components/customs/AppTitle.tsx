import { Text } from '@chakra-ui/react';

export const AppTitle = () => {
  return (
    <Text textAlign="center" color="text.primary" as="h1" fontSize="2.5rem" fontWeight={700}>
      Coode
      <Text as="strong" color="primary.500">
        .
      </Text>
      me
    </Text>
  );
};

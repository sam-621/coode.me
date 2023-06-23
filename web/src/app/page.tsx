'use client';

import { Button, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <h1>hola</h1>
      {/* <Button>hola</Button> */}
      <Text>Text</Text>
      <Button variant="filled" colorScheme="primary">
        Button
      </Button>
      <Button variant="outline" colorScheme="primary">
        Button
      </Button>
      <Button variant="ghost" colorScheme="primary">
        Button
      </Button>

      <Button variant="filled" colorScheme="common.white">
        Button
      </Button>
      <Button variant="outline" colorScheme="common.white">
        Button
      </Button>
      <Button variant="ghost" colorScheme="common.white">
        Button
      </Button>
    </div>
  );
}

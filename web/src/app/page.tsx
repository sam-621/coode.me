'use client';

import { Box, Button, Text } from '@chakra-ui/react';

import { InputContainer } from '@/ui/components/lib';
import { CardContainer } from '@/ui/components/lib/containers/CardContainer';

export default function Home() {
  return (
    <div>
      <h1 className="text-red-600">hola</h1>
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

      <Box mt={6}>
        <InputContainer label="Email" placeholder="Enter your email" error="Wrong email" />
        <InputContainer label="Email" placeholder="Enter your email" />
      </Box>
      <div className="mt-10">
        <CardContainer />
      </div>
    </div>
  );
}

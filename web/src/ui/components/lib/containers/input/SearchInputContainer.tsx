'use client';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const SearchInputContainer = () => {
  return (
    <InputGroup>
      <Input className="pr-10 rounded-full" placeholder="Search..." />
      <InputRightElement className="pr-3 h-full">
        <MagnifyingGlassIcon color="white" width={16} height={16} />
      </InputRightElement>
    </InputGroup>
  );
};

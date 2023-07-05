'use client';

import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { useSearchProvider } from '@/core/shared/providers';

export const SearchInputContainer = () => {
  const { query, setQuery } = useSearchProvider();
  console.log({
    query
  });

  return (
    <InputGroup>
      <Input
        value={query}
        onChange={e => setQuery(e.target.value)}
        pr="2.5rem"
        rounded="full"
        placeholder="Search..."
      />
      <InputRightElement paddingRight="0.75rem" height="100%">
        <MagnifyingGlassIcon color="white" width={16} height={16} />
      </InputRightElement>
    </InputGroup>
  );
};

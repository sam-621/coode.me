import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const CustomList: ComponentStyleConfig = {
  baseStyle: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }
};

export default defineStyleConfig(CustomList);

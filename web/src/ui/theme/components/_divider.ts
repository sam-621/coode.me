import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const CustomDivider: ComponentStyleConfig = {
  baseStyle: {
    borderColor: 'divider',
    opacity: 1
  }
};

export default defineStyleConfig(CustomDivider);

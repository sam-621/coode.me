import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const CustomCard: ComponentStyleConfig = {
  baseStyle: {
    container: {
      borderColor: 'divider',
      borderWidth: '1px',
      padding: '0.75rem',
      backgroundColor: 'none'
    }
  }
};

export default defineStyleConfig(CustomCard);

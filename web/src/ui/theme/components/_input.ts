import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

import { textStyles } from '../foundations';

const CustomInput: ComponentStyleConfig = {
  baseStyle: {
    field: {
      ...textStyles?.body1,
      p: '0.75rem',
      width: '100%',
      borderRadius: '6px',
      height: 'auto',
      border: '1px solid',
      borderColor: 'divider'
    }
  },
  variants: {
    default: {
      field: {
        bg: 'bg.default',
        _focus: {
          borderColor: 'text.primary'
        }
      }
    },
    error: {
      field: {
        borderColor: 'error.500',
        bg: 'bg.default'
      }
    }
  },
  defaultProps: {
    variant: 'default'
  }
};

export default defineStyleConfig(CustomInput);

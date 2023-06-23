/* eslint-disable sonarjs/no-duplicate-string */
import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

import { textStyles } from '../foundations';

const CustomButton: ComponentStyleConfig = {
  baseStyle: {
    ...textStyles?.body2,
    borderRadius: '8px', // 8px
    textTransform: 'capitalize'
  },
  variants: {
    filled: ({ colorScheme: c }) => ({
      bg: `${c}.500`,
      color: c === 'common.white' ? 'common.black' : undefined,
      _hover: {
        bg: `${c}.600`
      },
      _active: {
        bg: `${c}.700`
      }
    }),
    outline: ({ colorScheme: c }) => ({
      _hover: {
        bg: `${c}.16%`
      },
      _active: {
        bg: `${c}.16%`
      }
    }),
    ghost: ({ colorScheme: c }) => ({
      _hover: {
        bg: `${c}.16%`
      },
      _active: {
        bg: `${c}.16%`
      }
    })
  },
  defaultProps: {
    colorScheme: 'primary'
  }
};

export default defineStyleConfig(CustomButton);

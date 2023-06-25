/* eslint-disable sonarjs/no-duplicate-string */
import {
  ComponentStyleConfig,
  defineStyleConfig,
  SystemStyleInterpolation
} from '@chakra-ui/react';

import { textStyles } from '../foundations';

const overrideStyles: SystemStyleInterpolation = {
  ...textStyles?.body1,
  p: '0.5rem',
  paddingInline: '1rem',
  height: '40px'
};

const CustomButton: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '8px', // 8px
    textTransform: 'capitalize'
  },
  variants: {
    filled: ({ colorScheme: c }) => ({
      ...overrideStyles,
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
      ...overrideStyles,
      _hover: {
        bg: `${c}.16%`
      },
      _active: {
        bg: `${c}.16%`
      }
    }),
    ghost: ({ colorScheme: c }) => ({
      ...overrideStyles,
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

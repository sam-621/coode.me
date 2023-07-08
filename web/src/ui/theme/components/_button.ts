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
  paddingInline: '1rem'
};

const CustomButton: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '8px', // 8px
    textTransform: 'capitalize'
  },
  sizes: {
    md: {
      height: '40px'
    },
    lg: {
      height: '45px'
    }
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
      },
      _disabled: {
        bg: `${c}.500`
      }
    }),
    outline: ({ colorScheme: c }) => ({
      ...overrideStyles,
      _hover: {
        bg: `${c}.16%`
      },
      _active: {
        bg: `${c}.16%`
      },
      _disabled: {
        bg: `${c}.500`
      }
    }),
    ghost: ({ colorScheme: c }) => ({
      ...overrideStyles,
      _hover: {
        bg: `${c}.16%`
      },
      _active: {
        bg: `${c}.16%`
      },
      _disabled: {
        bg: `${c}.500`
      }
    })
  },
  defaultProps: {
    colorScheme: 'primary',
    variant: 'filled',
    size: 'md'
  }
};

export default defineStyleConfig(CustomButton);

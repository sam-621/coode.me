import { extendTheme, ThemeOverride } from '@chakra-ui/react';

import { styles } from './config';
import { breakpoints, colors, textStyles } from './foundations';

/**
 * Each time you change this config
 * you have to run `yarn theme` to generate the new respective types.
 */
const customTheme: ThemeOverride = {
  styles,
  colors,
  textStyles,
  breakpoints
};

export const theme = extendTheme(customTheme);

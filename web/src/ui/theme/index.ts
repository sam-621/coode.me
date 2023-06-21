import { extendTheme, ThemeOverride } from '@chakra-ui/react';

import { colors } from './foundations';

/**
 * Each time you change this config
 * you have to run `yarn theme` to generate the new respective types.
 */
const customTheme: ThemeOverride = {
  colors
};

export const theme = extendTheme(customTheme);

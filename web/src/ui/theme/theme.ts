import { extendTheme, ThemeOverride } from '@chakra-ui/react';

import { CustomButton, CustomCard, CustomDivider, CustomInput, CustomList } from './components';
import { styles } from './config';
import { breakpoints, colors, fonts, textStyles } from './foundations';

/**
 * Each time you change this config
 * you have to run `yarn theme` to generate the new respective types.
 */
const customTheme: ThemeOverride = {
  styles,
  colors,
  textStyles,
  breakpoints,
  fonts,
  components: {
    Button: CustomButton,
    Input: CustomInput,
    Divider: CustomDivider,
    List: CustomList,
    Card: CustomCard
  }
};

export const theme = extendTheme(customTheme);

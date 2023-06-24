import { theme as base, ThemeOverride } from '@chakra-ui/react';

export const fonts: ThemeOverride['fonts'] = {
  heading: `'Public Sans', ${base.fonts.heading}`,
  body: `'Public Sans', ${base.fonts.body}`
};

'use client'

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { media } from './breakpoints';
import GlobalStyle from './globalStyles';
import { BorderVariant } from './models';
import { colors } from './colors';
import { customStyles } from './sizing';
import { fontFamilies, fontSize, fontSizeGenerator, weights } from './fonts';

const size = {
  s: '.875rem',
  m: '.9375rem',
  l: '1.2rem',
  xl: '2rem',
};

const borderVariants: BorderVariant = {
  default: `1px solid #e6ebf1`,
};

export enum Z_INDEX {
  low = 1,
  mid = 2,
  high = 3,
  max = 4,
}

const zIndex = {
  low: Z_INDEX.low,
  mid: Z_INDEX.mid,
  high: Z_INDEX.high,
  max: Z_INDEX.max,
};

const boxShadow = {
  default: `rgb(0 0 0 / 15%) 0px 1px 4px -1px`,
};

const theme = {
  color: colors,
  fontFamily: fontFamilies,
  fontSize,
  size,
  media,
  weight: weights,
  borderVariants,
  zIndex,
  boxShadow,
  customStyles,
  fontSizeGenerator,
};

type Props = {
  children: React.ReactNode;
};

const StyleProvider: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default StyleProvider;

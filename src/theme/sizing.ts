import { css, CSSObject } from 'styled-components';

export type Size = 'xs' | 's' | 'm' | 'l';

export type ExtendedSize = Size | 'xl' | 'xxl';

export type CustomSize = {
  width: string;
  height: string;
};
export type MarginProps = {
  mt?: ExtendedSize;
  mr?: ExtendedSize;
  mb?: ExtendedSize;
  ml?: ExtendedSize;
};
export type PaddingProps = {
  pt?: ExtendedSize;
  pr?: ExtendedSize;
  pb?: ExtendedSize;
  pl?: ExtendedSize;
};
export type SpacingProps = PaddingProps & MarginProps;
const values = {
  xs: '0.5rem',
  s: '0.5rem',
  m: '0.8rem',
  l: '1.2rem',
  xl: '1.5rem',
  xxl: '2rem',
};
export const margin = css<MarginProps>`
  margin-top: ${(p: MarginProps) => (p.mt ? values[p.mt] : null)};
  margin-right: ${(p: MarginProps) => (p.mr ? values[p.mr] : null)};
  margin-bottom: ${(p: MarginProps) => (p.mb ? values[p.mb] : null)};
  margin-left: ${(p: MarginProps) => (p.ml ? values[p.ml] : null)};
`;

export const padding = css<PaddingProps>`
  padding-top: ${(p: PaddingProps) => (p.pt ? values[p.pt] : null)};
  padding-right: ${(p: PaddingProps) => (p.pr ? values[p.pr] : null)};
  padding-bottom: ${(p: PaddingProps) => (p.pb ? values[p.pb] : null)};
  padding-left: ${(p: PaddingProps) => (p.pl ? values[p.pl] : null)};
`;
export const customStyles = css<{
  customStyles?: CSSObject;
}>`
  ${(p) => p.customStyles && { ...p.customStyles }};
`;

export const checkboxOrRadioSizes = {
  xs: 15,
  s: 18,
  m: 22,
  l: 30,
};

export const getInputSizeStyles = (size: Size) => css`
  width: ${checkboxOrRadioSizes[size]}px;
  height: ${checkboxOrRadioSizes[size]}px;
`;

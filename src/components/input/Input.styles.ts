'use client'

import styled, { css } from 'styled-components';
import { ColorKeys, Size } from '../../theme';
import { IconPlacement, InputProps, InputShape, InputVariant } from './Input';

export const inputPaddingsBySize = {
  xs: ``,
  s: `0.188rem 0.563rem`,
  m: `0.5rem`,
  l: `0.9rem 0.5rem`,
};

const focusStyles = (focusable?: boolean) => {
  if (focusable) {
    return css`
    &:focus-within {
        border-color: rgb(219, 198, 102);
        box-shadow: 0 0 1px rgb(219, 198, 102) inset, 0 0 8px rgba(219, 198, 102, 0.6);
      }
    `;
  }
  return css`
    outline: none;
  `;
};

const setStylesByVariant = (variant?: InputVariant) => {
  switch (variant) {
    case 'outlined':
      return css`
        border-radius: 4px;
        border-color: rgba(0, 0, 0, 0.23);
        border-style: solid;
        border-width: 1px;
      `;
    case 'filled':
      return css`
        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
        background-color: rgba(0, 0, 0, 0.06);
      `;
    case 'standard':
      return css`
        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
      `;
    // TODO: edit harcoded styles
    case 'borderless':
      return css`
        border: none;
        border-bottom: 1px solid #000;
        text-align: center;
        margin-bottom: 10px;
      `;
    default:
      return css``;
  }
};

export const Wrapper = styled.div<{
  type: string;
  variant?: InputVariant;
  width?: string;
  inputSize?: Size;
  focusable?: boolean;
}>`
  width: ${(p) => p.width && p.width};
  font-family: ${(p) => p.theme.fontFamily.default};
  font-size: ${(p) => p.theme.fontSize.m};
  font-weight: ${(p) => p.theme.weight.medium};
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  color: ${(p) => p.theme.color.default};
  box-sizing: border-box;
  cursor: text;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-items: center;
  text-align: start;
  padding: ${(p) => (p.inputSize ? inputPaddingsBySize[p.inputSize] : 0)};
  ${(p) => setStylesByVariant(p.variant)}
  ${(p) => focusStyles(p.focusable)}
`;

export const InputContainer = styled.input.attrs(({ type }) => ({
  type: type || 'password',
}))<InputProps>`
  border: 0;
  box-sizing: content-box;
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  text-align: inherit;
  outline: 0 none;
`;

// TODO: when error is true rgb(255, 0, 0) and rgba(255, 0, 0, 1)

export const InputWithIconWrapper = styled.div<{
  size?: Size;
  iconPlacement: IconPlacement;
  shape: InputShape;
  bgColor?: ColorKeys;
}>`
  display: flex;
  flex-direction: ${(p) => (p.iconPlacement === 'start' ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: ${(p) => (p.shape === 'rounded' ? '4px' : null)};
  /* box-shadow: 1px 1px 5px ${(p) => p.theme.color.lightSilver}; */
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0.5px;
  background-color: ${(p) => p.bgColor ?? 'trasnparent'};
  padding: ${(p) => (p.size ? inputPaddingsBySize[p.size] : inputPaddingsBySize['m'])};
`;
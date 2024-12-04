'use client'

import styled from 'styled-components';
import { CustomStylesStyledProps, flex, FlexStyledProps, margin, MarginStyledProps, padding, PaddingStyledProps } from '../../theme';
import { ListStyle } from './List';

export const Wrapper = styled.ul<{
  $width?: string;
  $height?: string;
  $bgColor?: string;
  $contentBox?: boolean;
  $listStyle?: ListStyle;
} & FlexStyledProps & MarginStyledProps & PaddingStyledProps &  CustomStylesStyledProps>`
  display: flex;
  width: ${(p) => p.$width ?? null};
  height: ${(p) => p.$height ?? null};
  list-style-type: ${(p) => p.$listStyle};
  ${({ $listStyle }) => $listStyle === 'none' && ` padding: 0;`}
  margin: 0;
  ${flex};
  ${margin};
  ${padding};
  background-color: ${(p) => p.$bgColor && p.$bgColor};
  box-sizing: ${(p) => (p.$contentBox ? 'content-box' : 'border-box')};
  ${(p) => p.$customStyles && p.$customStyles}
`;

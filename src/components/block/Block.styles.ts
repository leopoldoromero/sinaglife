'use client';

import styled from 'styled-components';
import { CustomStylesStyledProps, flex, FlexStyledProps, margin, MarginStyledProps, padding, PaddingStyledProps } from '@theme/index';

export const BlockContainer = styled.div<{
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $boxSizing?: string;
  $bgColor?: string;
  $position?: string;
  $noMargin?: boolean;
  $noPadding?: boolean;
  $overflow?: string;
} & FlexStyledProps & MarginStyledProps & PaddingStyledProps & CustomStylesStyledProps>`
  width: ${(p) => p.$width ?? null};
  height: ${(p) => p.$height ?? null};
  border-radius: ${(p) => p.$borderRadius ?? null};
  box-sizing: ${(p) => p.$boxSizing ?? 'border-box'};
  background-color: ${(p) => p.$bgColor && p.theme.color[p.$bgColor]};
  position: ${(p) => p.$position ?? null};
  ${flex};
  ${(p) => (!p.$noMargin ? margin : 'margin: 0')};
  ${(p) => (!p.$noPadding ? padding : 'padding: 0')};
  ${(p) => p.$overflow ?? null};
  ${(p) => p.$customStyles ?? null};
`;

'use client'
import styled from 'styled-components';
import { CustomStylesStyledProps, flex, FlexStyledProps, margin, MarginStyledProps, padding, PaddingStyledProps } from '../../theme';

export const StyledForm = styled.form<{
  $width?: string;
  $height?: string;
} & FlexStyledProps & MarginStyledProps & PaddingStyledProps & CustomStylesStyledProps>`
  width: ${(p) => p.$width ?? null};
  height: ${(p) => p.$height ?? null};
  ${flex};
  ${margin};
  ${padding};
  ${(p) => p.$customStyles && p.$customStyles}
`;

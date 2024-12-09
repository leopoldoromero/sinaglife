'use client'
import styled from 'styled-components';
import { flex, FlexStyledProps } from '@theme/flex';
import { margin, MarginStyledProps, padding, PaddingStyledProps } from '@theme/sizing';
import { CustomStylesStyledProps } from '@theme/models';

export const StyledContainer = styled.div<{
  $width?: string;
  $height?: string;
} & FlexStyledProps & MarginStyledProps & PaddingStyledProps & CustomStylesStyledProps>`
  border: 0.5px solid rgb(204, 204, 204);
  min-width: 19.75rem;
  max-width: 21.875rem;
  padding: 1rem;
  box-shadow: 0px 2px 12px 1px #c7c7c7;
  width: ${(p) => p.$width ?? null};
  height: ${(p) => p.$height ?? null};
  ${flex};
  ${margin};
  ${padding};
  ${(p) => p.$customStyles ?? null};
`;

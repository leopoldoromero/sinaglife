'use client'
import styled from 'styled-components';
import { CustomStylesStyledProps, flex, FlexStyledProps, margin, MarginStyledProps, padding, PaddingStyledProps } from '../../theme';

export const Wrapper = styled.div<{
    $width?: string;
    $fontSize: string;
    $fontFamily?: string;
    $isUppercase?: boolean;
    $hoverColor?: string;
    $color: string;
    $weight?: string;
} & FlexStyledProps & MarginStyledProps & PaddingStyledProps & CustomStylesStyledProps>`
 width: ${(p) => p.$width ?? null};  
a {
    text-decoration: none !important;
    ${flex};
    ${(p) => p.theme.fontSizeGenerator('a', p.$fontSize)};
    font-family: ${(p) => p.$fontFamily && p.theme.fontFamily[p.$fontFamily]};
    color: ${(p) => (p.color ? p.theme.color[p.$color] : p.theme.color.black)};
    text-transform: ${(p) => p.$isUppercase && 'uppercase'};
    font-weight: ${(p) => p.$weight && p.theme.weight[p.$weight]};
    ${margin};
    ${padding};
    &:hover {
      color: ${(p) => p.$hoverColor && p.theme.color[p.$hoverColor]} !important;
    }
    ${(p) => p.$customStyles && p.$customStyles}
  }
`;

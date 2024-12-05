'use client';
import styled from 'styled-components';
import { AlignItems, CustomStylesStyledProps, JustifyContent, margin, MarginStyledProps, padding, PaddingStyledProps } from '../../theme';

export const Wrapper = styled.li<{
  $fontSize?: string;
  $isUppercase?: boolean;
  $weight?: string;
  $textAlign?: string;
  $color?: string;
  $contentBox?: boolean;
  $isFlex?: boolean;
  $justify?: JustifyContent;
  $align?: AlignItems;
}  & MarginStyledProps & PaddingStyledProps & CustomStylesStyledProps>`
  text-align: ${(p) => p.$textAlign ?? 'center'};
  text-transform: ${(p) => p.$isUppercase && 'uppercase'};
  ${(p) => p.theme.fontSizeGenerator('p', p.$fontSize ?? 'm')}
  font-weight: ${(p) => (p.$weight ? p.$weight : p.theme.weight.medium)};
  color: ${(p) => (p.$color ? p.theme.color[p.$color] : p.theme.color.black)};
  display: ${(p) => (p.$isFlex ? 'flex' : 'list-item')};
  justify-content: ${(p) => p.$justify};
  align-items: ${(p) => p.$align};
  ${margin};
  ${padding};
  box-sizing: ${(p) => (p.$contentBox ? 'content-box' : 'border-box')};
  ${(p) => p.$customStyles && p.$customStyles}
`;

'use client'

import styled, { css } from 'styled-components';
import { CustomStylesStyledProps, padding, PaddingStyledProps } from '../../theme';
import { Position } from '../../theme';

const transitionSpeed = '0.3s';

const positionHandler = (isOpen: boolean, position?: Position) => {
  switch (position) {
    case 'right':
      return css`
        right: 0;
        transform: ${isOpen ? `translateX(0)` : `translateX(100%)`};
        transition: transform ${transitionSpeed} ease;
      `;
    case 'left':
      return `
        transform: ${isOpen ? `translateX(0)` : `translateX(-100%)`};
        transition: transform ${transitionSpeed} ease;
      `;
    case 'top':
      return `
        top: 0;
        transform: ${isOpen ? `translateX(0)` : `translateY(-100%)`};
        transition: transform ${transitionSpeed} ease;
        width: 100%;
      `;
    case 'bottom':
      return `
        bottom: 0;
        transform: ${isOpen ? `translateX(0)` : `translateY(100%)`};
        transition: transform ${transitionSpeed} ease;
        width: 100%;
      `;
    default:
      return `
      transform: ${isOpen ? `translateX(0)` : `translateX(-100%)`};
      transition: transform ${transitionSpeed} ease;
      `;
  }
};

export const Wrapper = styled.div<{
  $isOpen: boolean;
  $position?: Position;
  $bgColor?: string;
  $width?: string;
  $height?: string;
} & PaddingStyledProps & CustomStylesStyledProps>`
  background-color: ${(p) => (p.$bgColor ? p.theme.color[p.$bgColor] : p.theme.color.white)};
  min-width: ${(p) => (p.$width ? p.$width : '260px')};
  height: ${(p) => p.$height && p.$height};
  overflow: auto;
  position: fixed;
  ${(p) => positionHandler(p.$isOpen, p.$position)};
  z-index: ${(p) => p.theme.zIndex.max};
  ${padding};
  ${(p) => p.$customStyles && p.$customStyles}
`;

'use client'

import styled from 'styled-components';
import { flex, margin, padding } from '@theme/index';
import { Props } from './Block';

export const BlockContainer = styled.div<Omit<Props, 'children' | 'onClick'>>`
  width: ${(p) => p.width ?? null};
  height: ${(p) => p.height ?? null};
  border-radius: ${(p) => p.borderRadius && p.borderRadius};
  box-sizing: ${(p) => p.boxSizing ?? 'border-box'};
  background-color: ${(p) => p.bgColor && p.theme.color[p.bgColor]};
  position: ${(p) => p.position && p.position};
  ${flex};
  ${(p) => (!p.noMargin ? margin : 'margin: 0')};
  ${(p) => (!p.noPadding ? padding : 'padding: 0')};
  ${(p) => p.overflow && p.overflow}
  ${(p) => p.customStyles && p.customStyles}
`;

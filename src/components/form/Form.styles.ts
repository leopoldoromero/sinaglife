'use client'

import styled from 'styled-components';
import { flex, margin, padding } from '../../theme';
import { StyledFormProps } from './Form';

export const StyledBlock = styled.form<StyledFormProps>`
  width: ${(p) => p.width ?? null};
  height: ${(p) => p.height ?? null};
  ${flex};
  ${margin};
  ${padding};
  ${(p) => p.customStyles && p.customStyles}
`;

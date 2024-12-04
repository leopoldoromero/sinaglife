'use client'

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const ToolbarLogoContainer = styled(Link)<{ $isShrunk: boolean }>`
  justify-content: center;
  overflow: hidden;
  width: 50%;
  max-width: 180px;
  ${(p) =>
    p.$isShrunk &&
    `
      max-width: 150px;
    `}
`;

export const ToolbarLogo = styled(Image)<{ $isShrunk: boolean }>`
  height: auto;
  transition: 1s;
  width: 100%;
  height: 100%;
`;

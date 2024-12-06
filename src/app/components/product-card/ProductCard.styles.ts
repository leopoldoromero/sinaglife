'use client'
import { Block } from '@components/index';
import Link from 'next/link';
import styled from 'styled-components';

export const ProductCardContainer = styled(Block)`
  width: 155px;
  height: 255px;
  ${(p) => p.theme.media.mobileXl`
   width: 175px;
   height: 270px;
`}
  ${(p) => p.theme.media.tablet`
   width: 190px;
   height: 300px;
`}
${(p) => p.theme.media.desktop`
   width: 220px;
   height: 335px;
`}
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: inherit;
`;
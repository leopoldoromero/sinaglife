'use client'
import styled, { css } from 'styled-components';
import { Block } from '..';
import { FontSizeNames, Size } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sizeStyles: { [key in Size]: any } = {
  xs: css`
    width: 80px;
    height: 180px;
  `,
  s: css`
    width: 120px;
    height: 220px;
  `,
  m: css`
    width: 140px;
    height: 250px;
  `,
  l: css`
    width: 160px;
    height: 280px;
    ${(p) => p.theme.media.mobileXl`
            width: 220px;
            height: 350px;
        `}
    ${(p) => p.theme.media.tablet`
            width: 280px;
            height: 380px;
        `}
        ${(p) => p.theme.media.desktop`
            width: 320px;
            height: 400px;
        `}
  `,
};

export const ProductCardContainer = styled.div<{ size: Size }>`
  ${(p) => sizeStyles[p.size]}
`;

export const StyledBlock = styled(Block)<{ size: Size }>`
  height: 40%;
  ${(p) => p.theme.media.tablet`
        height: ${p.size != 's' && '30%'};
    `}
  ${(p) => p.theme.media.desktop`
        height: ${p.size != 's' && '30%'};
    `}
`;

export const ProductImage = styled.img<{ size: Size }>`
  height: 60%;
  width: 100%;
  object-fit: cover;
  ${(p) => p.theme.media.tablet`
        height: ${p.size != 's' && '70%'};
    `}
  ${(p) => p.theme.media.desktop`
        height: ${p.size != 's' && '70%'};
    `}
`;

export const StyledProductName = styled.span<{ $size: Size, $fontSize: FontSizeNames }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(p) => (p.$size === 's' ? 1 : 3)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizeGenerator(p.$fontSize)};
`;

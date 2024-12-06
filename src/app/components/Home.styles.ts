'use client'
import styled, { css } from 'styled-components';
import { Block } from '../../components';
import Image from 'next/image';

const borders = css`
  border-top: 5px solid ${(p) => p.theme.color.white};
  border-bottom: 5px solid ${(p) => p.theme.color.white};
`;
export const HomeBlock = styled(Block)`
  ${borders}
`;

export const HomeBannerContainer = styled(Block)`
  ${borders}
  height: 120px;
  background-color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.media.mobileXl`
        height: 250px;
    `}
  ${(p) => p.theme.media.tablet`
        height: 250px;
    `}
    ${(p) => p.theme.media.desktop`
        height: 250px;
    `}
`;

export const HomeBannerImage = styled(Image)`
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

export const MosaicContainer = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomePromotionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 500px;
`;

export const HomePromotionContainer = styled(Block)`
  ${borders}
  height: 100%;
  background-color: ${(p) => p.theme.color.white};
  // ${(p) => p.theme.media.mobileXl`
  //       height: 250px;
  //   `}
  // ${(p) => p.theme.media.tablet`
  //       height: 250px;
  //   `}
  //   ${(p) => p.theme.media.desktop`
  //       height: 250px;
  //   `}
`;
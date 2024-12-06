'use client'
import styled from 'styled-components';

export const MosaicContainer = styled.div<{ $url: string }>`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: center;
  padding: 1% 0;
  background-image: url(${(p) => p.$url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MosaicCardContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  ${(p) => p.theme.media.tablet`
        width: 25%;
    `}
  ${(p) => p.theme.media.desktop`
        width: 25%;
    `}
`;

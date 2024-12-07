'use client'
import styled from 'styled-components';

export const ImageSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 300px;
  ${(p) => p.theme.media.mobileXl`
        height: 400px;
    `}
  ${(p) => p.theme.media.tablet`
        height: 500px;
    `}
    ${(p) => p.theme.media.desktop`
        width: 50%;
        height: 100%;
        padding: 0;
    `}
    ${(p) => p.theme.media.desktopXl`
        width: 50%;
    `}
`;
export const MainImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-height: 550px;
  max-width: 250px;
`;
export const MiniImage = styled.img`
  max-height: 80px;
  max-width: 65px;
  object-fit: contain;
  ${(p) => p.theme.media.mobileXl`
        max-height: 120px;
        max-width: 80px;
    `}
  ${(p) => p.theme.media.tablet`
        max-height: 170px;
        max-width: 80px;
    `}
    ${(p) => p.theme.media.desktop`
        max-height: 120px;
        max-width: 80px;
    `}
`;

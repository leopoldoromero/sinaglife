'use client'
import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 400px;
  padding-top: 1rem;
  ${(p) => p.theme.media.tablet`
        padding: 0 1.5rem;
        justify-content: space-around;
        align-items: center;
    `}
  ${(p) => p.theme.media.desktop`
        width: 50%;
        padding: 0 0 0 .5rem;
        justify-content: space-around;
        align-items: flex-start;
    `}
    ${(p) => p.theme.media.desktopXl`
        width: 50%;
        padding: 0 1.5rem;
        align-items: flex-start;
    `}
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 350px;
  min-height: 100px;
  padding: 1rem 0;
  ${(p) => p.theme.media.tablet`
        width: 60%;
    `}
  ${(p) => p.theme.media.desktop`
        width: 60%;
    `}
    ${(p) => p.theme.media.desktop`
        width: 60%;
        flex-direction: column;
        justify-content: space-between;
    `}
  
    ${(p) => p.theme.media.desktopXl`
        width: 60%;
    `}
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  ${(p) => p.theme.media.tablet`
        width: 60%;
    `}
  ${(p) => p.theme.media.desktop`
        width: 60%;
    `}
    ${(p) => p.theme.media.desktop`
        flex-direction: column;
        justify-content: space-between;
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 350px;
  ${(p) => p.theme.media.tablet`
        width: 60%;
    `}
  ${(p) => p.theme.media.desktop`
        width: 60%;
    `}
    ${(p) => p.theme.media.desktop`
        width: 60%;
    `}
`;

export const LogoImage = styled.img`
  width: 40px;
`;

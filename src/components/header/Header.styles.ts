'use client'
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: ${(p) => p.theme.zIndex.mid};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 10px 10px -10px ${(p) => p.theme.color.lightSilver};
`;

export const HeaderTopBar = styled.div`
  width: 100%;
  margin: 0;
  padding: 0.2rem;
  background-color: ${(p) => p.theme.color.xLightSilver};
  text-align: center;
  font-family: ${(p) => p.theme.fontFamily.base2};
  color: $black;
  font-size: ${(p) => p.theme.fontSize.xs};
  font-weight: ${(p) => p.theme.weight.medium};
  letter-spacing: 0.3rem;

  ${(p) => p.theme.media.tablet`
    font-size: ${p.theme.fontSize.s};
    `}
  ${(p) => p.theme.media.desktop`
    font-size: ${p.theme.fontSize.m};
    `}
`;

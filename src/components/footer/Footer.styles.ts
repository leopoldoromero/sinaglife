'use client'
import Image from 'next/image';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: static;
  bottom: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0;
  background-color: #efecdf;
  justify-content: space-evenly;
  text-align: center;

  ${(p) => p.theme.media.desktop`
        flex-direction: row;
        padding: 1.5rem 1rem;
    `}
`;

export const LogoImg = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: contain;

  ${(p) => p.theme.media.mobileXl`
        width: 40px;
        height: 40px;
    `}
  ${(p) => p.theme.media.tablet`
        width: 40px;
        height: 40px;
    `}
    ${(p) => p.theme.media.desktop`
        width: 40px;
        height: 40px;
        top: 10%;
    `}
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(p) => p.theme.media.tablet`
        flex-direction: row;
    `}
  ${(p) => p.theme.media.desktop`
        flex-direction: row;
    `}
`;

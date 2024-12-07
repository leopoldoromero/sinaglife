'use client'
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  z-index: ${(p) => p.theme.zIndex.max};
  box-shadow: 0px 2px 8px 1px #c7c7c7;

  ${(p) => p.theme.media.tablet`
         width: 60%;
    `}
  ${(p) => p.theme.media.desktop`
        width: 45%;
    `}
`;

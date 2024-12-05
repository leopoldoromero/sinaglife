'use client';
import styled, { css, keyframes } from 'styled-components';

const spinIT = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    border-right: 10px solid #bd4e1e;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderBaseStyles = css`
  width: 45px;
  height: 45px;
  background-color: white;
  border: 10px solid #bd4e1e;
  border-right: 10px solid white;
  border-radius: 50%;
  animation: ${spinIT} 0.8s linear infinite;
  transition-property: border;
  z-index: 0;
  position: fixed;
`;

export const SpinnerContainer = styled.div<{ top?: string }>`
  position: absolute;
  top: ${(p) => p.top ?? ' 50%'};
  display: flex;
  flex-direction: row;
  margin: -60px 50% 0 50%;
  filter: drop-shadow(0px 0px 8px gray);
`;

export const LoaderLeft = styled.div`
  ${LoaderBaseStyles}
  margin: 0 -40px;
`;

export const LoaderRight = styled.div`
  ${LoaderBaseStyles}
`;

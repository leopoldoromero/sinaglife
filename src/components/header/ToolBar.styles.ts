'use client'
import styled from 'styled-components';

export const BasketBadge = styled.span`
  font-weight: 700;
  border-radius: 100%;
  background-color: #a78742;
  color: white;
  font-size: 0.7rem;
  position: absolute;
  top: 12px;
  right: -12px;
  width: 17px;
  height: 17px;
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) => p.theme.media.mobileXl`
        bottom: 20px;
        left: 25px;
        width: 20px;
        height: 20px;
    `}

  ${(p) => p.theme.media.tablet`
        bottom: 20px;
        left: 25px;
        width: 20px;
        height: 20px;
    `}
    ${(p) => p.theme.media.desktop`
        bottom: 20px;
        left: 25px;
        width: 20px;
        height: 20px;
    `}
`;

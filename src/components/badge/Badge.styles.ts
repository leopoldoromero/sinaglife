'use client'
import styled from 'styled-components';
import { BadgeShape } from './Badge';

const shapeValues = {
  circle: `50%`,
  square: `30%`,
  rounded: `0`,
};

export const BadgeContainer = styled.div<{ $bgColor?: string; $shape: BadgeShape }>`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  background-color: ${(p) => p.theme.color[p.$bgColor ?? 'earth']};
  flex-direction: column;
  height: 20px;
  width: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: ${(p) => shapeValues[p.$shape]};
`;

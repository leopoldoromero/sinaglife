'use client'
import styled from 'styled-components';

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  max-height: 40px;
  border-radius: 5px;
  border-color: ${(p) => p.theme.color.lightSilver};
  border-style: solid;
  border-width: 1px;
`;

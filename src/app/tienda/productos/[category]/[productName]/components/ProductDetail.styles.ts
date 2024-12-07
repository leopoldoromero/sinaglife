'use client'
import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem 1rem 0 1rem;
  ${(p) => p.theme.media.desktop`
        flex-direction: row;
        height: 100vh;
        max-height: 600px;
    `}
`;

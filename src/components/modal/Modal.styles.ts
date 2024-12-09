'use client'
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(p) => p.theme.zIndex.max};
`;

export const ModalContent = styled.div<{ $borderLess?: boolean; $hasShadow?: boolean }>`
  ${({ $borderLess }) => !$borderLess && `border: 0.5px solid rgb(204, 204, 204);`};
  ${({ $hasShadow }) => $hasShadow && `box-shadow: 0px 2px 12px 1px #c7c7c7;`};
  background-color: rgb(255, 254, 254);
  border-radius: 5px;
`;

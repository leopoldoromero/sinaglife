'use client'
import styled from 'styled-components';

export const SizePickeryWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  max-height: 40px;
  width: 100px;
  ${({$isOpen}) =>
    $isOpen
      ? `
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      `
      : `
      border-radius: 5px;
      `
  };
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-color: ${(p) => p.theme.color.lightSilver};
  border-style: solid;
  border-width: 1px;
`;

export const MenuContainer = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  top: 100%;
  left: -9px;
  width: 100px;
  padding: 0;
  z-index:  ${(p) => p.theme.zIndex.mid};
  background-color: ${(p) => p.theme.color.white};
  border: 1px solid ${(p) => p.theme.color.lightSilver};
  list-style: none;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const MenuItem = styled.li`
  padding: 0 0.5rem;
  cursor: pointer;
  width: 100%;
  max-height: 40px;
  & input {
    cursor: pointer;
  }
  &:hover {
    color: ${(p) => p.theme.color.white};
    background-color: ${(p) => p.theme.color.xLightSilver};
  }
`;

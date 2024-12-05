'use client';
import styled from 'styled-components';
import List from '@components/list/List';

const transitionSpeed = '0.3s';

export const UL = styled(List)<{ $isCollapse: boolean }>`
  height: ${(p) => (p.$isCollapse ? 'auto' : '0px')};
  overflow: visible;
  visibility: ${(p) => (p.$isCollapse ? 'visible' : 'hidden')};
  transition: height ${transitionSpeed} ease;
`;

export const DrawerHeader = styled.div``;

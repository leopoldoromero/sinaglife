'use client'
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const PrevButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
`;

export const NextButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
`;

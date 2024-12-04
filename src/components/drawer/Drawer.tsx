import React from 'react';
import { Wrapper } from './Drawer.styles';
import { CustomStylesProps, PaddingProps, Position } from '../../theme';

interface Props extends PaddingProps, CustomStylesProps {
  isOpen: boolean;
  children: React.ReactNode;
  position?: Position;
  width?: string;
  height?: string;
  bgColor?: string;
}

const Drawer: React.FC<Props> = ({
  isOpen,
  children,
  position = 'left',
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  bgColor,
}) => (
  <Wrapper
    $width={width}
    $height={height}
    $isOpen={isOpen}
    $position={position}
    $bgColor={bgColor}
    $pt={pt}
    $pr={pr}
    $pb={pb}
    $pl={pl}
  >
    {children}
  </Wrapper>
);

export default Drawer;

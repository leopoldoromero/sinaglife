import React from 'react';
import { BlockContainer } from './Block.styles';
import { BoxSizing, FlexProps, HTMLEvents, CustomStylesProps, Overflow, PositionType, SpacingProps } from '@theme/index';

export interface Props extends SpacingProps, FlexProps, CustomStylesProps, HTMLEvents<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  bgColor?: string;
  boxSizing?: BoxSizing;
  noMargin?: boolean;
  noPadding?: boolean;
  overflow?: Overflow;
  position?: PositionType;
}

const Block: React.FC<Props> = ({
    direction,
    display,
    justify,
    align,
    flexWrap,
    children,
    width,
    height,
    borderRadius,
    bgColor,
    boxSizing,
    noMargin,
    noPadding,
    overflow,
    position,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    customStyles,
    onClick,
}) => (
  <BlockContainer
    $justify={justify}
    $display={display}
    $direction={direction}
    $flexWrap={flexWrap}
    $align={align}
    $width={width}
    $height={height}
    $borderRadius={borderRadius}
    $bgColor={bgColor}
    $boxSizing={boxSizing}
    $noMargin={noMargin}
    $noPadding={noPadding}
    $overflow={overflow}
    $position={position}
    $mt={mt}
    $mr={mr}
    $mb={mb}
    $ml={ml}
    $pt={pt}
    $pr={pr}
    $pb={pb}
    $pl={pl}
    $customStyles={customStyles}
    onClick={onClick}
  >
    {children}
  </BlockContainer>
);

export default Block;

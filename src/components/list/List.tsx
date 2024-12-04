import React from 'react';
import { Wrapper } from './List.styles';
import { ColorKeys, FlexProps, CustomStylesProps, SpacingProps } from '../../theme';

export type ListType = 'ul' | 'ol';
export type ListStyle = 'circle' | 'square' | 'upper-roman' | 'lower-alpha' | 'none';

export interface Props extends SpacingProps, FlexProps, CustomStylesProps {
  children: React.ReactNode;
  as?: ListType;
  width?: string;
  height?: string;
  listStyle?: ListStyle;
  contentBox?: boolean;
  bgColor?: ColorKeys;
}

export const List: React.FC<Props> = ({
  children,
  as = 'ul',
  width,
  height,
  display,
  justify,
  align,
  direction = 'column',
  listStyle,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  customStyles,
  bgColor,
  contentBox,
}) => (
  <Wrapper 
  as={as} 
  $listStyle={listStyle ?? 'none'}
  $mt={mt}
  $mr={mr}
  $mb={mb}
  $ml={ml}
  $pt={pt}
  $pr={pr}
  $pb={pb}
  $pl={pl}
  $customStyles={customStyles}
  $contentBox={contentBox}
  $bgColor={bgColor}
  $width={width}
  $height={height}
  $justify={justify}
  $display={display}
  $direction={direction}
  $align={align}
  >
    {children}
  </Wrapper>
);

export default List;

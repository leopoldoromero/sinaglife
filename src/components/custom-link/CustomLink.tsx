import React from 'react';
import { Wrapper } from './CustomLink.styles';
import Link from 'next/link';
import {
  MarginProps,
  PaddingProps,
  CustomStylesProps,
  FontWeight,
  Size,
  ColorKeys,
  FlexProps,
} from '../../theme';

interface Props extends MarginProps, PaddingProps, FlexProps, CustomStylesProps {
  to: string;
  children: React.ReactNode;
  color?: ColorKeys;
  hoverColor?: ColorKeys;
  fontSize?: Size;
  fontFamily?: string;
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
  isUppercase?: boolean;
  weight?: FontWeight;
}

const CustomLink: React.FC<Props> = ({
    to,
    children,
    direction,
    display = 'flex',
    justify,
    align,
    flexWrap,
    fontSize = 'm',
    isUppercase = false,
    weight,
    color = 'default',
    fontFamily,
    hoverColor,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    customStyles,
}) => (
  <Wrapper 
  $justify={justify}
  $display={display}
  $direction={direction}
  $flexWrap={flexWrap}
  $align={align}
  $fontSize={fontSize}
  $isUppercase={isUppercase}
  $weight={weight}
  $color={color}
  $fontFamily={fontFamily}
  $hoverColor={hoverColor}
  $mt={mt}
  $mr={mr}
  $mb={mb}
  $ml={ml}
  $pt={pt}
  $pr={pr}
  $pb={pb}
  $pl={pl}
  $customStyles={customStyles}
  >
    <Link href={to}>{children}</Link>
  </Wrapper>
);

export default CustomLink;

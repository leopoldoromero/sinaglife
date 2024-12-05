import React from 'react';
import { TexContainer } from './Text.styles';
import { 
  Cursor, 
  CustomStylesProps, 
  MarginProps, 
  TextAlign, 
  ColorKeys, 
  FontWeight, 
  PaddingProps,
  FontSizeNames
} from '../../theme';

export interface Props extends MarginProps, PaddingProps, CustomStylesProps {
  children: React.ReactNode;
  fontSize?: FontSizeNames;
  isUppercase?: boolean;
  weight?: FontWeight;
  textAlign?: TextAlign;
  color?: ColorKeys;
  as?: string;
  textOverFlow?: string;
  overFlow?: string;
  whiteSpace?: string;
  fontFamily?: string;
  onClick?: () => void;
  cursor?: Cursor;
}

const Text: React.FC<Props> = ({
  children,
  fontSize = 'base',
  isUppercase = false,
  weight,
  textAlign = 'justify',
  color = 'default',
  as = 'span',
  textOverFlow,
  overFlow,
  whiteSpace,
  fontFamily,
  onClick,
  cursor,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => (
  <TexContainer
    as={as}
    $fontSize={fontSize}
    $isUppercase={isUppercase}
    $weight={weight}
    $textAlign={textAlign}
    $color={color}
    $textOverFlow={textOverFlow}
    $overFlow={overFlow}
    $whiteSpace={whiteSpace}
    $fontFamily={fontFamily}
    $cursor={cursor}
    $mt={mt}
    $mr={mr}
    $mb={mb}
    $ml={ml}
    $pt={pt}
    $pr={pr}
    $pb={pb}
    $pl={pl}
    onClick={onClick}
  >
    {children}
  </TexContainer>
);

export default Text;

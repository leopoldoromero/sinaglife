import React from 'react';
import { TexContainer } from './Text.styles';
import { 
  Cursor, 
  CustomStylesProps, 
  MarginProps, 
  Size, 
  TextAlign, 
  ColorKeys, 
  FontWeight 
} from '../../theme';

export interface Props extends MarginProps, CustomStylesProps {
  children: React.ReactNode;
  fontSize?: Size;
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
  fontSize = 'm',
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
    onClick={onClick}
  >
    {children}
  </TexContainer>
);

export default Text;

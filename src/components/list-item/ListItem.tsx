import React from 'react';
import { Wrapper } from './ListItem.styles';
import {
  AlignItems,
  ExtendedSize,
  HTMLEvents,
  JustifyContent,
  MarginProps,
  PaddingProps,
  TextAlign,
  FontWeight,
  CustomStylesProps,
} from '../../theme';

interface Props extends MarginProps, PaddingProps, CustomStylesProps, HTMLEvents<HTMLLIElement> {
  children: React.ReactNode;
  fontSize?: ExtendedSize;
  isUppercase?: boolean;
  weight?: FontWeight;
  textAlign?: TextAlign;
  isFlex?: boolean;
  color?: string;
  justify?: JustifyContent;
  align?: AlignItems;
  contentBox?: boolean;
}

export const ListItem: React.FC<Props> = ({
    children,
    fontSize = 'm',
    isUppercase = false,
    weight,
    textAlign = 'justify',
    color = 'default',
    contentBox,
    isFlex,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    customStyles,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onClick,
}) => (
    <Wrapper 
    $fontSize={fontSize}
    $isUppercase={isUppercase}
    $weight={weight}
    $textAlign={textAlign}
    $color={color}
    $contentBox={contentBox}
    $isFlex={isFlex}
    $mt={mt}
    $mr={mr}
    $mb={mb}
    $ml={ml}
    $pt={pt}
    $pr={pr}
    $pb={pb}
    $pl={pl}
    $customStyles={customStyles}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onMouseOver={onMouseOver}
    onClick={onClick}
    >
    {children}
    </Wrapper>
);

export default ListItem;

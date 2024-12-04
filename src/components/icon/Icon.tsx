import * as React from 'react';
import { Container } from './Icon.styles';
import content from './icon-types';
import { Cursor, MarginProps, ColorKeys, CustomStylesProps } from '../../theme';

export type IconSize = 'xs' | 's' | 'm' | 'l';
export type IconTypes =
  | 'account'
  | 'burguer'
  | 'mail'
  | 'messages'
  | 'notifications'
  | 'search'
  | 'upArrow'
  | 'downArrow'
  | 'rightArrow'
  | 'leftArrow'
  | 'closeMenu'
  | 'checkIcon'
  | 'closeMenuArrow'
  | 'sortUpArrow'
  | 'sortDownArrow'
  | 'downFilledArrow'
  | 'elipsis'
  | 'eye'
  | 'eyeOff'
  | 'closeX'
  | 'star'
  | 'halfStar'
  | 'om'
  | 'blog'
  | 'store'
  | 'hands'
  | 'relax'
  | 'soldOut'
  | 'skinCare'
  | 'add'
  | 'remove'
  | 'delete'
  | 'circle'
  | 'basket'
  | 'menuBars'
  | 'marker'
  | 'facebook'
  | 'instagram'
  | 'whatsapp'
  | 'google'
  | 'twitter';

export interface Props extends MarginProps, CustomStylesProps {
  icon: IconTypes;
  size: IconSize;
  color: ColorKeys;
  hoverColor?: ColorKeys;
  isSortable?: boolean;
  hoverBgColor?: ColorKeys;
  activeColor?: ColorKeys;
  cursor?: Cursor;
}

export type IconContainerProps = Omit<Props, 'icon'>;

const Icon: React.FC<Props> = ({
  icon,
  size,
  color,
  hoverColor,
  hoverBgColor,
  activeColor,
  cursor,
  isSortable,
  mt,
  mr,
  mb,
  ml,
  customStyles,
}) => (
  <Container
    $size={size}
    $color={color}
    $hoverColor={hoverColor}
    $hoverBgColor={hoverBgColor}
    $activeColor={activeColor}
    $cursor={cursor}
    $isSortable={isSortable}
    data-testid="icon_test_id"
    $mt={mt}
    $mr={mr}
    $mb={mb}
    $ml={ml}
    $customStyles={customStyles}
  >
    {content[icon]}
  </Container>
);

export default Icon;

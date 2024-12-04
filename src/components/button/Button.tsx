import React from 'react';
import { ButtonWrapper } from './Button.styles';
import Icon from '@components/icon/Icon';
import { 
  CustomStylesProps, 
  Shape, 
  ColorKeys, 
  MarginProps, 
  PaddingProps, 
  Size 
} from '../../theme';
import { IconSize, IconTypes } from '@components/icon/Icon';

type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonWrapperProps = Omit<Props, 'onClick' | 'type'>;
export type ButtonVariant = 'text' | 'outlined' | 'default' | 'contained' | 'icon';
type ButtonPosition = 'start' | 'end';
export type ButtonColor = 'primary' | 'secondary';

export interface Props extends MarginProps, PaddingProps, CustomStylesProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  id?: string;
  size?: Size;
  variant: ButtonVariant;
  color?: ColorKeys;
  isUppercase?: boolean;
  shape?: Shape;
  customHover?: string;
  icon?: IconTypes;
  disabled?: boolean;
  text?: string;
  position?: ButtonPosition;
  iconColor?: ColorKeys;
  iconSize?: IconSize;
  fullWidth?: boolean;
  isSortableIcon?: boolean;
  iconCustomStyles?: CustomStylesProps;
  fullHeight?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  type = 'button',
  id = 'button_id',
  size = 'm',
  variant,
  color,
  isUppercase = false,
  shape,
  customHover,
  icon,
  disabled,
  text,
  position = 'end',
  iconColor = 'black',
  iconSize = 's',
  fullWidth,
  fullHeight,
  isSortableIcon,
  iconCustomStyles,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => (
  <ButtonWrapper
    type={type}
    id={id}
    $size={size}
    $variant={variant}
    $color={color}
    $isUppercase={isUppercase}
    $shape={shape}
    $customHover={customHover}
    $disabled={disabled}
    $fullWidth={fullWidth}
    $fullHeight={fullHeight}
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
    {position === 'start' ? (
      <>
        {text && text}
        {icon && (
          <Icon
            ml={text ? 's' : undefined}
            isSortable={isSortableIcon}
            customStyles={iconCustomStyles?.customStyles}
            color={iconColor}
            icon={icon}
            size={iconSize}
          />
        )}
      </>
    ) : (
      <>
        {icon && (
          <Icon
            mr={text ? 's' : undefined}
            isSortable={isSortableIcon}
            customStyles={iconCustomStyles?.customStyles}
            color={iconColor}
            icon={icon}
            size={iconSize}
          />
        )}
        {text && text}
      </>
    )}
  </ButtonWrapper>
);

export default Button;

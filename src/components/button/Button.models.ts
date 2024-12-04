/* eslint-disable no-unused-vars */
import React from 'react';
import { CustomStylesProps, Shape, CustomStylesProps, ColorKeys } from '../../theme';
import { MarginProps, PaddingProps, Size } from '../../theme';
import { IconSize, IconTypes } from '@components/icon/Icon';

type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonWrapperProps = Omit<ButtonProps, 'onClick' | 'type'>;
export type ButtonVariant = 'text' | 'outlined' | 'default' | 'contained' | 'icon';
type ButtonPosition = 'start' | 'end';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps extends MarginProps, PaddingProps, CustomStylesProps {
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

'use client'

import React from 'react';
import { InputBaseProps, Size } from '../../theme';
import { InputContainer, Wrapper } from './Input.styles';

export type IconPlacement = 'start' | 'end';
export type InputShape = 'rounded' | 'square';
export type InputVariant = 'outlined' | 'standard' | 'filled' | 'borderless';
export interface InputProps extends InputBaseProps {
  type?: string;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  variant?: InputVariant;
  inputSize?: Size;
  min?: number;
  max?: number;
  focusable?: boolean;
  width?: string;
}

const Input: React.FC<InputProps> = (props) => (
  <Wrapper inputSize={props?.inputSize} type={props.type ?? 'text'} focusable={props.focusable ?? true} variant={props.variant} width={props.width}>
    <InputContainer {...props}  autoComplete={props.autoComplete ?? 'on'}/>
  </Wrapper>
);

export default React.memo(Input);

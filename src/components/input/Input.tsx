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

const Input: React.FC<InputProps> = ({
  type,
  autoComplete,
  placeholder,
  variant,
  inputSize,
  min,
  max,
  focusable,
  width,
  value,
  onChange,
  onBlur,
  name,
  readonly,
}) => (
  <Wrapper 
  $inputSize={inputSize} 
  $type={type ?? 'text'} 
  $focusable={focusable ?? true} 
  $variant={variant} 
  $width={width}>
    <InputContainer 
    name={name}
    autoComplete={autoComplete ?? 'on'}
    value={value}
    placeholder={placeholder}
    min={min}
    max={max}
    onChange={onChange}
    onBlur={onBlur}
    readOnly={readonly}
    />
  </Wrapper>
);

export default React.memo(Input);

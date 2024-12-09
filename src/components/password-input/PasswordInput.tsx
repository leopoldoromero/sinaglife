'use client';
import { useState } from 'react';
import { Button, Input } from '..';
import { InputProps } from '../input/Input';
import { Wrapper } from './PasswordInput.styles';

type Props = Pick<InputProps, 'onChange' | 'name' | 'value' | 'id'> & {
  btn_id?: string;
};

const PasswordInput: React.FC<Props> = ({ onChange, name, value, btn_id, id }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Wrapper>
      <Input
        onChange={onChange}
        type={showPassword ? 'text' : 'password'}
        name={name}
        value={value}
        focusable={false}
        autoComplete='off'
        id={id}
      />
      <Button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        variant="icon"
        iconColor="lightSilver"
        iconSize="s"
        icon={showPassword ? 'eyeOff' : 'eye'}
        id={btn_id}
      />
    </Wrapper>
  );
};

export default PasswordInput;

import { IconTypes } from "@components/icon/Icon";
import Input, { IconPlacement, InputProps, InputShape } from "./Input";
import { ColorKeys } from "@theme/colors";
import { InputWithIconWrapper } from "./Input.styles";
import Button from "@components/button/Button";

type Props = Pick<InputProps, 'onChange' | 'name' | 'value' | 'placeholder' | 'type' | 'onBlur'> & {
  btn_id?: string;
  iconPlacement?: IconPlacement;
  icon: IconTypes;
  shape?: InputShape;
  bgColor?: ColorKeys;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputWithIcon: React.FC<Props> = ({
  onChange,
  name,
  value,
  btn_id,
  icon,
  type,
  placeholder,
  shape,
  iconPlacement,
  bgColor,
  onClick,
}) => (
  <InputWithIconWrapper iconPlacement={iconPlacement ?? 'end'} shape={shape ?? 'rounded'} bgColor={bgColor}>
    <Input
      width="100%"
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      focusable={false}
      placeholder={placeholder}
    />
    <Button
      onClick={onClick}
      type="button"
      variant="icon"
      iconColor="lightSilver"
      iconSize="s"
      icon={icon}
      id={btn_id}
    />
  </InputWithIconWrapper>
);

export default InputWithIcon;

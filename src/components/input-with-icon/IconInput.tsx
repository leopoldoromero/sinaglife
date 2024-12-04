// import { ColorKeys } from '../../theme';  
// import { Wrapper } from './IconInput.styles';
// import Input, { InputProps } from '@components/input/Input';
// import { IconTypes } from '@components/icon/Icon';
// import Button from '@components/button/Button';

// export type IconPlacement = 'start' | 'end';
// export type InputShape = 'rounded' | 'square';
// type Props = Pick<InputProps, 'onChange' | 'name' | 'value' | 'placeholder' | 'type' | 'onBlur'> & {
//   btn_id?: string;
//   iconPlacement?: IconPlacement;
//   icon: IconTypes;
//   shape?: InputShape;
//   bgColor?: ColorKeys;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

// const IconInput: React.FC<Props> = ({
//   onChange,
//   name,
//   value,
//   btn_id,
//   icon,
//   type,
//   placeholder,
//   shape,
//   iconPlacement,
//   bgColor,
//   onClick,
// }) => (
//   <Wrapper iconPlacement={iconPlacement ?? 'end'} shape={shape ?? 'rounded'} bgColor={bgColor}>
//     <Input
//       width="100%"
//       onChange={onChange}
//       type={type}
//       name={name}
//       value={value}
//       focusable={false}
//       placeholder={placeholder}
//     />
//     <Button
//       onClick={onClick}
//       type="button"
//       variant="icon"
//       iconColor="lightSilver"
//       iconSize="s"
//       icon={icon}
//       id={btn_id}
//     />
//   </Wrapper>
// );

// export default IconInput;
export {}
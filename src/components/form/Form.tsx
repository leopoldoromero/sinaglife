import { SpacingProps, FlexProps, CustomStylesProps } from '../../theme';
import { StyledForm } from './Form.styles';

interface Props extends SpacingProps, FlexProps, CustomStylesProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const Form: React.FC<Props> = ({
  children,
  width,
  height,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
  customStyles,
}) => (
  <StyledForm 
  $width={width}
  $height={height}
  $mt={mt}
  $mr={mr}
  $mb={mb}
  $ml={ml}
  $pt={pt}
  $pr={pr}
  $pb={pb}
  $pl={pl}
  $customStyles={customStyles}
  >
    {children}
  </StyledForm>
);

export default Form;

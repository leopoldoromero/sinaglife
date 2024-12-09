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
  display,
  direction,
  justify,
  align,
  flexWrap,
  onSubmit,
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
  $display={display}
  $direction={direction}
  $justify={justify}
  $align={align}
  $flexWrap={flexWrap}
  $mt={mt}
  $mr={mr}
  $mb={mb}
  $ml={ml}
  $pt={pt}
  $pr={pr}
  $pb={pb}
  $pl={pl}
  $customStyles={customStyles}
  onSubmit={onSubmit}
  >
    {children}
  </StyledForm>
);

export default Form;

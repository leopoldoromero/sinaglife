import { SpacingProps } from '@theme/sizing';
import { StyledContainer } from './FormCard.styles';
import { FlexProps } from '@theme/flex';
import { CustomStylesProps } from '@theme/models';

interface Props extends SpacingProps, FlexProps, CustomStylesProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const FormCard: React.FC<Props> = ({
    direction = 'column',
    display = 'flex',
    justify,
    align,
    flexWrap,
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
  <StyledContainer 
    $justify={justify}
    $display={display}
    $direction={direction}
    $flexWrap={flexWrap}
    $align={align}
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
  </StyledContainer>
);

export default FormCard;

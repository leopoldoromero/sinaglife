import { SpacingProps, FlexProps, CustomStylesProps } from '../../theme';
import { StyledBlock } from './Form.styles';

interface Props extends SpacingProps, FlexProps, CustomStylesProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export type StyledFormProps = Omit<Props, 'children'>;

const Form: React.FC<Props> = (props) => (
  <StyledBlock as="form" {...props}>
    {props.children}
  </StyledBlock>
);

export default Form;

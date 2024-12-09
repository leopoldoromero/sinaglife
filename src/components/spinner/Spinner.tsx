import { LoaderLeft, LoaderRight, SpinnerContainer } from './Spinner.styles';

interface Props {
  top?: string;
}

const Spinner: React.FC<Props> = ({ top }) => (
  <SpinnerContainer $top={top} data-testid="app-spinner">
    <LoaderLeft />
    <LoaderRight />
  </SpinnerContainer>
);

export default Spinner;

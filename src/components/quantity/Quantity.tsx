import Button from '@components/button/Button';
import { QuantityWrapper } from './Quantity.styles';
import Input from '@components/input/Input';

interface QuantityProps {
  quantity: number;
  handlerChangeQuantity: (type: 'add' | 'remove') => void;
}

const Quantity: React.FC<QuantityProps> = (props) => {
  return (
    <QuantityWrapper>
      <Button
        size="s"
        variant="icon"
        icon="remove"
        iconSize="xs"
        onClick={() => props.handlerChangeQuantity('remove')}
      />
      <Input
        inputSize="s"
        width="40px"
        type="text"
        onChange={() => null}
        name="quantity"
        value={props.quantity}
        focusable={false}
        readonly
      />
      <Button size="s" variant="icon" icon="add" iconSize="xs" onClick={() => props.handlerChangeQuantity('add')} />
    </QuantityWrapper>
  );
};

export default Quantity;

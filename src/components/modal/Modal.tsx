
import Backdrop from '@components/backdrop/Backdrop';
import { ModalContent, ModalWrapper } from './Modal.styles';
import Block from '@components/block/Block';
import Button from '@components/button/Button';

export interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface Props extends ModalBaseProps {
  children: React.ReactNode;
  hasBackdrop?: boolean;
  hasButton?: boolean;
  borderLess?: boolean;
  hasShadow?: boolean;
}


const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  hasBackdrop = true,
  borderLess,
  hasShadow,
  hasButton = false,
  children,
}) => (
  <>
    <Backdrop isVisible={hasBackdrop && isOpen} hasButton onClose={onClose} />
    {isOpen && (
      <ModalWrapper>
        <ModalContent $borderLess={borderLess} $hasShadow={hasShadow}>
          {hasButton && (
            <Block display="flex" justify="flex-end">
              <Button
                customStyles={{ minWidth: '0', padding: '0' }}
                variant="icon"
                icon="closeX"
                onClick={onClose}
                iconColor="earth"
                iconSize="m"
              />
            </Block>
          )}
          {children}
        </ModalContent>
      </ModalWrapper>
    )}
  </>
);

export default Modal;

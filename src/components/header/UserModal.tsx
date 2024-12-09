'use client';
import { usePathname } from 'next/navigation';
import Block from "@components/block/Block";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import Text from "@components/text/Text";
import { User } from "@modules/user/domain/User";
import { routes } from "@shared/infrastructure/routes";
import { navigate } from 'actions/navigate.actions';


interface Props {
  isOpen: boolean;
  onClose: () => void;
  user?: User;
  singOut: () => void;
}

const UserModal: React.FC<Props> = function ({ isOpen, onClose, user, singOut }) {
  const pathname = usePathname();
  const goTo = (pathname: string, queryParams?: { [key: string]: string }) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    navigate(url);

    onClose();
  };
 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!user?.isConfirmed ? (
        <Block
          pt="l"
          pr="m"
          pb="l"
          pl="m"
          display="flex"
          direction="column"
          height="220px"
          align="center"
          justify="space-between"
          customStyles={{ minWidth: '250px', maxWidth: '440px' }}
        >
          <Button
            onClick={() => goTo(routes.LOGIN, { from: pathname })}
            text="Entrar"
            variant="default"
            fullWidth
            color="xLightSilver"
            size="m"
            id={`user_modal_come_in_button`}
          />
          <Text>Aun no tienes cuenta?</Text>
          <Button
            onClick={() => goTo(routes.REGISTER)}
            text="Registrarse"
            variant="default"
            fullWidth
            color="xLightSilver"
            size="m"
            id={`user_modal_sign_in_button`}
          />
          <Button
            onClick={() => goTo(routes.DROP_OUT)}
            text="Darme de baja"
            variant="outlined"
            fullWidth
            color="lightSilver"
            size="m"
            id={`user_modal_drop_out_button`}
          />
        </Block>
      ) : (
        <Block
          pt="l"
          pr="m"
          pb="l"
          pl="m"
          display="flex"
          direction="column"
          width="250px"
          height="220px"
          align="center"
          justify="space-between"
        >
          <Button
            onClick={() => goTo(routes.CHANGE_PASSWORD)}
            text="Cambiar contraseña"
            variant="default"
            fullWidth
            color="xLightSilver"
            size="m"
            id={`user_modal_change_password_button`}
          />
          <Button
            onClick={() => {
              singOut();
              goTo('/');
            }}
            text="Salir"
            variant="default"
            fullWidth
            color="xLightSilver"
            size="m"
            id={`user_modal_come_out_button`}
          />
          <Button
            onClick={() => goTo(routes.DROP_OUT)}
            text="Darme de baja"
            variant="outlined"
            fullWidth
            color="lightSilver"
            size="m"
            id={`user_modal_drop_out_button`}
          />
        </Block>
      )}
    </Modal>
  );
};

export default UserModal;

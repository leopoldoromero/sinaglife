'use client';
import { Block, Button, Modal, Text } from '..';
import { Img } from './CookiesConsentModal.styles';
import comet from '../../../public/assets/images/footer/comet.webp';
import { useEffect, useState } from 'react';
import { CookieHandlerHelper } from '@shared/helpers';

const CookiesConsentModal = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const acceptedCookies = CookieHandlerHelper.get('cookies-consent') === 'true';

  useEffect(() => {
    if (!acceptedCookies) {
      setIsVisibleModal(true);
    }
  }, [acceptedCookies]);

  const onClose = (value: boolean) => {
    CookieHandlerHelper.set('', String(value))
    setIsVisibleModal(false);
  }


  return (
    <Modal isOpen={isVisibleModal} onClose={() => onClose(false)}>
      <Block
        display="flex"
        direction="column"
        pt="s"
        pr="l"
        pb="s"
        pl="l"
        customStyles={{ minWidth: '340px', maxWidth: '440px' }}
      >
        <Block display="flex" justify="center" align="center">
          <Img src={comet.src} alt="cometa-sinaglife-accesorios" />
          <Text as="h2" fontSize="tiny" fontFamily="title" color="earth">
            Sinaglife
          </Text>
        </Block>
        <Block display="flex" pb="m">
          <Text as="p">
            Este sitio web utiliza las cookies necesarias para su funcionamiento, activando funciones básicas como la
            navegación y acceso a áreas seguras.
          </Text>
        </Block>
        <Block display="flex" justify="space-around" align="center" pt="s" pb="s">
          <Button
            onClick={() => onClose(true)}
            text="Aceptar"
            variant="default"
            color="xLightSilver"
            size="m"
            id={`cookies_consent_modal_acept_button`}
          />
          <Button
            onClick={() => onClose(false)}
            text="Declinar"
            variant="default"
            color="xLightSilver"
            size="m"
            id={`cookies_consent_modal_decline_button`}
          />
        </Block>
      </Block>
    </Modal>
  );
}

export default CookiesConsentModal;

'use client'
import { useState } from 'react';
import recicle from '../../../public/assets/images/reciclaje.png';
import { FooterContainer, FooterLinksContainer, LogoImg } from './Footer.styles';
import { Block, Button, CustomLink, List, ListItem, Text } from '..';
import { links, routes } from '@shared/infrastructure/routes';
import { IconTypes } from '@components/icon/Icon';

const Footer = function () {
  // const { t } = useTranslation('footer');
  const t = (key: string) => {
    const dicc: {[key in string]: string} = {
      paragraph: 'En Sinag estamos comprometidos en cuidar el planeta tierra, el embalaje que acompaña nuestras piezas es 100% reciclado, respetando el medio ambiente.',
    }
    return dicc[key] || ''
  }

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  const helpSectionLinks = [
    {
      text: 'Conócenos',
      to: routes.KNOW_US,
    },
    {
      text: 'Guia de tallas',
      to: routes.SIZE_GUIDES,
    },
    {
      text: 'Preguntas Frecuentes',
      to: routes.FAQ,
    },
    {
      text: 'Tramitación de Envíos',
      to: routes.SHIPPING_PROCESSING,
    },
  ];

  const infoSectionLinks = [
    {
      text: 'Política de Privacidad',
      to: routes.PRIVACY_POLICY,
    },
    {
      text: 'Política de devoluciones',
      to: routes.RETURN_POLICY,
    },
    {
      text: 'Política de cookies',
      to: routes.COOKIES_POLICY,
    },
  ];

  const socialSectionLinks: Array<{ to: string; icon: IconTypes }> = [
    {
      to: links.WHATSAPP,
      icon: 'whatsapp',
    },
    {
      to: links.EMAIL,
      icon: 'mail',
    },
    {
      to: links.FACEBOOK,
      icon: 'facebook',
    },
    {
      to: links.INSTAGRAM,
      icon: 'instagram',
    },
    {
      to: links.GOOGLE,
      icon: 'marker',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>();
  const hoverColorHandler = (x: number) => {
    setSelectedIndex(x);
  };
  return (
    <FooterContainer>
      <Block width="100%" display="flex" mb="m" ml="l">
        <Block display="flex" width="90%" customStyles={{ maxWidth: '450px', margin: '1rem 0' }}>
          <Block display="flex" align="center" justify="flex-start">
            <LogoImg src={recicle} width={recicle.width} height={recicle.height} alt="sinag-recicle" />
          </Block>
          <Block width="100%" display="flex" align="center" ml="m">
            <Text as="p" fontSize="medium" weight="medium" color="black" fontFamily="base">
              {t('paragraph') ?? ''}
            </Text>
          </Block>
        </Block>
      </Block>
      <FooterLinksContainer>
        <Block width="100%" display="flex" justify="center" mb="m">
          <Block display="flex" direction="column" align="flex-start" width="100%">
            <Block display="flex" width="100%" mb="m">
              <Text color="black" as="h4" fontSize="tiny" weight="bold" fontFamily="title" textAlign="center" isUppercase>
                Ayuda
              </Text>
            </Block>
            <List>
              {helpSectionLinks.map((el, i) => (
                <ListItem key={`${el.to}_${i}`}>
                  <CustomLink hoverColor="lightSilver" onClick={goTop} to={el.to} fontSize="medium" mb="m" fontFamily="base">
                    {el.text}
                  </CustomLink>
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block width="100%" display="flex" direction="column" align="flex-start" mb="m">
          <Block display="flex" width="100%" mb="m">
            <Text color="black" as="h4" fontSize="tiny" weight="bold" fontFamily="title" textAlign="center" isUppercase>
              Información
            </Text>
          </Block>
          <List>
            {infoSectionLinks.map((el, i) => (
              <ListItem key={`${el.to}_${i}`}>
                <CustomLink hoverColor="lightSilver" onClick={goTop} to={el.to} fontSize="medium" mb="m" fontFamily="base">
                  {el.text}
                </CustomLink>
              </ListItem>
            ))}
          </List>
        </Block>
        <Block width="100%" display="flex" justify="center" mb="m">
          <Block display="flex" direction="column" align="flex-start" justify="flex-start" width="100%">
            <Block display="flex" width="100%" mb="m">
              <Text color="black" as="h4" fontSize="tiny" fontFamily="title" weight="bold" textAlign="center" isUppercase>
                Social
              </Text>
            </Block>
            <Block display="flex" justify="space-between" width="100%" customStyles={{ maxWidth: '170px' }}>
              {socialSectionLinks.map((el, i) => (
                <CustomLink
                  display="flex"
                  fontSize="small"
                  onMouseLeave={() => setSelectedIndex(null)}
                  onMouseEnter={() => hoverColorHandler(i)}
                  key={`${el.to}_${i}`}
                  hoverColor={selectedIndex === i ? `darkSilver` : `black`}
                  to={el.to}
                >
                  <Button
                    onClick={() => null}
                    type="button"
                    variant="icon"
                    iconSize="s"
                    icon={el.icon}
                    iconColor={selectedIndex === i ? `darkSilver` : `black`}
                    id={`footer_social_links_${el.icon}_button`}
                  />
                </CustomLink>
              ))}
            </Block>
          </Block>
        </Block>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;

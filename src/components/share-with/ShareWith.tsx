import React from 'react';
import { Block, Button, CustomLink } from '..';
import links from './links';
import { IconSize } from '@components/icon/Icon';
import { Shape } from '@theme/models';

export interface ShareWithProps {
  url: string;
  size?: IconSize;
  shape?: Shape;
  message?: string;
  icon: ShareIcons;
}

export type ShareIcons = 'facebook' | 'twitter' | 'whatsapp' | 'google' | 'mail';


const ShareWith: React.FC<ShareWithProps> = ({ url, icon, message, shape = 'circle' }) => {
  const renderButton = () => {
    switch (icon) {
      case 'facebook':
        return (
          <CustomLink to={links.facebook(url)}>
            <Button variant="icon" icon="facebook" shape={shape} iconColor="facebook" />
          </CustomLink>
        );
      case 'twitter':
        return (
          <CustomLink to={links.twitter(url, message)}>
            <Button variant="icon" icon="twitter" shape={shape} iconColor="twitter" />
          </CustomLink>
        );
      case 'whatsapp':
        return (
          <CustomLink to={links.whatsapp(url, message)}>
            <Button variant="icon" icon="whatsapp" shape={shape} iconColor="whatsapp" />
          </CustomLink>
        );
      case 'google':
        return (
          <CustomLink to={links.google(url)}>
            <Button variant="icon" icon="google" shape={shape} />
          </CustomLink>
        );
      case 'mail':
        return (
          <CustomLink to={links.mail(url)}>
            <Button variant="icon" icon="mail" shape={shape} />
          </CustomLink>
        );
    }
  };
  return <Block>{renderButton()}</Block>;
};

export default ShareWith;

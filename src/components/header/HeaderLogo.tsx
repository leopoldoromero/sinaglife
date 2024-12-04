import { useEffect, useState } from 'react';
import Logo from '../../../public/assets/images/logo-sinag-2.0.webp';
import { ToolbarLogo, ToolbarLogoContainer } from './HeaderLogo.styles';

const HeaderLogo = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) {
          return true;
        }

        if (isShrunk && document.body.scrollTop <= 0 && document.documentElement.scrollTop <= 0) {
          return false;
        }
        return isShrunk;
      });
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <ToolbarLogoContainer $isShrunk={isShrunk} href="/">
      <ToolbarLogo $isShrunk={isShrunk} src={Logo} alt="SinagVibes&Designs" />
    </ToolbarLogoContainer>
  );
};

export default HeaderLogo;

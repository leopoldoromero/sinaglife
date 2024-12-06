import React from 'react';
import AnilloMovil from '../../../public/assets/images/sizes-guide/anklets-mobile.webp';
import ColgantesMovil from '../../../public/assets/images/sizes-guide/pendants-mobile.webp';
import MunecahMovil from '../../../public/assets/images/sizes-guide/man-bracelets-mobile.webp';
import MunecamMovil from '../../../public/assets/images/sizes-guide/woman-bracelets-mobile.webp';
import MunecaMovil from '../../../public/assets/images/sizes-guide/kids-bracelets-mobile.webp';
import TobillerasMovil from '../../../public/assets/images/sizes-guide/anklets-mobile.webp';
import Image from 'next/image';
import { Block } from '@components/index';

export default function SizesGuide() {
    const movilImages = [ColgantesMovil, AnilloMovil, MunecahMovil, MunecamMovil, MunecaMovil, TobillerasMovil];
    return (
        <Block>
        {movilImages.map((image, index) => (
            <Image key={index} alt={`Tallas${index}`} src={image?.src} width={image.width} height={image.height} style={{ width: '100%', height: 'auto', margin: '3%' }} />
        ))}
        </Block>
    );
}


import React, { memo } from 'react';

import { MosaicCardContainer, MosaicContainer } from './Mosaic.styles';
import stones_image from '../../../../public/assets/images/stones_background.webp';
import { Product } from '@modules/product/domain/Product';
import ProductCard from '../product-card/ProductCard';

export interface Props {
  data: Array<Product>;
}

const Mosaic: React.FC<Props> = ({ data }) => (
  <MosaicContainer $url={stones_image.src}>
    {data?.slice(0, 8).map((product, i) => (
      <MosaicCardContainer key={i}>
        <ProductCard key={i} product={product} />
      </MosaicCardContainer>
    ))}
  </MosaicContainer>
);

export default memo(Mosaic);

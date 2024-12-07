/* eslint-disable @next/next/no-img-element */
'use client'
import useCart from '@hooks/useCart';
import { Product } from '@modules/product/domain/Product';
import { routes } from '@shared/infrastructure/routes';
import React from 'react';
import { ProductCardContainer, StyledLink } from './ProductCard.styles';
import { Block, Button, Text } from '@components/index';
import { NumberHelper, StringHelper } from '@shared/helpers';
import { CartUpdateAction } from '@modules/cart/domain/CartRepository';

export interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { images, name, price } = product;
  const { src } = images[0];
  const { alt } = images[0];
  const QUANTITY = 1;
  const { updateCart } = useCart();
  // const { t } = useTranslation('home');
  const t = (key: string) => {
    const dicc: {[key in string]: string} = {
      'mosaic.product.add_to_cart_btn': 'Agregar al carrito',
    }
    return dicc[key] || ''
  }

  return (
    <ProductCardContainer display="flex" direction="column" align="center" justify="space-between" bgColor="white">
      <Block width="100%" height="60%" pt="s" pr="s" pb="s" pl="s">
        <StyledLink href={`${routes.STORE_PRODUCTS}/${product?.categories[0]}/${StringHelper.formateEmptySpacesToUrl(name)}`}>
          <img src={src} alt={alt} width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
        </StyledLink>
      </Block>
      <Block width="100%" height="28%" pt="s" pr="s" pb="s" pl="s" display="flex" direction="column">
        <Text
          customStyles={{ maxHeight: '35px' }}
          color="black"
          fontFamily="base"
          textAlign="center"
          mb="s"
          fontSize="small"
        >
          {name}
        </Text>
        <Text color="black" fontFamily="base" weight="semiBold" fontSize="small" textAlign="center" mb="s">
          {NumberHelper.formatAmount(price, 2)}€
        </Text>
      </Block>
      <Block width="100%">
        <Button
          onClick={() => updateCart({product, qty: QUANTITY, action: CartUpdateAction.ADD})}
          text={t('mosaic.product.add_to_cart_btn') ?? 'Agregar al carrito'}
          variant="default"
          fullWidth
          fullHeight
          color="xLightSilver"
          size="m"
          id={`mosaic_product_card_add_to_cart_${product?.id}`}
        />
      </Block>
    </ProductCardContainer>
  );
};

export default ProductCard;

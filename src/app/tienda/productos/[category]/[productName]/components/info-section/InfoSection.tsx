'use client'
import { Block, Button, CustomLink, Quantity, SizePicker, Text, Tooltip } from '@components/index';
import useCart from '@hooks/useCart';
import { Product } from '@modules/product/domain/Product';
import { NumberHelper, StringHelper } from '@shared/helpers';
import { routes } from '@shared/infrastructure/routes';
import { useState } from 'react';
import { BottomContainer, InfoSectionContainer, LogoImage, MiddleContainer } from './InfoSection.styles';
import visa from '../../../../../../../../public/assets/images/visa.svg';
import mastercard from '../../../../../../../../public/assets/images/mastercard.svg';
import paypal from '../../../../../../../../public/assets/images/paypal.svg';
import { environment } from '@shared/constants';
import ShareWith, { ShareIcons } from '@components/share-with/ShareWith';
import { CartUpdateAction } from '@modules/cart/domain/CartRepository';

interface Props {
  product: Product;
  currentPath: string
}

const InfoSection: React.FC<Props> = ({ product, currentPath }) => {
  const { updateCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState(product?.sizes[0] ?? '');
  const title = product?.name;
  const description = product?.description;
  const price = product?.price;
  const categories = product?.categories;
  const productSizes = product?.sizes;
  const MAX = product?.stock;
  const handlerChangeQuantity = (type: 'add' | 'remove') => {
    if (type === 'add' && quantity < MAX) {
      setQuantity((lastVal) => lastVal + 1);
      return;
    }
    if (type === 'remove' && quantity > 1) {
      setQuantity((lastVal) => lastVal - 1);
      return;
    }
  };

  const handleSelectSize = (size: string) => {
    setSize(size);
  }
  // TODO: change select condition to opposite when test are ready.
  const isMobile = window.innerWidth <= 800;
  const isVisibleTooltip = quantity >= MAX;
  const shareIcons: Array<ShareIcons> = ['facebook', 'twitter', 'whatsapp'];
  const filteredCategories = categories.filter((item) => item !== 'tienda' && item !== 'mosaico');
  const categoriesToLink = filteredCategories?.length > 3 ? filteredCategories.slice(0, 3) : filteredCategories;
  const categoriesLinks = categoriesToLink.map((category, idx) => (
    <CustomLink
      key={idx}
      fontSize="large"
      hoverColor="darkSilver"
      weight="medium"
      to={`${routes.STORE_PRODUCTS}/${StringHelper.formateEmptySpacesToUrl(category)}`}
      mr="m">
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </CustomLink>
  ));

  return (
    <InfoSectionContainer>
      <Block width="100%" display="flex" justify="space-between">
        <Block display="flex">{categoriesLinks}</Block>
        <Block display="flex" align="center" justify="flex-end">
          {shareIcons.map((icon, i) => (
            <Block mr="m" key={i}>
              <ShareWith size="xs" icon={icon} url={`${environment.ORIGIN}${currentPath}`} />
            </Block>
          ))}
        </Block>
      </Block>
      <Block mt="s">
        <Text as="h2" fontSize="tiny" fontFamily="base" isUppercase mb="m" weight="medium">
          {title}
        </Text>
        <Text as="p" fontSize="large" fontFamily="base">
          {description}
        </Text>
      </Block>
      <MiddleContainer>
        <Block width="100%" display="flex" justify="space-between" align="center" mb="m">
          <Text as="h3" weight="semiBold">
            {NumberHelper.formatAmount(price, 2)}€
          </Text>
          <Block>
            {isVisibleTooltip ? (
              <Tooltip content="No disponemos de más stock para este producto" position={isMobile ? 'top' : 'right'}>
                <Quantity quantity={quantity} handlerChangeQuantity={handlerChangeQuantity} />
              </Tooltip>
            ) : (
              <Quantity quantity={quantity} handlerChangeQuantity={handlerChangeQuantity} />
            )}
          </Block>
          <Block>
            {productSizes?.length && (
              <SizePicker
                sizes={productSizes}
                selectedSize={size}
                handleSelectSize={handleSelectSize}
              />
            )}
          </Block>
        </Block>
        <Block width="100%" display="flex">
          <Button
            onClick={() => updateCart({product, qty: quantity, action: CartUpdateAction.ADD, size})}
            text=" Agregar al carrito"
            variant="default"
            fullWidth
            color="earth"
            size="m"
            id={`info_section_add_to_cart_button`}
          />
        </Block>
      </MiddleContainer>
      <BottomContainer>
        <LogoImage alt="visa_logo" src={visa.src} />
        <LogoImage alt="mastercard_logo" src={mastercard.src} />
        <LogoImage alt="paypal_logo" src={paypal.src} />
      </BottomContainer>
    </InfoSectionContainer>
  );
};

export default InfoSection;

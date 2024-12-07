'use client'
import { useState, useEffect } from 'react';
import { ProductCardContainer, ProductImage, StyledBlock, StyledProductName } from './ProductCard.styles';
import { CustomLink, Text } from '..';
import { Size } from '../../theme';
import { Product } from '@modules/product/domain/Product';
import { NumberHelper, sizeToFontSizeMapper, StringHelper } from '@shared/helpers';
import { routes } from '@shared/infrastructure/routes';

interface Props {
  productData: Product;
  size?: Size;
  callBack?: () => void;
  category?: string;
}

const ProductCard: React.FC<Props> = ({ productData, size, category, callBack }) => {
  const [imgToShow, setImgToShow] = useState<string>('');
  const imgArray = productData?.images?.map((item) => item?.src);
  const altImg = productData?.images[0]?.alt;
  const formattedNameToUrl = StringHelper.formateEmptySpacesToUrl(productData?.name);
  const mainCategory = category ?? productData.categories[0];
  useEffect(() => {
    setImgToShow(productData?.images[0]?.src);
  }, [productData]);

  const getImgToShow = () => {
    if (imgArray.length > 1) {
      if (imgArray[1]) {
        if (imgToShow === imgArray[1]) {
          setImgToShow(imgArray[0]);
        } else {
          setImgToShow(imgArray[1]);
        }
      }
    }
  };
  return (
    <CustomLink
      to={`${routes.STORE_PRODUCTS}/${StringHelper.formateEmptySpacesToUrl(mainCategory)}/${formattedNameToUrl}`}
      hoverColor="earth"
      onClick={callBack}
    >
      <ProductCardContainer size={size ?? 'l'}>
        <ProductImage
          size={size ?? 'l'}
          onMouseEnter={getImgToShow}
          onMouseLeave={getImgToShow}
          src={imgToShow}
          alt={altImg}
        />
        <StyledBlock size={size ?? 'l'} display="flex" direction="column" align="center" pt="m">
          <StyledProductName $size={size ?? 'l'} $fontSize={sizeToFontSizeMapper(size) ?? 'medium'}>
            {productData?.name}
          </StyledProductName>
          <Text fontSize="medium">{NumberHelper.formatAmount(productData?.price, 2)}€</Text>
        </StyledBlock>
      </ProductCardContainer>
    </CustomLink>
  );
};

export default ProductCard;

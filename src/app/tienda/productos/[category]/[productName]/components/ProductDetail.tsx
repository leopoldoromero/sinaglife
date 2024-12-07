'use client'
import { useState } from 'react';
import { Product, ProductImage } from '@modules/product/domain/Product';
import ProductDetailLightBox from './product-detail-lightbox';
import { ProductDetailContainer } from './ProductDetail.styles';
import ImageSection from './image-section';
import InfoSection from './info-section';
import RelatedProducts from './related-products';

interface Props {
  product: Product;
  currentPath: string;
}

const ProductDetailPage: React.FC<Props> = ({product, currentPath}) => {
  const relatedProducts = product?.relatedProducts ?? [];
  const images = product?.images?.map((item: ProductImage) => ({
    id: item.id,
    name: item.name,
    src: item?.src,
    alt: item?.name,
  }))
  const [x, setX] = useState<number>(0);
  const [showProductLightBox, setShowProductLightBox] = useState<boolean>(false);

  const showImgHandler = () => setShowProductLightBox(!showProductLightBox);

  return (
    <>
      {showProductLightBox && <ProductDetailLightBox onClose={showImgHandler} selectedIndex={x} data={images} />}
      <ProductDetailContainer>
        <ImageSection imagesArr={images} x={x} setX={setX} imageHandler={showImgHandler} />
        <InfoSection product={product} currentPath={currentPath} />
      </ProductDetailContainer>
      {relatedProducts && relatedProducts?.length > 0 && <RelatedProducts products={relatedProducts} />}
    </>
  );
};

export default ProductDetailPage;

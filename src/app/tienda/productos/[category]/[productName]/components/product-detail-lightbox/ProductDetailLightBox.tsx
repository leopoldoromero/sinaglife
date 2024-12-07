'use client'
import React from 'react';
import { Wrapper } from './ProductDetailLightBox.styles';
import { ProductImage } from '@modules/product/domain/Product';
import { Backdrop } from '@components/index';
import ImgSlider from '../image-slider/ImgSlider';

interface Props {
  data: Array<ProductImage>;
  selectedIndex: number;
  onClose: () => void;
}

const ProductDetailLightBox: React.FC<Props> = ({ data, selectedIndex, onClose }) => {
  const [show, setShow] = React.useState<boolean>(true);
  const closeHandler = () => {
    onClose();
    setShow(false);
  };
  return (
    <>
      <Backdrop isVisible={show} hasButton onClose={closeHandler} />
      <Wrapper>
        <ImgSlider selectedIndex={selectedIndex} data={data} />
      </Wrapper>
    </>
  );
};

export default ProductDetailLightBox;

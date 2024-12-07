'use client'
import { Block, ProductCard, Text } from '@components/index';
import { Product } from '@modules/product/domain/Product';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';

interface Props {
  products: Array<Product>;
}

const RelatedProducts: React.FC<Props> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(2);
  const isSmallScreen = window.innerWidth > 500 && window.innerWidth <= 700;
  const isMediumScreen = window.innerWidth > 700 && window.innerWidth <= 900;
  const isBigScreen = window.innerWidth > 900;

  const handleSelectImage = (selectedIndex: number) => {
    setCurrentSlide(selectedIndex);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setItemsPerSlide(2);
    } else if (isMediumScreen) {
      setItemsPerSlide(3);
    } else if (isBigScreen) {
      setItemsPerSlide(4);
    }
  }, [window]);

  const cardsToRender = products.slice(currentSlide, currentSlide + itemsPerSlide);

  return (
    <Block display="flex" mt="l" mr="l" ml="l">
      <Block width="100%">
        <Block display="flex" align="center" justify="center">
          <Text color="black" as="h4" fontSize="medium" weight="bold" fontFamily="title" textAlign="center" isUppercase>
            Productos relacionados
          </Text>
        </Block>
        <Block display="flex" justify="center" width="100%">
          <Carousel
            activeIndex={currentSlide}
            onSelect={handleSelectImage}
            interval={null} // leave top null for now real value 3000
            fade
            controls={false}
            indicators={false}
          >
            {products.map((_, i) => (
              <Carousel.Item key={i}>
                {
                  <Block display="flex" width="90vw" justify="space-around" pt="l" pb="s">
                    {cardsToRender?.map((product: Product, idx: number) => (
                      <ProductCard productData={product} size="s" key={idx} />
                    ))}
                  </Block>
                }
              </Carousel.Item>
            ))}
          </Carousel>
        </Block>
      </Block>
    </Block>
  );
};

export default RelatedProducts;

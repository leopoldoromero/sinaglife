/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { memo } from 'react';
import { NextButtonContainer, PrevButtonContainer, Wrapper } from './ImgSlider.styles';
import { Block, Button } from '@components/index';

interface Props {
  data: any;
  selectedIndex?: number;
  imageHandler?: () => void;
}

const ImgSlider: React.FC<Props> = ({ data, selectedIndex, imageHandler }) => {
  const [x, setX] = React.useState(0);
  const [imageArr] = React.useState(
    data?.map((item: any) => ({
      src: item.src,
      alt: item.alt,
    })),
  );
  const imageArrLength = imageArr?.length;
  const goRight = () => {
    if (x === imageArrLength - 1) {
      setX(0);
    } else {
      const newX = x + 1;
      setX(newX);
    }
  };

  const goLeft = () => {
    if (x === 0) {
      setX(imageArrLength - 1);
    } else {
      setX(x - 1);
    }
  };

  React.useEffect(() => {
    if (selectedIndex && selectedIndex >= 0) setX(selectedIndex);
  }, [selectedIndex]);

  const renderButtons = () => (
    <Block display="flex" align="center" justify="center" height="100%">
      <PrevButtonContainer>
        <Button
          onClick={goLeft}
          type="button"
          variant="icon"
          iconSize="m"
          icon="leftArrow"
          iconColor="black"
          id={`image_slider_left_arrow_button`}
        />
      </PrevButtonContainer>
      <Block display="flex" width="100%">
        <img onClick={imageHandler} src={imageArr[x]?.src} alt={imageArr[x]?.alt} />
      </Block>
      <NextButtonContainer>
        <Button
          onClick={goRight}
          type="button"
          variant="icon"
          iconSize="m"
          icon="rightArrow"
          iconColor="black"
          id={`image_slider_right_arrow_button`}
        />
      </NextButtonContainer>
    </Block>
  );
  const navigationButtons =
    imageArrLength > 1 ? renderButtons() : <img src={imageArr[x]?.src} alt={imageArr[x]?.alt} />;

  return <Wrapper>{navigationButtons}</Wrapper>;
};

export default memo(ImgSlider);

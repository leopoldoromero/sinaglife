import { Dispatch, SetStateAction } from 'react';
import { ImageSectionContainer, MainImage, MiniImage } from './ImageSection.styles';
import { ProductImage } from '@modules/product/domain/Product';
import { Block } from '@components/index';

interface Props {
  imagesArr: Array<ProductImage>;
  x: number;
  setX: Dispatch<SetStateAction<number>>;
  imageHandler: () => void;
}
const ImageSection: React.FC<Props> = ({ imagesArr, x, setX, imageHandler }) => {
  const imageArr = imagesArr?.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));
  const renderImages = imagesArr
    ?.filter((el, ind) => ind < 3)
    ?.map((item, i) => <MiniImage src={item.src} alt={item.alt} key={i} onClick={() => setX(i)} />);

  return (
    <ImageSectionContainer>
      <Block
        display="flex"
        direction="column"
        align="center"
        pr="m"
        justify={imagesArr?.length < 3 ? 'space-around' : 'space-between'}
      >
        {imagesArr && renderImages}
      </Block>
      <Block onClick={imageHandler}>
        <MainImage src={imageArr[x]?.src} alt={imageArr[x]?.alt} />
      </Block>
    </ImageSectionContainer>
  );
};

export default ImageSection;

import {CustomVideo} from "@components/index";
import { HomeBannerContainer, HomeBannerImage, HomeBlock } from './components/Home.styles';
import banner from '../../public/assets/images/sinag-banner.webp';
import Mosaic from "./components/mosaic/Mosaic";
import { Product } from "@modules/product/domain/Product";
import container from "@modules/DiContainer";
import { ProductRepository } from "@modules/product/domain/ProductRepository";

export default async function Home() {
  const postRepository = container.get<ProductRepository>('ProductRepository');
  const { products } = await postRepository.getMany({
    field: 'categories',
    value: 'mosaico',
  });
  const dataToMosaic: Array<Product> = products;
  return (
    <div >
      <HomeBlock >
        <CustomVideo src='/assets/videos/home_video.mp4'/>
      </HomeBlock>
      <HomeBannerContainer>
        <HomeBannerImage src={banner} alt="envios a toda europa" width={banner.width} height={banner.height}/>
      </HomeBannerContainer>
      {dataToMosaic && <Mosaic data={dataToMosaic} />}
    </div>
  );
}

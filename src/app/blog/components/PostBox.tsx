import React from 'react';
import { routes } from '../../../../../../sinaglife-web-app/src/routes';
import { Block, CustomLink, Text } from '@components/index';
import { StyledCard, StyledCardImageContainer } from './PostBox.styles';
import { BlogImage } from '@modules/blog/domain/blog';

interface Props {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  image: BlogImage;
}

const PostBox: React.FC<Props> = function ({
  id, title, subTitle, description, image
 }) {
  return (
    <CustomLink
      to={`${routes.BLOG}/${id}`}
    >
      <StyledCard>
        <StyledCardImageContainer
          $url={image.src}
        />
        <Block display='flex' direction='column' justify='space-between' pt='l' pr='s' pb='l' pl='s'>
          <Text  color='greenMid' textAlign='right' weight='bold' fontSize='large' pt='m' pr='m' pb='m' pl='m'>{subTitle}</Text>
          <Text as="h3" color='black' pr='m' pl='m' fontSize='tiny' fontFamily='base' textAlign='center'>{title}</Text>
          <Text color='black' pt='s' pb='s' fontSize='tiny' textAlign='center'>{description}</Text>
        </Block>
      </StyledCard>
    </CustomLink>
  );
};

export default PostBox;

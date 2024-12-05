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
          url={image.src}
        />
        <Block display='flex' direction='column' justify='space-between' pt='m' pr='s' pb='m' pl='s'>
          <Text color='green' textAlign='right' weight='bold' fontSize='large' pt='m' pr='m' pb='m' pl='m'>{subTitle}</Text>
          <Text color='black' pr='m' pl='m' fontSize='medium' fontFamily='base'>{title}</Text>
          <Text color='black' pt='s' pb='s'>{description}</Text>
        </Block>
      </StyledCard>
    </CustomLink>
  );
};

export default PostBox;

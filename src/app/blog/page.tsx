import { Block, PageWrapper, Text } from "@components/index";
import PostBox from "./components/PostBox";
import { Post } from "@modules/post/domain/post";
import container from "@modules/DiContainer";
import { PostRepository } from "@modules/post/domain/post.repository";

export default async function Blog() {
    const postRepository = container.get<PostRepository>('PostRepository');
    const data: Array<Post> = await postRepository.getMany();
  return (
    <PageWrapper pageTitle="Blog" titleColor="black" pr='s' pl='s'>
      <Text as="h2" fontSize="small" textAlign="center" weight="light" mb="s">
        Los mejores artículos sobre el cuidado de tu ser:
      </Text>
      <Block display="flex" justify="center" align="center" flexWrap="wrap" customStyles={{'gap': '2rem'}}>
        {data.length > 0 && data.map((post) => <PostBox 
        key={`${post.id}${post.title}`} 
        id={post.id}
        title={post.title} 
        subTitle={post.subTitle}
        description={post.description}
        image={post.image}
        />
        )}
      </Block>
    </PageWrapper>
  );
}

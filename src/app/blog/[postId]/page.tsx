import { Block, PageWrapper, Text } from "@components/index";
import container from "@modules/DiContainer";
import { PostRepository } from "@modules/post/domain/post.repository";
import { ReactNode } from "react";
import parse, { domToReact  } from 'html-react-parser';
import { PostParagraph, PostParagraphWrapper, StyledPostRow } from "./components/Post.styles";

export default async function Post({
    params,
}: {
    params: { postId: string }
}): Promise<ReactNode> {
    const postRepository = container.get<PostRepository>('PostRepository');
    const content = await postRepository.get(await params?.postId);

    const options = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        replace: ({ attribs, children, name }: any) => {
            if (attribs) {
                if (name === 'h4') {
                    return <Text as="h4" fontSize="small" textAlign="center" weight="medium">{domToReact(children)}</Text>
                }
                if (name === 'p') {
                    return <PostParagraph>{domToReact(children)}</PostParagraph>
                }
                if (name === 'img') {
                    // eslint-disable-next-line @next/next/no-img-element
                    return <img alt={attribs.alt} src={attribs.src} width={`100%`} height={`100%`}/>
                }
                if (name === 'figure') {
                  return <Block >{domToReact(children, options)}</Block>
                }

                if (name === 'div' && attribs.class?.includes('wp-block-media-text__content')) {
                  return <PostParagraphWrapper>{domToReact(children, options)}</PostParagraphWrapper>;
                }
                
                if (name === 'div' && attribs.class?.includes('wp-block-media-text') && !attribs.class.includes('__content')) {
                  return <StyledPostRow>{domToReact(children, options)}</StyledPostRow>;
                }
            }
        },
      };
    return (
        <PageWrapper>
            {parse(content, options)}
        </PageWrapper>
    )
}
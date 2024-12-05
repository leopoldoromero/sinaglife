'use client'
import Image from 'next/image';
import styled from 'styled-components';

export const PostPageWrapper = styled.div`
    h4 {
    }
`;

export const PostParagraph = styled.p`
    margin: 10px;
    text-align: justify;
    vertical-align: middle;

   ${(p) => p.theme.media.mobileXl`
        margin: 20px;
    `}
`

export const PostParagraphWrapper = styled.div`
    ${(p) => p.theme.media.tablet`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    `}
`

export const StyledRowImage = styled(Image)`
    width: 100%;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.4);

    ${(p) => p.theme.media.mobileXl`
        width: 75%;
        margin: 20px auto;
    `}
`;

export const StyledPostRow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    max-width: 90wh;

    ${(p) => p.theme.media.tablet`
        flex-direction: row;
    `}
`;
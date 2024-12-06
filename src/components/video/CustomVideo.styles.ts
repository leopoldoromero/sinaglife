'use client'
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 400px;
    display: flex;
    object-fit: cover;
    z-index: 0;

    ${(p) => p.theme.media.desktop`
        height: 800px;
    `}
`;

export const StyledVideo = styled.video`
    min-width: 100%;
    object-fit: cover;
    background: #000;
`;

  
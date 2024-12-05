'use client'
import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 25rem;
    min-height: 300px;
    display: grid;
    grid-template-columns: 40% 60%;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    border-radius: 25px;
    position: relative;
`

export const StyledCardImageContainer = styled.div<{$url: string}>`
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    background-position: center center;
    background-size: cover;
    background-image: url(${(p) => p.$url});
`
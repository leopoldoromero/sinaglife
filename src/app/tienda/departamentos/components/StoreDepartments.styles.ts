'use client'
import Link from 'next/link';
import styled from 'styled-components';

export const DepartmentsPageWrapper = styled.div<{ $url: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(p) => p.$url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem;
`;
export const DepartmentsCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem 0.8rem;
  ${(p) => p.theme.media.mobileXl`
        justify-content: space-between;
        justify-content: center;
    `}

  ${(p) => p.theme.media.tablet`
        width: 100%;
        justify-content: space-between;
    `}

    ${(p) => p.theme.media.desktop`
        width: 100%;
        justify-content: space-between;
    `}
`;

export const DepartmentCard = styled(Link)<{ $url: string }>`
text-decoration: none;
color: inherit;  
background-image: url(${(p) => p.$url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  max-width: 290px;
  min-height: 350px;
  margin: 1rem;
  box-shadow: 0px 2px 12px 1px ${(p) => p.theme.color.darkSilver};
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;

  &:hover {
    filter: brightness(40%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  ${(p) => p.theme.media.mobileXl`
     width: 60%;
    `}

  ${(p) => p.theme.media.tablet`
     width: 35%;
     max-width: 320px;
    `}

    ${(p) => p.theme.media.desktop`
     width: 33%;
     min-height: 380px;
    `}
`;

export const CustomText = styled.p`
  width: 100%;
  color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.fontSizeGenerator('h2', 's')}
  font-weight: ${(p) => p.theme.weight.bold};
  text-transform: uppercase;
`;

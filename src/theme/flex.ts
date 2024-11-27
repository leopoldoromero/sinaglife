import { css } from 'styled-components';

export type FlexProps = {
  direction?: FlexDirection;
  display?: Flex;
  justify?: JustifyContent;
  align?: AlignItems;
  flexWrap?: FlexWrap;
};
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type Flex = 'flex';
export type FlexDirection = 'row' | 'column' | 'row-reverse';
export type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'baseline';
export type JustifyContent = AlignItems | 'space-between' | 'space-around' | 'space-evenly';

export const flex = css<FlexProps>`
  display: ${(p: FlexProps) => p.display ?? null};
  flex-direction: ${(p: FlexProps) => p.direction};
  justify-content: ${(p: FlexProps) => p.justify ?? null};
  align-items: ${(p: FlexProps) => p.align ?? null};
  flex-wrap: ${(p: FlexProps) => p.flexWrap && p.flexWrap};
`;

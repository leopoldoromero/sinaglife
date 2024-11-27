import React from 'react';
import { BlockContainer } from './Block.styles';
import { BoxSizing, FlexProps, HTMLEvents, ICustomStyles, Overflow, PositionType, SpacingProps } from '@theme/index';

export interface Props extends SpacingProps, FlexProps, ICustomStyles, HTMLEvents<HTMLDivElement> {
    children: React.ReactNode;
    width?: string;
    height?: string;
    borderRadius?: string;
    bgColor?: string;
    boxSizing?: BoxSizing;
    noMargin?: boolean;
    noPadding?: boolean;
    overflow?: Overflow;
    position?: PositionType;
}
    
const Block: React.FC<Props> = (props) => <BlockContainer {...props}>{props.children}</BlockContainer>;

export default Block;

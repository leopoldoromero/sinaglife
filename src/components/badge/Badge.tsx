import React from 'react';
import { BadgeContainer } from './Badge.styles';
import { Alignment, ColorKeys, CustomStylesProps, VerticalAlignment } from '../../theme';
import { Size } from '../../theme';
import Block from '@components/block/Block';
import Text from '@components/text/Text';

export type BadgeShape = 'circle' | 'square' | 'rounded';

export interface Props extends CustomStylesProps {
  children: React.ReactNode;
  value: number | string;
  isVisible: boolean;
  bgColor?: ColorKeys;
  color?: ColorKeys;
  max?: number;
  shape?: BadgeShape;
  size: Size;
  alignment?: Alignment;
}
export type BadgeItemProps = Omit<Props, 'children' | 'value'> & {
  left: number;
  top: VerticalAlignment;
};

const Badge: React.FC<Props> = ({
  isVisible,
  value,
  children,
  bgColor,
  color,
  shape = 'circle',
  max = 9,
}) => {
  const isGreater = typeof value === 'number' ? max && value > max : false;
  return (
    <Block position="relative">
      <Block position="relative">{children}</Block>
      {isVisible && (
        <Block position="absolute" customStyles={{ bottom: '15px', right: '-12px' }}>
          <BadgeContainer $bgColor={bgColor} $shape={shape}>
            <Text fontSize="small" color={color ?? 'white'} weight="semiBold">
              {isGreater ? `${max}+` : value}
            </Text>
          </BadgeContainer>
        </Block>
      )}
    </Block>
  );
};

export default Badge;

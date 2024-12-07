'use client'
import { useState } from 'react';
import { MenuContainer, MenuItem, SizePickeryWrapper } from './SizePicker.styles';
import Block from '@components/block/Block';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

interface Props {
  selectedSize: string;
  sizes: Array<string>;
  handleSelectSize: (size: string) => void;
}

const SizePicker: React.FC<Props> = ({ selectedSize, sizes, handleSelectSize }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenuHandler = () => setIsMenuOpen(!isMenuOpen);
  const sizesToShow = sizes.filter((size) => size !== selectedSize);
  return (
    <SizePickeryWrapper $isOpen={isMenuOpen}>
      <Block position="relative" display='flex' align='center' justify='space-between'>
        <Input
          inputSize="s"
          width="100%"
          type="text"
          onChange={() => null}
          name="size"
          value={selectedSize}
          focusable={false}
          readonly
        />
        <Button size="s" variant="icon" icon="downArrow" iconSize="xs" onClick={() => showMenuHandler()} />

        {isMenuOpen && (
          <MenuContainer $isOpen={isMenuOpen}>
            {sizesToShow.map((size) => (
              <MenuItem
                key={size}
                onClick={() => {
                  handleSelectSize(size);
                  showMenuHandler();
                }}>
                <Input
                  inputSize="s"
                  width="100%"
                  type="text"
                  onChange={() => null}
                  name="size"
                  value={size}
                  focusable={false}
                  readonly
                />
              </MenuItem>
            ))}
          </MenuContainer>
        )}
      </Block>
    </SizePickeryWrapper>
  );
};

export default SizePicker;

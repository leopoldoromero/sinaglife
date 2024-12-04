'use client'
/* eslint-disable no-unused-vars */
import React from 'react';
import { Wrapper } from './Backdrop.styles';
import {Button, Block} from '..';

export type Props = {
  isVisible: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  hasButton: boolean;
};

const Backdrop: React.FC<Props> = ({ isVisible, onClose, hasButton }) => (
  <Wrapper data-testid="backdrop_test_id" $isVisible={isVisible} onClick={onClose}>
    {hasButton && (
      <Block>
        <Button
          variant="icon"
          icon="closeX"
          onClick={onClose}
          iconColor="white"
          iconSize="m"
          id={`backdrop_closeX_button`}
        />
      </Block>
    )}
  </Wrapper>
);
export default Backdrop;

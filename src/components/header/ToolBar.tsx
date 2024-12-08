'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchAction, DefaultState } from '@redux/store';
import HeaderLogo from './HeaderLogo';
import { UserState } from '@redux/user/user.slice';
import { selectUserState } from '@redux/user/user.selectors';
import { FormikValues } from 'formik';
import { useCart } from '../../hooks';
import Block from '@components/block/Block';
import Button from '@components/button/Button';
import Badge from '@components/badge/Badge';
import { Form, InputWithIcon } from '..';
import Link from 'next/link';
import { selectUIState } from '@redux/ui/ui.selector';
import { toggleSearchInput, toggleSideDrawer, UIState } from '@redux/ui/ui.slice';

interface Props {
  formik: FormikValues;
}

const Toolbar: React.FC<Props> = function ({
  formik,
}) {
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);
  const dispatch = useDispatch<DispatchAction>();
  const { cart, getCartLength } = useCart();
  const { user } = useSelector<DefaultState, UserState>(selectUserState);
  const { isVisibleSearchInput, isMobile } = useSelector<DefaultState, UIState>(selectUIState);

  const [cartLength, setCartLength] = useState<number>(0);
  const closeUserModalHandler = () => setIsVisibleUserModal(false);
  const singOut = () => {
    // dispatch(logOut());
    closeUserModalHandler();
  };
  console.log('CArt LENGTH', cartLength, cart)
  useEffect(() => {
    setCartLength(getCartLength());
  }, []);

  return (
    <>
      {/* <UserModal isOpen={isVisibleUserModal} onClose={closeUserModalHandler} user={user} singOut={singOut} /> */}
      <Block
        width="100%"
        height="100%"
        display="flex"
        justify="space-between"
        align="center"
        bgColor="white"
        pt="m"
        pr="m"
        pb="m"
        pl="m"
        customStyles={{ maxHeight: '100px' }}
      >
        <Block display="flex" width="20%" >
          <Button
            onClick={() => dispatch(toggleSideDrawer())}
            type="button"
            variant="icon"
            iconSize="s"
            icon="menuBars"
            iconColor="black"
            id={`header_menu_btn`}
          />
        </Block>
        <HeaderLogo />
        <Block display="flex" width="30%" justify="flex-end" align="center">
          <Block display="flex" align="flex-end" justify="center" mr="s">
            {isVisibleSearchInput && !isMobile ? (
              <Form onSubmit={formik.handleSubmit} display="flex" width="100%">
                <InputWithIcon
                  value={formik.values.search}
                  name="search"
                  type="text"
                  icon="closeX"
                  onChange={formik.handleChange}
                  shape="rounded"
                  placeholder="Escribe aqui"
                  bgColor="white"
                  onClick={() => toggleSearchInput()}
                />
              </Form>
            ) : (
              <Button
                onClick={() => toggleSideDrawer()}
                type="button"
                variant="icon"
                iconSize="s"
                icon="search"
                iconColor="black"
                id={`header_search_btn`}
                mr="m"
              />
            )}
          </Block>
          <Block display="flex" align="flex-end" justify="center" onClick={() => setIsVisibleUserModal(true)}>
            <Badge size="s" value={`✓`} isVisible={!!user?.isConfirmed} bgColor="green">
              <Button
                onClick={() => null}
                type="button"
                variant="icon"
                iconSize="s"
                icon="account"
                iconColor="black"
                id={`header_account_btn`}
              />
            </Badge>
          </Block>
          <Block display="flex" align="flex-end" justify="center" position="relative" pr="m">
            <Badge size="s" value={cartLength} isVisible={cartLength > 0}>
              <Link href="/cesta">
                <Button
                  onClick={() => null}
                  type="button"
                  variant="icon"
                  iconSize="s"
                  icon="basket"
                  iconColor="black"
                  id={`header_cart_btn`}
                  ml="m"
                />
              </Link>
            </Badge>
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default Toolbar;

'use client';

import React, { useState } from 'react';
import { Block, Button, Drawer, Icon, Text, CustomLink, List, ListItem, Backdrop } from '..';
import { UL } from './SideDrawer.styles';
import { routes } from '@shared/infrastructure/routes';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultState, DispatchAction } from '@redux/store';
import { toggleSideDrawer, UIState } from '@redux/ui/ui.slice';
import { selectUIState } from '@redux/ui/ui.selector';
import { IconTypes } from '@components/icon/Icon';

export type SideDrawerData = {
  id: number;
  to?: string;
  title: string;
  icon?: IconTypes;
  isCollapsed: boolean;
  isHovered: boolean;
  list?: Array<ListItem>;
};

type ListItem = {
  to: string;
  title: string;
};


const SideDrawer = () => {
  const { isSideDrawerOpen } = useSelector<DefaultState, UIState>(selectUIState);
  const [data, setData] = useState<Array<SideDrawerData>>([
    {
      id: 0,
      to: routes.STORE_DEPARTMENTS,
      title: 'Tienda',
      icon: 'store',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 1,
      title: 'Mujer',
      isCollapsed: false,
      isHovered: false,
      list: [
        {
          to: `${routes.STORE_PRODUCTS}/pulseras`,
          title: 'Pulseras',
        },
        {
          to: `${routes.STORE_PRODUCTS}/anillos`,
          title: 'Anillos',
        },
        {
          to: `${routes.STORE_PRODUCTS}/colgantes`,
          title: 'Colgantes',
        },
        {
          to: `${routes.STORE_PRODUCTS}/pendientes`,
          title: 'Pendientes',
        },
      ],
    },
    {
      id: 2,
      to: `${routes.STORE_PRODUCTS}/hombre`,
      title: 'Hombre',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 3,
      to: `${routes.STORE_PRODUCTS}/malas`,
      title: 'Malas',
      icon: 'om',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 4,
      to: `${routes.STORE_PRODUCTS}/cuidado-de-tu-ser`,
      title: 'Cuidado de tu ser',
      icon: 'skinCare',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 5,
      to: `${routes.STORE_PRODUCTS}/espiritualidad`,
      title: 'Espiritualidad',
      icon: 'relax',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 6,
      to: `${routes.STORE_PRODUCTS}/rebajas`,
      title: 'Rebajas',
      icon: 'soldOut',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 7,
      to: routes.KNOW_US,
      title: 'Conócenos',
      icon: 'hands',
      isCollapsed: false,
      isHovered: false,
    },
    {
      id: 8,
      to: routes.BLOG,
      title: 'Blog',
      icon: 'blog',
      isCollapsed: false,
      isHovered: false,
    },
  ]);
  const dispatch = useDispatch<DispatchAction>();

  const hoverColorHandler = (x: number) => {
    const result = data.map((el) => {
      if (el.id === x) {
        return {
          ...el,
          isHovered: !el.isHovered,
        };
      }
      return {
        ...el,
        isHovered: false,
      };
    });
    setData(result);
  };

  const collapseHandler = (x?: number) => {
    const result = data.map((el) => {
      if (!x) {
        return {
          ...el,
          isCollapsed: false,
        };
      }
      if (el.id === x) {
        return {
          ...el,
          isCollapsed: !el.isCollapsed,
        };
      }
      return el;
    });
    setData(result);
  };

  const closeDrawerHandler = () => {
    dispatch(toggleSideDrawer());
    collapseHandler();
  };

  const renderList = data.map((item, i) => (
    <Block key={i} pt="s" pb="s">
      <ListItem
        isFlex
        justify="space-between"
        align="center"
        onMouseEnter={() => hoverColorHandler(i)}
        onMouseLeave={() => hoverColorHandler(i)}
        key={i}
        pt="m"
        pb="m"
      >
        {item.to ? (
          <CustomLink to={item.to} onClick={closeDrawerHandler}>
            {item.icon && <Icon color={item.isHovered ? 'earth' : 'white'} icon={item.icon} size="s" />}
            <Text color={item.isHovered ? 'earth' : 'white'} ml={item.icon ? 'm' : 'xxl'}>
              {item.title}
            </Text>
          </CustomLink>
        ) : (
          <Block display="flex" width="50%">
            {item.icon && <Icon color={item.isHovered ? 'earth' : 'white'} icon={item.icon} size="s" />}
            <Text
              onClick={() => collapseHandler(i)}
              color={item.isHovered ? 'earth' : 'white'}
              ml={item.icon ? 's' : 'xxl'}
              cursor="pointer"
            >
              {item.title}
            </Text>
          </Block>
        )}
        {item?.list && (
          <Button
            onClick={() => collapseHandler(i)}
            variant="icon"
            iconColor={item.isHovered ? 'earth' : 'white'}
            icon={item.isCollapsed && item.list ? 'downArrow' : 'rightArrow'}
            iconSize="s"
          />
        )}
      </ListItem>
      {item.isCollapsed && item?.list && (
        <UL $isCollapse={item.isCollapsed}>
          {item.list &&
            item.list.map((el, index) => (
              <ListItem isFlex key={index} justify="space-between" align="center" pt="s" pb="s" pl="xl">
                <CustomLink onClick={closeDrawerHandler} hoverColor="white" to={el.to} fontSize="l" pl="xl">
                  {el.title}
                </CustomLink>
              </ListItem>
            ))}
        </UL>
      )}
    </Block>
  ));

  return (
    <>
      <Backdrop onClose={closeDrawerHandler} isVisible={isSideDrawerOpen} hasButton/> 
      <Drawer isOpen={isSideDrawerOpen}  pt="l" pr="l" pb="l" pl="l" bgColor="drawer">
        <List>{renderList}</List>
      </Drawer>
    </>
  );
};

export default SideDrawer;

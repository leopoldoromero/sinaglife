'use client'
import React from 'react';
import { HeaderContainer } from './Header.styles';
import TopBar from './TopBar';
import Toolbar from './ToolBar';
import Form from '../form/Form';
import { InputWithIcon } from '..';
import { useSelector } from 'react-redux';
import { DefaultState } from '@redux/store';
import { toggleSearchInput, UIState } from '@redux/ui/ui.slice';
import { selectUIState } from '@redux/ui/ui.selector';
import { useFormik } from 'formik';

export interface SearchFormikState {
  search: string;
}

const Header = () => {
  const { isVisibleSearchInput, isMobile } = useSelector<DefaultState, UIState>(selectUIState);
  const initialState: SearchFormikState = {
    search: '',
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async (values) => {
      console.log('VALUES', values);
    },
  });
  return (
    <HeaderContainer id="header">
      <TopBar />
      <Toolbar
        formik={formik}
      />
      {isVisibleSearchInput && isMobile && (
        <Form onSubmit={formik.handleSubmit} display="flex" width="100%">
          <InputWithIcon
            value={formik.values.search}
            name="search"
            type="text"
            icon="closeX"
            onChange={formik.handleChange}
            shape="square"
            placeholder="Escribe aqui"
            bgColor="white"
            onClick={() => toggleSearchInput()}
          />
        </Form>
      )}
    </HeaderContainer>
  );
}

export default Header;

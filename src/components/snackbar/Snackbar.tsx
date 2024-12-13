'use client';
import React from 'react';
import MaterialUiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultState, DispatchAction } from '@redux/store';
import { snackbarActions, SnackbarState } from '@redux/snackbar/snackbar.slice';
import { selectSnackbarState } from '@redux/snackbar/snackbar.selectors';

const Alert: React.FC<any> = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export interface Props {
  autoHideDuration?: number;
}

const Snackbar: React.FC<Props> = ({ autoHideDuration }) => {
    const { openSnackbar, snackbarSuccess, snackbarMessage } = useSelector<DefaultState, SnackbarState>(selectSnackbarState);
    const dispatch = useDispatch<DispatchAction>();
    const closeSnackbar = () => dispatch(snackbarActions.clear());
    return (
        < MaterialUiSnackbar open={openSnackbar} autoHideDuration={autoHideDuration} onClose={closeSnackbar}>
          <Alert severity={snackbarSuccess ? 'success' : 'error'}>{snackbarMessage}</Alert>
        </ MaterialUiSnackbar>
    );
}

export default Snackbar;

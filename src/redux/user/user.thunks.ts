import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormikProps } from 'formik';
import container from '../../modules/DiContainer';
import { CreateUserInput, RemoveUserInput, UpdateUserInput, UserRepository } from '@modules/user/domain/UserRepository';
import { routes } from 'shared/infrastructure/routes';
import { NextRouter } from 'next/router';
import { snackbarActions } from '../snackbar/snackbar.slice';

const userRepository = container.get<UserRepository>('UserRepository');

export const createUser = createAsyncThunk<
  unknown,
  { userData: CreateUserInput; formik: FormikProps<unknown> },
  { rejectValue: string }
>('user/create', async ({ userData, formik }, thunkApi) => {
  try {
    await userRepository.create(userData);
    formik.resetForm();
    thunkApi.dispatch(snackbarActions.success('Registro exitoso, revise su bandeja de entrada o spam'));
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const updateUser = createAsyncThunk<
  unknown,
  { userData: UpdateUserInput; formik: FormikProps<unknown> },
  { rejectValue: string }
>('user/update', async ({ userData, formik }, thunkApi) => {
  try {
    await userRepository.update(userData);
    formik.resetForm();
    thunkApi.dispatch(snackbarActions.success('Operacion exitosa'));
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const removeUser = createAsyncThunk<
  unknown,
  { userData: RemoveUserInput; formik: FormikProps<unknown>, router: NextRouter},
  { rejectValue: string }
>('user/remove', async ({ userData, formik, router }, thunkApi) => {
  try {
    await userRepository.remove(userData);
    // TODO: commented while gets appplied
    // thunkApi.dispatch(logOut());
    formik.resetForm();
    thunkApi.dispatch(snackbarActions.success('Operacion exitosa, revise su bandeja de entrada'));
    router.push(routes.BASE);
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});


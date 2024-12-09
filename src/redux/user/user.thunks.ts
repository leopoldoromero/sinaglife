import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormikProps } from 'formik';
import container from '../../modules/DiContainer';
import { CreateUserInput, RemoveUserInput, UpdateUserInput, UserRepository } from '@modules/user/domain/UserRepository';
import { routes } from 'shared/infrastructure/routes';
import { snackbarActions } from '../snackbar/snackbar.slice';
import { DefaultState } from '@redux/store';
import { addCustomerId, getCart, getCartByCustomerId } from '@redux/cart/cart.thunks';
import { clearCart, setCustomerId } from '@redux/cart/cart.slice';
import { UserLoginInput, UserLoginOutput } from '@modules/user/infrastructure/user.dtos';
import { logInAction, logOutAction, refreshJwtAction } from 'actions/user.actions';
import { navigate } from 'actions/navigate.actions';

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
  { userData: RemoveUserInput; formik: FormikProps<unknown>},
  { rejectValue: string }
>('user/remove', async ({ userData, formik }, thunkApi) => {
  try {
    await userRepository.remove(userData);
    // TODO: commented while gets appplied
    // thunkApi.dispatch(logOut());
    formik.resetForm();
    thunkApi.dispatch(snackbarActions.success('Operacion exitosa, revise su bandeja de entrada'));
    navigate(routes.BASE);
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const login = createAsyncThunk<
  UserLoginOutput,
  { userData: UserLoginInput; redirectPath: string },
  { rejectValue: string }
>('user/login', async ({ userData, redirectPath }, thunkApi) => {
  try {
    const response: UserLoginOutput = await logInAction(userData);
    const state: DefaultState = thunkApi.getState() as DefaultState;

    if (!state.cart?.cart) {
      if (response && response.id) {
        thunkApi.dispatch(getCartByCustomerId({ data: { customerId: response.id } }));
      } else {
        thunkApi.dispatch(getCart());
      }
    } else if (!state.cart?.cart.customerId) {
      await addCustomerId(state.cart.cart.id);
      thunkApi.dispatch(setCustomerId(response.id));
    }
    // StorageHandlerHelper.save('token', response.token);
    navigate(redirectPath);
    return response;
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const logOut = createAsyncThunk<{}>('user/logOut', async (_, thunkApi) => {
  await logOutAction();
  thunkApi.dispatch(clearCart());
  // StorageHandlerHelper.clear('token');
  // StorageHandlerHelper.clear('cart_id');
});

export const refreshJwt = createAsyncThunk<UserLoginOutput, {}, { rejectValue: string }>('user/refreshJwt', async (_, thunkApi) => {
  try {
    const response = await refreshJwtAction();
    console.log('JWT', response)
    if (response && response.id) {
      thunkApi.dispatch(getCartByCustomerId({ data: { customerId: response.id } }));
    } 
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

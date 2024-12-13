import { createAsyncThunk } from '@reduxjs/toolkit';
import { DefaultState } from '../store';
import { retrieveCart } from './cart.slice';
import { snackbarActions } from '../snackbar/snackbar.slice';
import { CartUpdateAction, CartValidateDiscountInput, CreateCartInput, GetCartByCustomerDTO, GetCartOutput, UpdateCartItemInput } from '@modules/cart/domain/CartRepository';
import { addCustomerIdToCartAction, createCartAction, getCartAction, getCartByCustomerAction, removeCartAction, updateCartItemsAction, validateDiscountCartAction } from 'actions/cart.actions';

export const createCart = createAsyncThunk<
  GetCartOutput,
  { cartData: CreateCartInput },
  { rejectValue: string }
>('cart/create', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartOutput = await createCartAction(cartData);
    thunkApi.dispatch(snackbarActions.success('Producto añadido al carrito'));
    return createdCart;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const updateCartItems = createAsyncThunk<
  GetCartOutput,
  { cartData: UpdateCartItemInput },
  { rejectValue: string }
>('cart/update-items', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartOutput = await updateCartItemsAction(cartData);
    console.log('UPDATE ITEMS', createdCart)
    if (cartData.action === CartUpdateAction.ADD) {
      thunkApi.dispatch(snackbarActions.success('Producto añadido al carrito'));
    } else {
      thunkApi.dispatch(snackbarActions.error('Producto removido del carrito'));
    }
    return createdCart;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const removeCart = createAsyncThunk('cart/remove', async (_, thunkApi) => {
  try {
    const state: DefaultState = thunkApi.getState() as DefaultState;
    if (state.cart?.cart) {
      await removeCartAction(state.cart?.cart?.id);
    }
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getCart = createAsyncThunk('cart/get', async (_, thunkApi) => {
  try {
    const cartOrNull = await getCartAction();
      if (cartOrNull && cartOrNull.id) {
        thunkApi.dispatch(retrieveCart(cartOrNull));
      }
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getCartByCustomerId = createAsyncThunk<unknown, { data: GetCartByCustomerDTO }, { rejectValue: string }>(
  'cart/get-by-customer',
  async ({ data }, thunkApi) => {
    try {
      const cartOrNull = await getCartByCustomerAction(data.customerId);
      console.log('BY CUSTOMER', cartOrNull)
      if (cartOrNull && cartOrNull.id) {
        thunkApi.dispatch(retrieveCart(cartOrNull));
      } 
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const validateDiscountToCart = createAsyncThunk<
  GetCartOutput,
  { cartData: CartValidateDiscountInput },
  { rejectValue: string }
>('cart/add-discount', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartOutput = await validateDiscountCartAction(cartData);
    thunkApi.dispatch(snackbarActions.success('Cupon validado correctamente'));
    return createdCart;
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const addCustomerId = async (cartId: string) => addCustomerIdToCartAction(cartId);

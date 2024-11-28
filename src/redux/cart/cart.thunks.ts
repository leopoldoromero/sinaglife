import { createAsyncThunk } from '@reduxjs/toolkit';
import container from '../../DiContainer';
import { DefaultState } from '../store';
import { retrieveCart } from './cart.slice';
import { CartUpdateAction, CartValidateDiscountRequestDTO, CreateCartRequestDTO, GetCartByCustomerDTO, GetCartResponseDTO, UpdateCartItemRequestDTO } from '@modules/cart/cart.dtos';
import { StorageHandlerHelper } from 'shared/helpers';
import { CartService } from '@modules/cart/application/cart.service';
import { snackbarActions } from '../snackbar/snackbar.slice';

const cartService = container.get<CartService>('CartService');

export const createCart = createAsyncThunk<
  GetCartResponseDTO,
  { cartData: CreateCartRequestDTO },
  { rejectValue: string }
>('cart/create', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartResponseDTO = await cartService.create(cartData);
    thunkApi.dispatch(snackbarActions.success('Producto añadido al carrito'));
    StorageHandlerHelper.save('cart_id', createdCart?.id);
    return createdCart;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const updateCartItems = createAsyncThunk<
  GetCartResponseDTO,
  { cartData: UpdateCartItemRequestDTO },
  { rejectValue: string }
>('cart/update-items', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartResponseDTO = await cartService.updateItems(cartData);
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
      await cartService.remove(state.cart?.cart?.id);
    }
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getCart = createAsyncThunk('cart/get', async (_, thunkApi) => {
  try {
    const cartId = StorageHandlerHelper.retrieve('cart_id');
    if (cartId) {
      const cartOrNull = await cartService.get(cartId);
      if (cartOrNull && cartOrNull.id) {
        thunkApi.dispatch(retrieveCart(cartOrNull));
      } else {
        StorageHandlerHelper.clear('cart_id');
      }
    }
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const getCartByCustomerId = createAsyncThunk<unknown, { data: GetCartByCustomerDTO }, { rejectValue: string }>(
  'cart/get-by-customer',
  async ({ data }, thunkApi) => {
    try {
      const cartOrNull = await cartService.getByCustomerId(data.customerId);
      if (cartOrNull && cartOrNull.id) {
        thunkApi.dispatch(retrieveCart(cartOrNull));
      } else {
        StorageHandlerHelper.clear('cart_id');
      }
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  },
);

export const validateDiscountToCart = createAsyncThunk<
  GetCartResponseDTO,
  { cartData: CartValidateDiscountRequestDTO },
  { rejectValue: string }
>('cart/add-discount', async ({ cartData }, thunkApi) => {
  try {
    const createdCart: GetCartResponseDTO = await cartService.validateDiscount(cartData);
    thunkApi.dispatch(snackbarActions.success('Cupon validado correctamente'));
    return createdCart;
  } catch (error) {
    thunkApi.dispatch(snackbarActions.error((error as Error).message));
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const addCustomerId = async (cartId: string) => cartService.addCustomerId(cartId);

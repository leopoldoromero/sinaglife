import { createSlice } from '@reduxjs/toolkit';
import { validateDiscountToCart, createCart, removeCart, updateCartItems } from './cart.thunks';
import { Cart } from '@modules/cart/domain/Cart';
import { CookieHandlerHelper, StorageHandlerHelper } from '@shared/helpers';

export interface CartState {
  cart: Cart | null;
  isLoading: boolean;
}

const initialState: CartState = {
  cart: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    retrieveCart(state, action) {
      state.cart = action.payload;
    },
    setCustomerId(state, action) {
      if (state.cart) {
        state.cart.customerId = action.payload;
      }
    },
    clearCart(state) {
      state.cart = null;
      StorageHandlerHelper.clear('cart_id');
    },
  },
  extraReducers(builder) {
    builder.addCase(createCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    });
    builder.addCase(createCart.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload?.items?.length === 0) {
        state.cart = null;
        StorageHandlerHelper.clear('cart_id');
      } else {
        state.cart = action.payload;
      }
    });
    builder.addCase(updateCartItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(validateDiscountToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(validateDiscountToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart = action.payload;
    });
    builder.addCase(validateDiscountToCart.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeCart.fulfilled, (state) => {
      state.cart = null;
      CookieHandlerHelper.clear('cart_id');
    });
  },
});

export const { retrieveCart, setCustomerId, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

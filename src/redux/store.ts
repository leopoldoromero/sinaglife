import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer, { UserState } from './user/user.slice';
import snackbarReducer, { SnackbarState } from './snackbar/snackbar.slice';
import cartReducer, { CartState } from './cart/cart.slice';

export interface DefaultState {
  user: UserState;
  snackbar: SnackbarState;
  cart: CartState;
}

const rootReducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

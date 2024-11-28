import { RootState } from '../store';
import { CartState } from './cart.slice';

export const selectCartState = (state: RootState): CartState => state.cart;

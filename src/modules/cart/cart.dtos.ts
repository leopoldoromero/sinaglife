import { CartItem } from './domain/Cart';

export interface CreateCartRequestDTO {
  customerId?: string;
  sessionId?: string;
  items: Array<CartItemDTO>;
  discount?: {
    amount: number;
    type: string;
  };
}

export interface CartItemDTO extends CartItem {}

export type UpdateCartItemRequestDTO = {
  cartId: string;
  cartItem: CartItemDTO;
  action: CartUpdateAction;
};

export const enum CartUpdateAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REPLACE = 'REPLACE',
}

export type GetCartResponseDTO = {
  id: string;
  items: Array<CartItemDTO>;
  subTotal: number;
  total: number;
  discount: number;
} | null;

export type AddDiscountToCartRequestDTO = {
  type: string;
  amount: number;
  cartId: string;
};

export type GetCartByCustomerDTO = {
  customerId: string;
};

export type CartValidateDiscountRequestDTO = {
  id: string;
  code: string;
};

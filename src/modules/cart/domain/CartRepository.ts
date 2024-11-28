import { Cart, CartItem } from './Cart';

export interface CreateCartInput {
  customerId?: string;
  sessionId?: string;
  items: Array<CartItem>;
  discount?: {
    amount: number;
    type: string;
  };
}

export type UpdateCartItemInput = {
  cartId: string;
  cartItem: CartItem;
  action: CartUpdateAction;
};

export const enum CartUpdateAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REPLACE = 'REPLACE',
}

export type GetCartOutput = {
  id: string;
  items: Array<CartItem>;
  subTotal: number;
  total: number;
  discount: number;
} | null;

export type AddDiscountToCartInput = {
  type: string;
  amount: number;
  cartId: string;
};

export type GetCartByCustomerDTO = {
  customerId: string;
};

export type CartValidateDiscountInput = {
  id: string;
  code: string;
};

export interface CartRepository {
    create(data: CreateCartInput): Promise<GetCartOutput>;
    updateItems(data: UpdateCartItemInput): Promise<GetCartOutput>;
    get(cartId: string): Promise<Cart>;
    validateDiscount(data: CartValidateDiscountInput): Promise<GetCartOutput>;
    remove(cartId: string): Promise<void>;
    addCustomerId(cartId: string): Promise<void>;
    getByCustomerId(customerId: string): Promise<Cart>;
  }
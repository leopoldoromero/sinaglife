'use client'
import { useDispatch, useSelector } from 'react-redux';
import { CartState } from '../redux/cart/cart.slice';
import { selectCartState } from '../redux/cart/cart.selectors';
import { DefaultState, DispatchAction } from '../redux/store';
import { createCart, removeCart, updateCartItems, validateDiscountToCart } from '../redux/cart/cart.thunks';
import { UserState } from '../redux/user/user.slice';
import { selectUserState } from '../redux/user/user.selectors';
import { Cart, CartItem } from '@modules/cart/domain/Cart';
import { CartUpdateAction } from '@modules/cart/domain/CartRepository';
import { Product } from '@modules/product/domain/Product';

export interface UseCartOutput {
  cart: Cart | null;
  isLoading: boolean;
  updateCart: (params: {product: Product, qty: number, action: CartUpdateAction, size?: string}) => void;
  updateExistingItem: (item: CartItem, action: CartUpdateAction) => void;
  getCartLength: () => number;
  validateDiscount: (code: string) => void;
  clearCart: () => void;
}

const useCart = (): UseCartOutput => {
  const { cart, isLoading } = useSelector<DefaultState, CartState>(selectCartState);
  const { user } = useSelector<DefaultState, UserState>(selectUserState);

  const dispatch = useDispatch<DispatchAction>();
  const cartItemCreator = (product: Product, qty: number, size?: string) => {
    const { id, name, images, price, code, stock } = product;
    return {
      id,
      name,
      image: images[0],
      quantity: qty,
      price,
      code,
      stock,
      size: size ?? '',
    };
  };
  const updateCart = (params: {product: Product, qty: number, action: CartUpdateAction, size?: string}) => {
    const {action, product, qty} = params;
    switch (action) {
      case CartUpdateAction.ADD: {
        if (!cart) {
          dispatch(
            createCart({
              cartData: {
                customerId: user ? user.id : undefined,
                items: [cartItemCreator(product, qty, params.size)],
              },
            }),
          );
        } else {
          if (!canAdd(product, qty)) return;
          dispatch(
            updateCartItems({
              cartData: {
                cartId: cart.id,
                cartItem: cartItemCreator(product, qty, params.size),
                action,
              },
            }),
          );
        }
        break;
      }
      case CartUpdateAction.REMOVE: {
        if (cart) {
          dispatch(
            updateCartItems({
              cartData: {
                cartId: cart.id,
                cartItem: cartItemCreator(product, qty),
                action,
              },
            }),
          );
        }
        break;
      }
      default:
        throw new Error(`Invalid operation`);
    }
  };

  const updateExistingItem = (item: CartItem, action: CartUpdateAction) => {
    if (cart) {
      dispatch(
        updateCartItems({
          cartData: {
            cartId: cart.id,
            cartItem: item,
            action,
          },
        }),
      );
    }
  };

  const canAdd = (product: Product | CartItem, qty: number): boolean => {
    if (!cart) return true;
    const exist = cart.items.find((item) => item.id === product.id);
    if (exist) {
      return exist.quantity + qty < product.stock;
    }
    return true;
  };

  const clearCart = () => dispatch(removeCart());
  const getCartLength = (): number => {
    if (!cart) {
      return 0;
    }
    return cart?.items?.reduce((acc, val) => acc + val.quantity, 0);
  };

  const validateDiscount = (code: string) => {
    if (cart) {
      dispatch(
        validateDiscountToCart({
          cartData: {
            id: cart.id,
            code,
          },
        }),
      );
    }
  };

  // const retrieveCart = () => {
  //   if(!cart) {
  //     if(user && user.id) {
  //       dispatch(getCartByCustomerId({data: { customerId: user.id }}))
  //     } else {
  //       dispatch(getCart())
  //     }
  //   }
  // }

  return {
    cart,
    isLoading,
    updateCart,
    clearCart,
    getCartLength,
    updateExistingItem,
    validateDiscount,
    // retrieveCart,
  };
};

export default useCart;

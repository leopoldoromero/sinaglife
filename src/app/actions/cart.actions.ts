'use server'
import { cookies } from 'next/headers';
import { CartRepository, CartValidateDiscountInput, CreateCartInput, GetCartOutput, UpdateCartItemInput } from "@modules/cart/domain/CartRepository";
import container from "@modules/DiContainer";
import { Cart } from '@modules/cart/domain/Cart';

const cartRepository = container.get<CartRepository>('CartRepository');

export async function getCartAction(): Promise<Cart | null> {
    const cookieStore = await cookies();
    const cartId = cookieStore.get('cart_id')?.value;

    if (cartId) {
        const cartOrNull = await cartRepository.get(cartId);
        if (cartOrNull && cartOrNull.id) {
            return cartOrNull;
        } else {
            cookieStore.delete('cart_id');
        }
    }
    return null;
}

export async function getCartByCustomerAction(customerId: string): Promise<Cart | null> {
    const cookieStore = await cookies();
    const cartOrNull = await cartRepository.getByCustomerId(customerId);
    if (cartOrNull && cartOrNull.id) {
        return cartOrNull;
    } else {
        cookieStore.delete('cart_id');
    }
    return null;
}

export async function createCartAction(input: CreateCartInput): Promise<GetCartOutput> {
    const createdCart = await cartRepository.create(input);
    if (createdCart?.id) {
        const cookieStore = await cookies();
        cookieStore.set('cart_id', createdCart?.id);
    }
    return createdCart;
}

export async function updateCartItemsAction(input: UpdateCartItemInput): Promise<GetCartOutput> {
    return cartRepository.updateItems(input);
}

export async function removeCartAction(cartId: string): Promise<void> {
    return cartRepository.remove(cartId);
}

export async function validateDiscountCartAction(input: CartValidateDiscountInput): Promise<GetCartOutput> {
    return cartRepository.validateDiscount(input);
}

export async function addCustomerIdToCartAction(cartId: string): Promise<void> {
    return cartRepository.addCustomerId(cartId);
}
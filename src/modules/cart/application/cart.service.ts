import {
  CartValidateDiscountRequestDTO,
  CreateCartRequestDTO,
  GetCartResponseDTO,
  UpdateCartItemRequestDTO,
} from '../cart.dtos';
import { Cart } from '../domain/Cart';
import { CartRepository } from '../infrastructure/ApiCartRepository';

export class CartService {
  private cartRepo: CartRepository;

  constructor(cartRepo: CartRepository) {
    this.cartRepo = cartRepo;
  }

  async create(data: CreateCartRequestDTO): Promise<GetCartResponseDTO> {
    return this.cartRepo.create(data);
  }

  async updateItems(data: UpdateCartItemRequestDTO): Promise<GetCartResponseDTO> {
    return this.cartRepo.updateItems(data);
  }

  async get(cartId: string): Promise<Cart | null> {
    return this.cartRepo.get(cartId);
  }

  getByCustomerId(customerId: string): Promise<Cart> {
    return this.cartRepo.getByCustomerId(customerId);
  }

  async validateDiscount(data: CartValidateDiscountRequestDTO): Promise<GetCartResponseDTO> {
    return this.cartRepo.validateDiscount(data);
  }

  async remove(cartId: string): Promise<void> {
    return this.cartRepo.remove(cartId);
  }

  async addCustomerId(cartId: string): Promise<void> {
    return this.cartRepo.addCustomerId(cartId);
  }
}

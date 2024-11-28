import { HttpClient } from 'shared/infrastructure/AxiosHttpClient';
import {
  CartValidateDiscountRequestDTO,
  CreateCartRequestDTO,
  GetCartResponseDTO,
  UpdateCartItemRequestDTO,
} from '../cart.dtos';
import { Cart } from '../domain/Cart';

export interface CartRepository {
  create(data: CreateCartRequestDTO): Promise<GetCartResponseDTO>;
  updateItems(data: UpdateCartItemRequestDTO): Promise<GetCartResponseDTO>;
  get(cartId: string): Promise<Cart>;
  validateDiscount(data: CartValidateDiscountRequestDTO): Promise<GetCartResponseDTO>;
  remove(cartId: string): Promise<void>;
  addCustomerId(cartId: string): Promise<void>;
  getByCustomerId(customerId: string): Promise<Cart>;
}

export class ApiCartRepository implements CartRepository {
  private httpClient: HttpClient;
  private endpoint: string = '/carts';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(data: CreateCartRequestDTO): Promise<GetCartResponseDTO> {
    return this.httpClient.post(`${this.endpoint}`, data);
  }

  async updateItems(data: UpdateCartItemRequestDTO): Promise<GetCartResponseDTO> {
    return this.httpClient.put(`${this.endpoint}/items`, data);
  }

  async get<Cart>(cartId: string): Promise<Cart> {
    return this.httpClient.get<Cart>(`${this.endpoint}/${cartId}`);
  }

  async getByCustomerId(customerId: string): Promise<Cart> {
    return this.httpClient.get<Cart>(`${this.endpoint}/customer/${customerId}`);
  }

  async validateDiscount(data: CartValidateDiscountRequestDTO): Promise<GetCartResponseDTO> {
    return this.httpClient.put(`${this.endpoint}/${data.id}/discount`, data);
  }

  async remove(cartId: string): Promise<void> {
    return this.httpClient.delete(`${this.endpoint}/${cartId}`);
  }

  async addCustomerId(cartId: string): Promise<void> {
    return this.httpClient.put(`${this.endpoint}/${cartId}`);
  }
}

import { HttpClient } from 'shared/infrastructure/AxiosHttpClient';
import { Cart } from '../domain/Cart';
import { CartRepository, CartValidateDiscountInput, CreateCartInput, GetCartOutput, UpdateCartItemInput } from '../domain/CartRepository';

export class ApiCartRepository implements CartRepository {
  private httpClient: HttpClient;
  private endpoint: string = '/carts';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async create(data: CreateCartInput): Promise<GetCartOutput> {
    return this.httpClient.post(`${this.endpoint}`, data);
  }

  async updateItems(data: UpdateCartItemInput): Promise<GetCartOutput> {
    return this.httpClient.put(`${this.endpoint}/items`, data);
  }

  async get<Cart>(cartId: string): Promise<Cart> {
    return this.httpClient.get<Cart>(`${this.endpoint}/${cartId}`);
  }

  async getByCustomerId(customerId: string): Promise<Cart> {
    return this.httpClient.get<Cart>(`${this.endpoint}/customer/${customerId}`);
  }

  async validateDiscount(data: CartValidateDiscountInput): Promise<GetCartOutput> {
    return this.httpClient.put(`${this.endpoint}/${data.id}/discount`, data);
  }

  async remove(cartId: string): Promise<void> {
    return this.httpClient.delete(`${this.endpoint}/${cartId}`);
  }

  async addCustomerId(cartId: string): Promise<void> {
    return this.httpClient.put(`${this.endpoint}/${cartId}`);
  }
}

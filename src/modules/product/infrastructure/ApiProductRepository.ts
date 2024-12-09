import { Criteria } from "@shared/domain/criteria";
import { Product, ProductToCheckAvailabilityRequest } from "../domain/Product";
import { HttpClient } from "@shared/infrastructure/AxiosHttpClient";
import { GetProductsResponseDTO, ProductRepository } from "../domain/ProductRepository";

export class ApiProductRepository implements ProductRepository {
    private httpClient: HttpClient;
    private endpoint: string = '/products';
  
    constructor(httpClient: HttpClient) {
      this.httpClient = httpClient;
    }
  
    async get<Product>(id: string): Promise<Product> {
      return this.httpClient.get<Product>(`${this.endpoint}/${id}`);
    }
  
    async getDetail(criteria?: Criteria): Promise<Product> {
      return this.httpClient.get<Product>(this.urlBuilder(criteria, '/detail'));
    }
  
    async getMany(criteria?: Criteria): Promise<GetProductsResponseDTO> {
      return this.httpClient.get<GetProductsResponseDTO>(this.urlBuilder(criteria));
    }
  
    async checkAvailability(products: ProductToCheckAvailabilityRequest): Promise<
      Array<{
        id: string;
        stock: number;
      }>
    > {
      return this.httpClient.post(`${this.endpoint}/check-availability`, products);
    }
  
    private urlBuilder(criteria?: Criteria, path?: string): string {
      if (!criteria) {
        return this.endpoint;
      }
      const route = path ? `${this.endpoint}${path}` : this.endpoint;
      criteria.operator = criteria.operator ?? 'EQUAL';
      const formatedQuery = Object.keys(criteria).reduce((acc, value) => {
        const criteriaKey = criteria[value as keyof Criteria];
        const unionCharacter = acc ? '&' : '';
        return criteriaKey ? `${acc}${unionCharacter}${value}=${criteriaKey}` : '';
      }, '');
      return `${route}?${formatedQuery}`;
    }
  }
  
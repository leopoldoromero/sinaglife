import { Criteria } from "@shared/domain/criteria";
import { Product } from "./Product";

export type GetProductsRequestDTO = {
  param: string;
};
export type GetProductsResponseDTO = {
  products: Array<Product>;
  count: number;
};

export interface ProductToCheckAvailabilityRequest {
    products: Array<{
      id: string;
      quantity: number;
    }>;
}

export interface ProductRepository {
    get(id: string): Promise<Product>;
    getDetail(criteria?: Criteria): Promise<Product>;
    getMany(criteria?: Criteria): Promise<GetProductsResponseDTO>;
    checkAvailability(products: ProductToCheckAvailabilityRequest): Promise<
      Array<{
        id: string;
        stock: number;
      }>
    >;
  }
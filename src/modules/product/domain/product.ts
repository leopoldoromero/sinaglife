export interface Product {
    id: string;
    categories: Array<string>;
    description: string;
    dimensions?: ProductDimension;
    images: Array<ProductImage>;
    name: string;
    price: number;
    salePrice: number;
    shippingClass: string;
    slug: string;
    stock: number;
    code: string;
    relatedIds?: Array<string>;
    relatedProducts: Array<Product>;
    sizes: Array<string>;
  }
  
  export type ProductDimension = {
    length: string;
    width: string;
    height: string;
  };
  
  export interface ProductImage {
    alt: string;
    id: number;
    name: string;
    src: string;
  }
  
  export interface ProductToCheckAvailabilityRequest {
    products: Array<{
      id: string;
      quantity: number;
    }>;
  }
  
  export interface GetProductResponseDTO extends Product {
    relatedProducts: Array<Product>;
  }
  
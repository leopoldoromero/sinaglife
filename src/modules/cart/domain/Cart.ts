export interface CartProductImage {
  alt: string;
  id: number;
  name: string;
  src: string;
}
export interface CartItem {
  id: string;
  name: string;
  image?: CartProductImage;
  quantity: number;
  price: number;
  code: string;
  stock: number;
  size: string;
}

export interface Cart {
  id: string;
  customerId?: string;
  items: Array<CartItem>;
  discount?: number;
  subTotal: number;
  total: number;
}

import { Product } from './product.model';
export interface Cart {
  items: CartItem[];
  totalPrice: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

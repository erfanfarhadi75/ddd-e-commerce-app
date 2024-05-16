import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface ProductService {
  getAllProducts(): Observable<Product[]>;
  getProductById(id: string): Observable<Product>;
}

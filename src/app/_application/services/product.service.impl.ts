import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../_core/models/product.model';
import { ProductService } from '../../_core/services/product.service';
import { ProductRepository } from '../../_core/repositories/product.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceImpl implements ProductService {
  constructor(private productRepository: ProductRepository) {}

  getAllProducts(): Observable<Product[]> {
    return this.productRepository.getProducts();
  }

  getProductById(id: string): Observable<Product> {
    return this.productRepository.getProductById(id);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductRepository } from '../_core/repositories/product.repository';
import { Product } from '../_core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryProductRepository extends ProductRepository {
  private products: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 100 },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 200 },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product> {
    const product = this.products.find((p) => p.id === id);
    return of(product as Product);
  }
}

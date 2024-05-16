import { Component, OnInit } from '@angular/core';
import { Product } from '../_core/models/product.model';
import { ProductServiceImpl } from '../_application/services/product.service.impl';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceImpl) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

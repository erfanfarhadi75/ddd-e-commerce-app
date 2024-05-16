import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductRepository } from './_core/repositories/product.repository';
import { InMemoryProductRepository } from './_infrastructure/in-memory-product.repository';
import { ProductServiceImpl } from './_application/services/product.service.impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: ProductRepository, useClass: InMemoryProductRepository },
    ProductServiceImpl,
  ],
};

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductAPI } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient: HttpClient = inject(HttpClient);
  products: ProductAPI[] = [];
  baseUrl: string = 'https://fakestoreapi.com';
  constructor() {
    this.httpClient.get<ProductAPI[]>(`${this.baseUrl}/products`).subscribe({
      next: (result) => {
        console.log(result);
        this.products = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getProducts() {
    return this.httpClient.get<ProductAPI[]>(`${this.baseUrl}/products`);
  }

  getProduct(index: number) {
    return this.httpClient.get<ProductAPI>(`${this.baseUrl}/products/${index}`);
  }
}

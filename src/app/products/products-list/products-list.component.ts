import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAPI } from '../../services/product.model';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  router: Router = inject(Router);
  productsService: ProductsService = inject(ProductsService);
  products: Observable<ProductAPI[]> = new Observable();

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}

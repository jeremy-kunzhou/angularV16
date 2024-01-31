import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductAPI } from '../../services/product.model';
import { ProductsService } from '../../services/products.service';
import { MagnifierDirective } from '../../shared/magnifier.directive';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId?: number;
  product: Observable<ProductAPI> = new Observable();
  productsService: ProductsService = inject(ProductsService);

  activatedRouter: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.productId = this.activatedRouter.snapshot.params['id'];
    this.product = this.productsService.getProduct(this.productId!);
  }
}

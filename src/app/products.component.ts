import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  products = [];
  isDisabled = true;
  private productsSubscription: Subscription;
  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdate.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }
  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}


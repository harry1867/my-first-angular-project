import {Subject} from 'rxjs';

export class ProductsService {
  private  products = ['A Book'];
  productsUpdate = new Subject();
  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdate.next();
  }
  getProducts() {
    return [...this.products];
  }
}

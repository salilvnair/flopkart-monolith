import { Injectable } from '@angular/core';
import { Product } from '../home/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  products: Product[] = []

  constructor() {}


  storeProducts(product: Product) {
    this.products.push(product);
  }

  retrieveProducts():Product[] {
    return this.products;
  }

}

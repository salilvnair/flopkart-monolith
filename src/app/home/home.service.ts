import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { of } from 'rxjs';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn:'root'
})
export class HomeService {

  constructor(private storeService:StoreService){}

  loadProducts() {
    //as of now it is hardcoded we can make an rest api call and get the data too
    let products:Product[] = [
      {
        id:1,
        name:'Samsung Galaxy Note 7',
        description:'Warms up, can be used as Heater or Explosion',
        currency:'₹',
        imageUrl:'https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note7.jpg',
        price:'59999',
        rating:4
      },
      {
        id:2,
        name:'Samsung Galaxy Fold',
        description:'Peel the screen off to switch it off permanently',
        currency:'₹',
        imageUrl:'https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-fold.jpg',
        price:'1,40,790',
        rating:4
      },
      {
        id:3,
        name:'iPhone 6',
        description:'Block all outgoing calls without any additional settings',
        currency:'₹',
        imageUrl:'https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6-4.jpg',
        price:'30000',
        rating:4
      },
      {
        id:4,
        name:'Nokia Lumia 520',
        description:'Lets do something ironic, lets choose windows',
        currency:'₹',
        imageUrl:'https://cdn2.gsmarena.com/vv/bigpic/nokia-lumia-520.jpg',
        price:'7999',
        rating:4
      }
    ];
    return of<Product[]>(products);
  }

  addToCart(product: Product) {
    this.storeService.storeProducts(product);
  }

  retriveCartData() {
    return this.storeService.retrieveProducts();
  }


}

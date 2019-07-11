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
        name:'Redmi 6 Pro',
        description:'Black, 4GB RAM, 64GB Storage',
        currency:'₹',
        imageUrl:'https://m.media-amazon.com/images/I/81xl7IHBw-L._AC_UL436_.jpg',
        price:'10999',
        rating:4
      },
      {
        id:2,
        name:'Samsung Galaxy M10',
        description:'Ocean Blue, 2+16GB',
        currency:'₹',
        imageUrl:'https://m.media-amazon.com/images/I/613Os2k0a2L._AC_UL436_.jpg',
        price:'6990',
        rating:4
      },
      {
        id:3,
        name:'Nokia 105',
        description:'Ocean Blue, 2+16GB',
        currency:'₹',
        imageUrl:'https://m.media-amazon.com/images/I/51wrcikRDcL._AC_UL436_.jpg',
        price:'6990',
        rating:4
      },
      {
        id:4,
        name:'OnePlus 7',
        description:'Mirror Grey, 6GB RAM, 128GB Storage',
        currency:'₹',
        imageUrl:'https://m.media-amazon.com/images/I/51yWLNrJLVL._AC_UL436_.jpg',
        price:'32999',
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

import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Product } from '../home/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: Product[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataSource = this.homeService.retriveCartData();
  }

}

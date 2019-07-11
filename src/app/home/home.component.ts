import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: Product[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.homeService.loadProducts().subscribe(data=>{
      console.log(data);
      this.dataSource = data;
    })
  }

  addToCart(product: Product) {
    this.homeService.addToCart(product);
  }

}

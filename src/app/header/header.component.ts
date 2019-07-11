import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storeService:StoreService) { }

  ngOnInit() {
  }

}

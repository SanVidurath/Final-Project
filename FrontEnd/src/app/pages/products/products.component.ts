import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../../common/product-item/product-item.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProductInfo();
  }

  public listOfProducts: any = [];

  loadProductInfo() {
    this.http
      .get('http://localhost:8081/product/all')
      .subscribe((data) => (this.listOfProducts = data));
    
  }
}

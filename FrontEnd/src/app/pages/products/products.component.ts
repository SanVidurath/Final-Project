import { CommonModule } from '@angular/common';
import { Component,Inject,OnInit } from '@angular/core';
import { ProductItemComponent } from '../../common/product-item/product-item.component';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/ProductService';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private productService:ProductService){}

  filters = ['price', 'rating'];
  order = ['ascending', 'descending'];
  selectedFilter: string = '';
  selectedOrder: string = '';

  ngOnInit(): void {
    this.loadProductInfo();
  }

  loading: boolean = false;
  public listOfProducts: any = [];

  loadProductInfo() {
    this.productService.getAll().subscribe({
      next: (data:Product[]) => {
        this.listOfProducts = data;
        this.loading = false;
      },
      error: () => {
        this.loading = true;
      },
    });
  }

  onFilterChange(): void {
    if (!this.selectedFilter || !this.selectedOrder) return;
    
    const direction = this.selectedOrder === 'ascending' ? 1 : -1;

    this.listOfProducts.sort((a: Product, b: Product) => {
      switch (this.selectedFilter) {
        case 'price':
          return (a.price - b.price) * direction;
        case 'rating':
          return (a.rating.rate - b.rating.rate) * direction;

        default:
          return 0;
      }
    });
  }
}

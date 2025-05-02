import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CartService } from '../../service/CartService';
import { Product } from '../../models/Product';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input()
  public item:any;

  cartService = inject(CartService);


  addToCart(item: Product) {
    const added = this.cartService.addToCart(item);
    if (added) {
      Swal.fire('Success!','Added to cart!','success');
    } else {
      Swal.fire('Oops!','Item already in cart!', 'info');
    }
  }
}

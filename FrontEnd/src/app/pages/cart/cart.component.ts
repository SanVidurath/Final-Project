import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { CartService } from '../../service/CartService';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, MdbModalModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private router: Router,
    private modalService: MdbModalService
  ) {}
  storedProducts: Product[] = [];
  products: Product[] = [];
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  modalRefCustomer: MdbModalRef<AddCustomerComponent> | null = null;

  ngOnInit(): void {
    this.storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = this.cartService.getCart();
    this.products.forEach((product) => {
      const cartItem: CartItem = {
        id: product.id!,
        title: product.title,
        category: product.category,
        description: product.description,
        image: product.image,
        unitPrice: product.price,
        quantity: 1,
        rating: product.rating,
        finalPrice: product.price,
      };
      this.cartItems.push(cartItem);
      this.syncItems();
    });
    this.cartItems.forEach((item) => {
      this.updateFinalPrice(item);
    });
  }

  syncItems(): void {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  updateFinalPrice(item: CartItem) {
    if (item.quantity < 1) {
      Swal.fire('Error', 'Quantity cannot be less than 1', 'error');
      item.quantity = 1;
    }

    item.finalPrice = item.unitPrice * item.quantity;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (acc, item) => acc + (item.finalPrice || 0),
      0
    );
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.cartService.removeFromCart(index);
    this.syncItems();
    this.calculateTotalPrice();
  }

  // openModal() {
  //   if (this.totalPrice === 0) {
  //     Swal.fire('Error', 'Cart is empty', 'error');
  //     return;
  //   }
  //   this.modalRef = this.modalService.open(ModalComponent, {
  //     modalClass: 'modal-dialog-centered',
  //     data: {
  //       totalPrice: this.totalPrice,
  //       cartItems: this.cartItems,
  //     },

  //     backdrop: true,
  //     keyboard: false,
  //     ignoreBackdropClick: true,
  //   });
  // }

  openCustomerModal() {
    this.router.navigate(['/cart/customer']).then(() => {
      this.modalRefCustomer = this.modalService.open(AddCustomerComponent, {
        modalClass: 'modal-dialog-centered',
        backdrop: true,
        keyboard: false,
        ignoreBackdropClick: true,
      });

      this.modalRefCustomer.onClose.subscribe(() => {
        this.router.navigate(['/cart']);
      });
    });
  }
}

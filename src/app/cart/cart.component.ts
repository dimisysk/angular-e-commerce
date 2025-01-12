import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart = JSON.parse(localStorage.getItem('cart') || '[]');

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

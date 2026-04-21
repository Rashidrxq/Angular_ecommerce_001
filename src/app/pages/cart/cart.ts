import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get items() {
    return this.cartService.cartItems();
  }

  get total() {
    return this.cartService.cartTotal();
  }

  get count() {
    return this.cartService.cartCount();
  }

  get savings() {
    return Math.round(this.total * 0.1);
  }

  updateQty(id: number, qty: number) {
    this.cartService.updateQuantity(id, qty);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  checkout() {
    alert('🎉 Order placed successfully!\nThank you for shopping with ShopVibe!');
    this.cartService.clearCart();
  }
}

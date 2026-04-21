import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems = signal<CartItem[]>([]);

  cartItems = this._cartItems.asReadonly();

  cartCount = computed(() =>
    this._cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this._cartItems().reduce((total, item) => total + item.price * item.quantity, 0)
  );

  addToCart(product: any): void {
    const existing = this._cartItems().find((item) => item.id === product.id);
    if (existing) {
      this._cartItems.update((items) =>
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      this._cartItems.update((items) => [
        ...items,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ]);
    }
  }

  removeFromCart(id: number): void {
    this._cartItems.update((items) => items.filter((item) => item.id !== id));
  }

  updateQuantity(id: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    this._cartItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  clearCart(): void {
    this._cartItems.set([]);
  }
}
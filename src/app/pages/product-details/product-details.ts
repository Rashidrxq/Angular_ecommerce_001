import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { PRODUCTS, Product } from '../../data/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent {
  product: Product | undefined;
  quantity = signal(1);
  addedToCart = signal(false);
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find((p) => p.id === id);
    if (this.product) {
      this.relatedProducts = PRODUCTS.filter(
        (p) => p.category === this.product!.category && p.id !== id
      ).slice(0, 3);
    }
  }

  increment() {
    this.quantity.update((q) => Math.min(q + 1, 10));
  }

  decrement() {
    this.quantity.update((q) => Math.max(q - 1, 1));
  }

  addToCart() {
    if (!this.product) return;
    for (let i = 0; i < this.quantity(); i++) {
      this.cartService.addToCart(this.product);
    }
    this.addedToCart.set(true);
    setTimeout(() => this.addedToCart.set(false), 2000);
  }

  goBack() {
    this.location.back();
  }

  getStars(rating: number): string[] {
    return Array(5)
      .fill('')
      .map((_, i) => {
        if (i < Math.floor(rating)) return 'full';
        if (i < rating) return 'half';
        return 'empty';
      });
  }

  getDiscount(product: Product): number {
    if (!product.originalPrice) return 0;
    return Math.round((1 - product.price / product.originalPrice) * 100);
  }

  getBadgeClass(badge?: string): string {
    if (!badge) return '';
    return 'badge badge-' + badge.toLowerCase();
  }
}
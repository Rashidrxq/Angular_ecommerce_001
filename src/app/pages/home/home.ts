import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS, CATEGORIES, CATEGORY_ICONS, Product } from '../../data/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  featuredProducts = PRODUCTS.slice(0, 4);
  categories = CATEGORIES.filter((c) => c !== 'All');
  addedIds: Set<number> = new Set();

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.addedIds = new Set([...this.addedIds, product.id]);
    setTimeout(() => {
      const s = new Set(this.addedIds);
      s.delete(product.id);
      this.addedIds = s;
    }, 1800);
  }

  isAdded(id: number): boolean {
    return this.addedIds.has(id);
  }

  getCategoryIcon(cat: string): string {
    return CATEGORY_ICONS[cat] ?? '🏷️';
  }

  getBadgeClass(badge?: string): string {
    if (!badge) return '';
    return 'badge badge-' + badge.toLowerCase();
  }

  getDiscount(product: Product): number {
    if (!product.originalPrice) return 0;
    return Math.round((1 - product.price / product.originalPrice) * 100);
  }
}

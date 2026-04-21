import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS, CATEGORIES, Product } from '../../data/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  allProducts = PRODUCTS;
  categories = CATEGORIES;
  selectedCategory = signal('All');
  searchQuery = signal('');
  addedIds = signal<Set<number>>(new Set());

  filteredProducts = computed(() => {
    const cat = this.selectedCategory();
    const q = this.searchQuery().toLowerCase().trim();
    let list = this.allProducts;
    if (cat !== 'All') list = list.filter((p) => p.category === cat);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
    return list;
  });

  constructor(private cartService: CartService) {}

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    const s = new Set(this.addedIds());
    s.add(product.id);
    this.addedIds.set(new Set(s));
    setTimeout(() => {
      const s2 = new Set(this.addedIds());
      s2.delete(product.id);
      this.addedIds.set(new Set(s2));
    }, 1800);
  }

  isAdded(id: number): boolean {
    return this.addedIds().has(id);
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
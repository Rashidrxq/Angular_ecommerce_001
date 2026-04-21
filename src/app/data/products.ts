export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Classic White Tee',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&q=80',
    category: 'Clothing',
    description: 'Premium 100% cotton crew neck t-shirt. Soft, breathable fabric perfect for everyday wear. Relaxed fit with reinforced stitching for long-lasting durability. Machine washable.',
    rating: 4.5,
    reviews: 128,
    badge: 'Sale',
  },
  {
    id: 2,
    name: 'Street Sneakers',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&q=80',
    category: 'Footwear',
    description: 'Trendy street-style sneakers with superior cushioned sole. Lightweight mesh upper for breathability. Perfect for casual outings, streetwear looks, and light workouts.',
    rating: 4.7,
    reviews: 256,
    badge: 'Hot',
  },
  {
    id: 3,
    name: 'Luxury Timepiece',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&q=80',
    category: 'Accessories',
    description: 'Elegant stainless steel watch with sapphire crystal glass. Water-resistant up to 50 meters. Swiss automatic movement with 42-hour power reserve. A timeless statement piece.',
    rating: 4.9,
    reviews: 89,
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&q=80',
    category: 'Bags',
    description: 'Genuine full-grain leather backpack with multiple organized compartments. Padded laptop sleeve fits up to 15". Ergonomic shoulder straps. Perfect for work or weekend travel.',
    rating: 4.6,
    reviews: 174,
    badge: 'Sale',
  },
  {
    id: 5,
    name: 'Aviator Sunglasses',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&q=80',
    category: 'Accessories',
    description: 'Classic aviator sunglasses with 100% UV400 protection. Lightweight titanium frame with spring hinges. Polarized lenses reduce glare. Includes premium carry case.',
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 6,
    name: 'Pro Wireless Headphones',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&q=80',
    category: 'Electronics',
    description: 'Professional-grade wireless over-ear headphones. Hybrid active noise cancellation. 30-hour battery life. Hi-Res certified audio with 40mm dynamic drivers. Foldable design.',
    rating: 4.8,
    reviews: 412,
    badge: 'New',
  },
  {
    id: 7,
    name: 'Denim Jacket',
    price: 2199,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&q=80',
    category: 'Clothing',
    description: 'Classic denim jacket with a modern slim-tapered fit. Premium Japanese denim. Features chest pockets and button-front closure. Versatile piece that elevates any outfit.',
    rating: 4.3,
    reviews: 95,
    badge: 'Sale',
  },
  {
    id: 8,
    name: 'Smart Fitness Band',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&q=80',
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitor, blood oxygen sensor, and sleep analysis. 7-day battery. Water-resistant IP68. Works with iOS and Android.',
    rating: 4.2,
    reviews: 318,
    badge: 'New',
  },
];

export const CATEGORIES = ['All', 'Clothing', 'Footwear', 'Accessories', 'Bags', 'Electronics'];

export const CATEGORY_ICONS: Record<string, string> = {
  Clothing: '👕',
  Footwear: '👟',
  Accessories: '⌚',
  Bags: '🎒',
  Electronics: '🎧',
};
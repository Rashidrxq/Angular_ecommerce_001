import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { ProductDetailsComponent } from './pages/product-details/product-details';
import { CartComponent } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' },
];

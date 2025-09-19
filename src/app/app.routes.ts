import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/products/products';
import { ProductDetail } from './pages/products/product-detail/product-detail';
import { Contact } from './pages/contact/contact';
import { CartPage } from './pages/cart/cart.page';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  { path: 'products', component: Productos },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: CartPage },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

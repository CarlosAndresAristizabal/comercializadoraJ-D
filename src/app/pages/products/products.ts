import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { ProductCard } from '../../components/product-card/product-card';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  imports: [ProductCard, ToastComponent, CommonModule, NgFor],
  standalone: true,
  styleUrl: './products.css'
})
export class Productos {
  productos: Product[] = [];

  constructor(
    private productService: Products,
    private cart: CartService,
    private toast: ToastService,
    private router: Router
  ) {
    this.productos = this.productService.getProducts();
  }

  onDetail(product: Product) {
    console.log('Navegando a detalle de producto:', product);
    this.router.navigate(['/products', product.id]);
  }

  trackById(index: number, item: Product) {
    return item.id;
  }

  onAddToCart(product: Product) {
    console.log('[Productos] onAddToCart -> producto:', product);
    this.cart.add(product, 1);
    this.toast.show(`Añadido al carrito: ${product.name}`, 'success');
  }
}

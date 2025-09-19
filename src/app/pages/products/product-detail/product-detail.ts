import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products, Product } from '../../../services/products';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

import { CartService } from '../../../services/cart.service';
import { ToastService } from '../../../services/toast.service';
import { ToastComponent } from '../../../components/toast/toast.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ToastComponent]
})
export class ProductDetail {
  product?: Product;
  isAdding = false;

  constructor(
    private route: ActivatedRoute,
    private products: Products,
    private router: Router,
    private cart: CartService,
    private toast: ToastService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.getProducts().find(p => p.id === id);
    if (!this.product) {
      // si no existe, volver a la lista
      this.router.navigate(['/products']);
    }
  }

  goBack() {
    try {
      window.history.back();
    } catch (e) {
      this.router.navigate(['/products']);
    }
  }

  addToCart() {
    if (!this.product || this.isAdding) return;
    this.isAdding = true;
    this.cart.add(this.product, 1);
    this.toast.success(`¡${this.product.name} añadido al carrito!`);
    setTimeout(() => {
      this.isAdding = false;
    }, 1000);
  }

  checkout() {
    if (this.product) {
      this.cart.add(this.product, 1);
      this.toast.success(`¡${this.product.name} añadido al carrito!`);
    }
    this.cart.clear();
    this.toast.show('Gracias por tu compra. (Simulado)', 'success');
    this.router.navigate(['/products']);
  }
}

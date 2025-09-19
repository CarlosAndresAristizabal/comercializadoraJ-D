import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { CommonModule, NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { ToastComponent } from '../../components/toast/toast.component';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ToastComponent, CurrencyPipe],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.css'
})
export class CartPage {
  items: CartItem[] = [];
  subtotal = 0;
  private sub: any;

  constructor(private cart: CartService, private toast: ToastService, private router: Router) {
    // Suscribirse a cambios en el carrito para actualizar la vista en tiempo real
    this.sub = this.cart.items$.subscribe(items => {
      this.items = items;
      this.computeSubtotal();
    });
  }

  load() {
    this.items = this.cart.getItems();
    this.computeSubtotal();
  }

  increase(item: CartItem) {
    this.cart.add(item.product, 1);
    this.load();
  }

  decrease(item: CartItem) {
    if (item.quantity > 1) {
      // decrease by re-saving
      this.cart.add(item.product, -1);
    } else {
      this.cart.remove(item.product.id);
    }
    this.load();
  }

  clear() {
    this.cart.clear();
    this.load();
    this.toast.show('Carrito vaciado', 'info');
  }

  checkout() {
    // Simulación de checkout
    this.cart.clear();
    this.load();
    this.toast.show('Gracias por tu compra. (Simulado)', 'success');
    this.router.navigate(['/products']);
  }

  private computeSubtotal() {
    this.subtotal = this.items.reduce((s, i) => s + (i.product.price || 0) * i.quantity, 0);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

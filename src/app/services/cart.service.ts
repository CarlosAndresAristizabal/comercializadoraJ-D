import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

const STORAGE_KEY = 'comercializadora_cart_v1';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  // Observable stream of current cart items
  public items$ = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.load();
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      // emit updated items
      this.items$.next([...this.items]);
    } catch (e) {
      console.warn('No se pudo guardar el carrito en localStorage', e);
    }
  }

  private load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.items = raw ? JSON.parse(raw) : [];
      // Emitir estado inicial después de cargar para que los componentes suscritos reciban los items
      this.items$.next([...this.items]);
    } catch (e) {
      console.warn('No se pudo leer el carrito desde localStorage', e);
      this.items = [];
      this.items$.next([...this.items]);
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  add(product: Product, qty = 1) {
    const found = this.items.find(i => i.product.id === product.id);
    if (found) {
      found.quantity += qty;
      // remove if quantity is zero or less
      if (found.quantity <= 0) {
        this.items = this.items.filter(i => i.product.id !== product.id);
      }
    } else {
      if (qty > 0) {
        this.items.push({ product, quantity: qty });
      }
    }
    this.save();
  }

  remove(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }
}

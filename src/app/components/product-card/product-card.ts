import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../services/products';
import { CurrencyPipe, CommonModule, NgIf } from '@angular/common';
// ...existing code...
import { RouterModule } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  standalone: true,
  imports: [CommonModule, NgIf, CurrencyPipe, RouterModule]
})
export class ProductCard {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();
  adding = false;

  constructor() {}

  onAddToCart(event?: Event) {
    // evitar que el click en el botón burbujee hacia el enlace padre
    if (event) {
      const anyEv: any = event;
      if (typeof anyEv.stopImmediatePropagation === 'function') {
        anyEv.stopImmediatePropagation();
      }
      if (typeof anyEv.stopPropagation === 'function') {
        anyEv.stopPropagation();
      }
      if (typeof anyEv.preventDefault === 'function') {
        anyEv.preventDefault();
      }
    }

    if (this.adding) return;
    this.adding = true;
    this.add.emit(this.product);
    // mostrar estado 'añadido' brevemente
    setTimeout(() => {
      this.adding = false;
    }, 1200);
  }
}

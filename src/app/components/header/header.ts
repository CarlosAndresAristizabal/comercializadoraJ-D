
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {


  itemCount = 0;
  private sub?: Subscription;
  menuOpen = false;
  isMobile = false;

  constructor(private cart: CartService, private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }

  ngOnInit(): void {
    this.itemCount = this.cart.getItems().reduce((s, i) => s + i.quantity, 0);
    this.sub = this.cart.items$.subscribe(items => {
      this.itemCount = items.reduce((s, i) => s + i.quantity, 0);
    });
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    window.removeEventListener('resize', this.onResize);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onResize = () => {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  };
}

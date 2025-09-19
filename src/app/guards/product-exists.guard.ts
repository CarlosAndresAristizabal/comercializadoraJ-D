import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductExistsGuard implements CanActivate {
  constructor(private productService: ProductService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = Number(route.paramMap.get('id'));

    if (isNaN(id)) {
      this.router.navigate(['/products']);
      return new Observable(subscriber => subscriber.next(false));
    }

    return this.productService.getProductById(id).pipe(
      map(product => {
        if (!product) {
          this.router.navigate(['/products']);
          return false;
        }
        return true;
      })
    );
  }
}

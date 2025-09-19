import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { PRODUCTS, ProductCategory } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    // Inicializar productos
    this.loadProducts();
  }

  private loadProducts() {
    // Cargar productos desde datos estáticos
    this.products$.next(PRODUCTS);
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.products$.pipe(map(products => products.find(p => p.id === id)));
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.products$.pipe(
      map(products =>
        products.filter(
          p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.filter(p => 'category' in p && p.category === category))
    );
  }

  // Método para filtrar y ordenar productos
  filterProducts(options: {
    category?: ProductCategory;
    minPrice?: number;
    maxPrice?: number;
    query?: string;
  }): Observable<Product[]> {
    return this.products$.pipe(
      map(products => {
        let filtered = [...products];

        if (options.category) {
          filtered = filtered.filter(p => 'category' in p && p.category === options.category);
        }

        if (options.minPrice !== undefined) {
          filtered = filtered.filter(p => p.price >= options.minPrice!);
        }

        if (options.maxPrice !== undefined) {
          filtered = filtered.filter(p => p.price <= options.maxPrice!);
        }

        if (options.query) {
          const query = options.query.toLowerCase();
          filtered = filtered.filter(
            p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
          );
        }

        return filtered;
      })
    );
  }

  sortProducts(products: Product[], by: 'price' | 'name', direction: 'asc' | 'desc'): Product[] {
    return [...products].sort((a, b) => {
      const factor = direction === 'asc' ? 1 : -1;
      if (by === 'price') {
        return (a.price - b.price) * factor;
      }
      return a.name.localeCompare(b.name) * factor;
    });
  }
}

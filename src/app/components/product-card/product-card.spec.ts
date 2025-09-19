import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { Product } from '../../services/products';

describe('ProductCard', () => {
  let fixture: ComponentFixture<ProductCard>;
  let component: ProductCard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    component.product = { id: 1, name: 'X', price: 1, description: '', imageUrl: '' } as Product;
    fixture.detectChanges();
  });

  it('should emit add event when Add button clicked', done => {
    component.add.subscribe(p => {
      expect(p.id).toBe(1);
      done();
    });
    component.onAddToCart();
  });
});

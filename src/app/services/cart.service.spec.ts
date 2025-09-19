import { CartService } from './cart.service';
import { Products } from './products';

describe('CartService', () => {
  let cart: CartService;
  beforeEach(() => {
    // limpiar localStorage para evitar interferencia
    localStorage.clear();
    cart = new CartService();
  });

  it('should start empty', () => {
    expect(cart.getItems().length).toBe(0);
  });

  it('should add items and persist', () => {
    const product = { id: 999, name: 'Test', price: 1, description: '', imageUrl: '' } as any;
    cart.add(product, 2);
    const items = cart.getItems();
    expect(items.length).toBe(1);
    expect(items[0].quantity).toBe(2);
  });

  it('should clear items', () => {
    const product = { id: 999, name: 'Test', price: 1, description: '', imageUrl: '' } as any;
    cart.add(product, 1);
    cart.clear();
    expect(cart.getItems().length).toBe(0);
  });
});

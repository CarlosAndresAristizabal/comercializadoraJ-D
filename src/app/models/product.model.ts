import { BaseEntity } from './common.model';
import { ProductCategory } from '../data/products.data';

export interface Product extends BaseEntity {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category?: ProductCategory;
  featured?: boolean;
  stock?: number;
  discount?: number;
  rating?: number;
  brand?: string;
}

import { BaseEntity } from './common.model';
import { ProductCategory } from '../data/products.data';

export interface Product extends BaseEntity {
  name: string;
  price: number;
  description: string;
  imageUrl: string;

}

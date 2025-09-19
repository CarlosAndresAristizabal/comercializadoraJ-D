import { Product } from '../models/product.model';

// Definir categorías de productos
export type ProductCategory = 'licuadoras' | 'ventiladores' | 'planchas' | 'ollas';

export interface ProductWithCategory extends Product {
  category: ProductCategory;
}

export const PRODUCTS: ProductWithCategory[] = [
  {
    id: 1,
    name: 'Licuadora Samurai Innova',
    price: 90000.0,
    description:
      'Vaso plástico de 1.25 lt, seis velocidades y pulso, cuchillas removibles en acero inoxidable 500W',
    imageUrl: '/assets/img/licuadoraSamuraiInnova.jpeg',
    category: 'licuadoras'
  },
  {
    id: 2,
    name: 'Licuadora Faciclic',
    price: 90000.0,
    description:
      'Vaso plástico de 2 lt,2 velocidades y pulso, cuchillas removibles en acero inoxidable, 500W',
    imageUrl: '/assets/img/licuadoraSamuraiFaciclic.jpeg',
    category: 'licuadoras'
  },
  {
    id: 3,
    name: 'Licuadora Samurai Classic + vaso adicional',
    price: 90000.0,
    description:
      'Vaso plástico de 2 lt, 2 velocidades y pulso, cuchillas removibles en acero inoxidable , 500 W',
    imageUrl: '/assets/img/licuadoraSamuraiClassic.jpeg',
    category: 'licuadoras'
  },
  // ... más licuadoras ...
  {
    id: 10,
    name: 'Ventilador Air Protect 2 en 1',
    price: 90000.0,
    description:
      'Mallas seguras, base extra estable, función inclinaire, 3 velocidades, bajo consumo de energía.',
    imageUrl: '/assets/img/ventiladorAirProtect.jpeg',
    category: 'ventiladores'
  },
  // ... más ventiladores ...
  {
    id: 14,
    name: 'Plancha Samurai Aquaspeed',
    price: 90000.0,
    description:
      '20 salidas de vapor variable, función spray, suela antiadherente, sistema de autolimpieza.',
    imageUrl: '/assets/img/planchaSamuraiAquaspeed.jpeg',
    category: 'planchas'
  },
  // ... más planchas ...
  {
    id: 22,
    name: 'Olla de Presión Imusa Safe Plus',
    price: 90000.0,
    description: '4.5 Lt - 7 Lt - 10 Lt, acero inoxidable, apta para todo tipo de cocina.',
    imageUrl: '/assets/img/ollaPresionImusaSafePlus.jpeg',
    category: 'ollas'
  }
  // ... resto de productos ...
];

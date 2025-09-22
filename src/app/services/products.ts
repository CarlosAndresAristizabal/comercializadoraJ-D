import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      name: 'Licuadora Samurai Innova',
      price: 90000.0,
      description:
        'Vaso plástico de 1.25 lt, seis velocidades y pulso, cuchillas removibles en acero inoxidable 500W',
      imageUrl: '/assets/img/licuadoraSamuraiInnova.png'
    },
    {
      id: 2,
      name: 'Licuadora Faciclic',
      price: 90000.0,
      description:
        'Vaso plástico de 2 lt,2 velocidades y pulso, cuchillas removibles en acero inoxidable, 500W',
      imageUrl: '/assets/img/licuadoraSamuraiFaciclic.png'
    },
    {
      id: 3,
      name: 'Licuadora Samurai Classic + vaso adicional',
      price: 90000.0,
      description:
        'Vaso plástico de 2 lt, 2 velocidades y pulso, cuchillas removibles en acero inoxidable , 500 W',
      imageUrl: '/assets/img/licuadoraSamuraiClassic.png'
    },
    {
      id: 4,
      name: 'Licuadora Samurai Vitalite',
      price: 90000.0,
      description:
        'Vaso plástico de 1.25 lt, seis velocidades y pulso, cuchillas removibles en acero inoxidable 500W',
      imageUrl: '/assets/img/licuadoraSamuraiVitalite.png'
    },
    {
      id: 5,
      name: 'Licuadora Oster Clasica Cromada',
      price: 90000.0,
      description: 'Cromada, pica hielo, 1.25 lt, vaso vidrio 600 W, 3 aspas.',
      imageUrl: '/assets/img/licuadoraOsterClasicaCromada.jpeg'
    },
    {
      id: 6,
      name: 'Licuadora Oster Monterrey',
      price: 90000.0,
      description: '450 W, vaso plástico de 1.5 lt, 8 velocidades',
      imageUrl: '/assets/img/licuadoraOsterMonterrey.jpg'
    },
    {
      id: 7,
      name: 'Licuadora Oster Motor Resersible',
      price: 90000.0,
      description:
        '600 W, vaso vidrio de 1.5 lt,funciones automáticas pre programada, cuchilla 6 aspas',
      imageUrl: '/assets/img/licuadoraOsterMotorReversible.jpg'
    },
    {
      id: 8,
      name: 'Licuadora Oster 12 Velocidades',
      price: 90000.0,
      description:
        '450W, base niquelada y colores disponibles , base vidrio refractario, 1.25 lt,cuchilla en acero inoxidable.',
      imageUrl: '/assets/img/licuadoraOster12Velocidades.jpg'
    },
    {
      id: 9,
      name: 'Licuadora Universal ',
      price: 90000.0,
      description: 'Licuadora 400 W 3 velocidades.',
      imageUrl: '/assets/img/licuadoraUniversal.jpg'
    },
    {
      id: 10,
      name: 'Ventilador Air Protect 2 en 1',
      price: 90000.0,
      description:
        'Mallas seguras, base extra estable, función inclinaire, 3 velocidades, bajo consumo de energía.',
      imageUrl: '/assets/img/ventiladorAirProtect.jpeg'
    },
    {
      id: 11,
      name: 'Ventilador Turbo Silence 3 en 1 Repelente',
      price: 90000.0,
      description:
        'Dos veces mas flujo de aire, 3 veces mas silencioso, dispositivo para repelente en malla delantera.',
      imageUrl: '/assets/img/ventiladorTurboSilenceRepelente.jpeg'
    },
    {
      id: 12,
      name: 'Ventilador Turbo Silence 3 en 1',
      price: 90000.0,
      description: 'Dos veces mas flujo de aire, 3 veces mas silencioso.',
      imageUrl: '/assets/img/ventiladorTurboSilence.jpg'
    },
    {
      id: 13,
      name: 'Ventilador Turbo Silence FW-18',
      price: 90000.0,
      description:
        'De pared, cuerda para manejo de altura, 2 veces mas flujo de aire, 3 veces mas silencioso.',
      imageUrl: '/assets/img/ventiladorTurboSilenceFW.jpg'
    },
    {
      id: 14,
      name: 'Plancha Samurai Aquaspeed',
      price: 90000.0,
      description:
        '20 salidas de vapor variable, función spray, suela antiadherente, sistema de autolimpieza.',
      imageUrl: '/assets/img/planchaSamuraiAquaspeed.png'
    },
    {
      id: 15,
      name: 'Plancha Samurai Calore 2',
      price: 90000.0,
      description:
        '33 salidas de vapor variable, función spray, rociador incorporado, suela antiadherente.',
      imageUrl: '/assets/img/planchaSamuraiCalore.png'
    },
    {
      id: 16,
      name: 'Plancha Samurai Acces  15',
      price: 90000.0,
      description:
        '36 orificios de vapor variable y potente, función extra vapor, suela antiadherente, sistema de autolimpieza..',
      imageUrl: '/assets/img/planchaSamuraiAcces15.png'
    },
    {
      id: 17,
      name: 'Plancha Samurai Acces  30',
      price: 90000.0,
      description:
        '336 orificios de vapor variable y potente, avanzado sistema de autolimpieza, tanque de agua.',
      imageUrl: '/assets/img/planchaSamuraiAcces30.png'
    },
    {
      id: 18,
      name: 'Ventilador Universal 3 en 1',
      price: 90000.0,
      description:
        'Ventilador Universal 3 en 1 morado, 3 velocidades, oscilante, base extra estable.',
      imageUrl: '/assets/img/ventiladorUniversalMorado.jpg'
    },
    {
      id: 19,
      name: 'Ventilador Universal de Mesa',
      price: 90000.0,
      description: 'Ventilador de Mesa, 3 velocidades, oscilante, base extra estable.',
      imageUrl: '/assets/img/ventiladorUniversalMesa.jpg'
    },
    {
      id: 20,
      name: 'Ventilador Universal pared',
      price: 90000.0,
      description: 'Ventilador Universal de pared, 3 velocidades, oscilante, base extra estable.',
      imageUrl: '/assets/img/ventiladorUniversalPared.jpg'
    },
    {
      id: 21,
      name: 'Ventilador Universal Piso',
      price: 90000.0,
      description: 'Ventilador Universal de piso, 3 velocidades, oscilante, base extra estable.',
      imageUrl: '/assets/img/ventiladorUniversalPiso.jpg'
    },
    {
      id: 22,
      name: 'Olla de Presión Imusa Safe Plus',
      price: 90000.0,
      description: '4.5 Lt - 7 Lt - 10 Lt, acero inoxidable, apta para todo tipo de cocina.',
      imageUrl: '/assets/img/ollaPresionImusaSafePlus.jpg'
    },
    {
      id: 23,
      name: 'Olla de Presión Imusa EcoExpress',
      price: 90000.0,
      description: '4 Lt - 6 Lt, acero inoxidable, apta para todo tipo de cocina.',
      imageUrl: '/assets/img/ollaPresionImusaEcoExpress.jpg'
    },
    {
      id: 24,
      name: 'Olla de Presión Universal Nova',
      price: 90000.0,
      description: '4 Lt, acero inoxidable, apta para todo tipo de cocina.',
      imageUrl: '/assets/img/ollaPresionUniversalNova.jpg'
    },
    {
      id: 25,
      name: 'Bateria Luxury 8 piezas Imusa',
      price: 90000.0,
      description:
        'Descubre la excelencia culinaria con nuestra línea Talent. Juego de Ollas diseñada con materiales de primera calidad, esta línea ofrece un rendimiento superior en tu cocina. Su revestimiento antiadherente Triforce garantiza una cocción sin problemas y una limpieza fácil, mientras que su base difusora asegura una distribución uniforme del calor. Con la batería de cocina Talent cada comida se convierte en una obra maestra.',
      imageUrl: '/assets/img/bateriaImusaLuxury.jpg'
    },
    {
      id: 26,
      name: 'Olla Arrocera Paredes Seguras Samurai',
      price: 90000.0,
      description:
        ' Permite cocinar perfectamente cualquier tipo de arroz, garantiza una cocción perfecta del arroz. 2. Permite cocinar perfectamente cualquier tipo de arroz y cereal sin supervisión gracias a su función de cocción automática. 3. Cuando el arroz está listo pasa a la función de mantener caliente para conservar una temperatura ideal. 4. Cuenta con una capacidad de 1.8 litros. 5. Incluye cesta de vapor para cocinar saludablemente. Olla arrocera en acero inoxidable con capacidad de 5 tazas',
      imageUrl: '/assets/img/ollaArroceraSamurai.png'
    },
    {
      id: 27,
      name: 'Sanduchera Classic Imusa',
      price: 90000.0,
      description:
        ' La sanduchera Basic de IMUSA es antiadherente, fácil de limpiar y de almacenamiento vertical, ideal para preparar sándwiches. Cuenta con luces indicadoras de encendido y listo, además de un sistema de cierre seguro para mayor comodidad y seguridad al momento de preparar tus sándwiches.',
      imageUrl: '/assets/img/sanducheraClassicImusa.jpg'
    },
    {
      id: 28,
      name: 'Cafetera Classic Imusa',
      price: 90000.0,
      description:
        'Prepara café con la cafetera Perfectta de IMUSA, 600 ml, filtro permanente, fácil uso y diseño en acero inoxidable. La cafetera Perfectta de IMUSA es ideal para preparar hasta 5 tazas de café. Cuenta con un filtro permanente que no requiere el uso de papel, lo que la hace más económica y amigable con el medio ambiente. Su diseño en acero inoxidable le da un toque moderno y elegante a tu cocina. Además, es fácil de usar y limpiar, lo que la convierte en una excelente opción para los amantes del café.',
      imageUrl: '/assets/img/cafeteraClassicImusa.jpg'
    }
  ];
  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}

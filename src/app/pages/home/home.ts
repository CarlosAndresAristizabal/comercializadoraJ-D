import { Component } from '@angular/core';

import { PromoCardComponent } from '../../components/promo-card/promo-card';
import { CarruselMarcas } from '../../assets/carrusel-marcas/carrusel-marcas';

@Component({
  selector: 'app-home',
  imports: [PromoCardComponent, CarruselMarcas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}

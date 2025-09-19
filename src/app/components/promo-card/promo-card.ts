import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.html',
  styleUrls: ['./promo-card.css']
})
export class PromoCardComponent {
  @Input() bgImage: string = '/assets/img/logoPrincipal.jpg';

  constructor() {}
}

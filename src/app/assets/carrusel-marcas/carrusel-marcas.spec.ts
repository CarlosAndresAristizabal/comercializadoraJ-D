import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselMarcas } from './carrusel-marcas';

describe('CarruselMarcas', () => {
  let component: CarruselMarcas;
  let fixture: ComponentFixture<CarruselMarcas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselMarcas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselMarcas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

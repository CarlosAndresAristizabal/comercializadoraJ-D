import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage();
          }
        });
      },
      {
        rootMargin: '50px'
      }
    );
  }

  ngAfterViewInit() {
    const element = this.el.nativeElement;

    // Guardar la URL original
    const originalSrc = element.src;
    // Usar un placeholder mientras carga
    element.src = '/assets/placeholder.jpeg';
    // Mover la URL original a un data attribute
    element.dataset.src = originalSrc;

    // Observar el elemento
    this.observer.observe(element);
  }

  private loadImage() {
    const element = this.el.nativeElement;
    if (element.dataset.src) {
      element.src = element.dataset.src;
      element.classList.add('loaded');
      // Dejar de observar una vez cargada
      this.observer.unobserve(element);
    }
  }

  @HostListener('error')
  onError() {
    const element = this.el.nativeElement;
    element.src = '/assets/error-placeholder.jpeg';
    this.observer.unobserve(element);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}

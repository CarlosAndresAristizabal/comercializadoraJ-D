import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  private errors = new BehaviorSubject<string[]>([]);
  readonly errors$ = this.errors.asObservable();

  constructor(private toast: ToastService) {}

  /**
   * Maneja un error y opcionalmente muestra un toast
   * @param error El error a manejar
   * @param showToast Si se debe mostrar un toast
   * @returns true si el error fue manejado correctamente
   */
  handleError(error: unknown, showToast = true): boolean {
    try {
      let message = 'Ha ocurrido un error';

      if (typeof error === 'string') {
        message = error;
      } else if (error instanceof Error) {
        message = error.message;
      } else if (
        error &&
        typeof error === 'object' &&
        'error' in error &&
        error.error &&
        typeof error.error === 'object' &&
        'message' in error.error
      ) {
        message = String(error.error.message);
      }

      const currentErrors = this.errors.value;
      this.errors.next([...currentErrors, message]);

      if (showToast) {
        this.toast.show(message, 'error');
      }

      // Log para debugging
      console.error('Error manejado:', error);

      return true;
    } catch (e) {
      console.error('Error al manejar error:', e);
      return false;
    }
  }

  clearErrors() {
    this.errors.next([]);
  }

  hasErrors(): boolean {
    return this.errors.value.length > 0;
  }

  getLastError(): string | null {
    const errors = this.errors.value;
    return errors.length > 0 ? errors[errors.length - 1] : null;
  }
}

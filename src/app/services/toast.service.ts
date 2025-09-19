import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ToastMessage {
  text: string;
  type?: 'info' | 'success' | 'error';
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private subject = new Subject<ToastMessage>();
  private id = 1;
  private duration = 3000; // duración por defecto: 3 segundos

  get messages(): Observable<ToastMessage> {
    return this.subject.asObservable();
  }

  /**
   * Muestra un mensaje toast
   * @param text Texto del mensaje
   * @param type Tipo de mensaje
   * @param duration Duración en ms (opcional)
   */
  show(text: string, type: 'info' | 'success' | 'error' = 'info', duration?: number) {
    const msg: ToastMessage = { text, type, id: this.id++ };
    this.subject.next(msg);

    // Auto-ocultar después de la duración especificada
    if (duration || this.duration) {
      setTimeout(() => {
        // Enviar mensaje vacío con el mismo ID para ocultarlo
        this.subject.next({ ...msg, text: '' });
      }, duration || this.duration);
    }
  }

  /**
   * Muestra un mensaje de éxito
   */
  success(text: string, duration?: number) {
    this.show(text, 'success', duration);
  }

  /**
   * Muestra un mensaje de error
   */
  error(text: string, duration?: number) {
    this.show(text, 'error', duration);
  }

  /**
   * Muestra un mensaje informativo
   */
  info(text: string, duration?: number) {
    this.show(text, 'info', duration);
  }

  /**
   * Configura la duración por defecto de los toasts
   */
  setDefaultDuration(duration: number) {
    this.duration = duration;
  }
}

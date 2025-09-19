import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  private phonePattern = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

  validateEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  validatePhone(phone: string): boolean {
    return this.phonePattern.test(phone);
  }

  validateRequired(value: any): boolean {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  }

  validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  validateNumericRange(value: number, min?: number, max?: number): boolean {
    if (min !== undefined && value < min) return false;
    if (max !== undefined && value > max) return false;
    return true;
  }

  getErrorMessage(error: string): string {
    const messages: { [key: string]: string } = {
      required: 'Este campo es obligatorio',
      email: 'Debe ser un email válido',
      phone: 'Debe ser un teléfono válido',
      minlength: 'La longitud es muy corta',
      maxlength: 'La longitud es muy larga',
      min: 'El valor es muy bajo',
      max: 'El valor es muy alto'
    };
    return messages[error] || 'Error de validación';
  }
}

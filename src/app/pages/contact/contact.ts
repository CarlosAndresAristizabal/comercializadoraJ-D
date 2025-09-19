import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  constructor(private toast: ToastService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.toast.show('Por favor completa los campos requeridos', 'error');
      return;
    }

    // Aquí podrías enviar a una API. Simulamos éxito.
    this.toast.show('Mensaje enviado. Gracias por contactarnos.', 'success');
    form.resetForm();
  }
}

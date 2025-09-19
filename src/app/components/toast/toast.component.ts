import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  messages: Array<ToastMessage & { visible?: boolean }> = [];
  sub: Subscription;

  constructor(private toast: ToastService) {
    this.sub = this.toast.messages.subscribe(m => this.push(m));
  }

  push(m: ToastMessage) {
    const msg = { ...m, visible: false };
    this.messages.push(msg);
    // activar animación de entrada
    setTimeout(() => (msg.visible = true), 10);
    // ocultar y remover después
    setTimeout(() => {
      msg.visible = false;
      setTimeout(() => this.remove(m.id!), 400);
    }, 3000);
  }

  remove(id: number) {
    this.messages = this.messages.filter(x => x.id !== id);
  }
}

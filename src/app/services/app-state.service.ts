import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppState {
  isLoading: boolean;
  darkMode: boolean;
  error: string | null;
}

const initialState: AppState = {
  isLoading: false,
  darkMode: false,
  error: null
};

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private state = new BehaviorSubject<AppState>(initialState);
  readonly state$ = this.state.asObservable();

  constructor() {
    // Cargar preferencias guardadas
    this.loadSavedState();
  }

  private loadSavedState() {
    try {
      const saved = localStorage.getItem('app_state');
      if (saved) {
        const parsedState = JSON.parse(saved);
        this.state.next({
          ...initialState,
          ...parsedState
        });
      }
    } catch (e) {
      console.warn('Error cargando estado de la app:', e);
    }
  }

  private saveState() {
    try {
      localStorage.setItem('app_state', JSON.stringify(this.state.value));
    } catch (e) {
      console.warn('Error guardando estado de la app:', e);
    }
  }

  setLoading(isLoading: boolean) {
    this.state.next({
      ...this.state.value,
      isLoading
    });
  }

  setError(error: string | null) {
    this.state.next({
      ...this.state.value,
      error
    });
  }

  toggleDarkMode() {
    const newState = {
      ...this.state.value,
      darkMode: !this.state.value.darkMode
    };
    this.state.next(newState);
    this.saveState();
  }

  resetState() {
    this.state.next(initialState);
    this.saveState();
  }
}

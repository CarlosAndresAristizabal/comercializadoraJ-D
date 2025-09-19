import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { AppStateService } from '../services/app-state.service';
import { ErrorHandlingService } from '../services/error-handling.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(
    private appState: AppStateService,
    private errorHandler: ErrorHandlingService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.activeRequests++;
    this.appState.setLoading(true);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ha ocurrido un error en la solicitud';

        if (error.error instanceof ErrorEvent) {
          // Error del cliente
          errorMessage = error.error.message;
        } else {
          // Error del servidor
          errorMessage = error.status === 0
            ? 'No hay conexión con el servidor'
            : `${error.status}: ${error.error?.message || error.statusText}`;
        }

        this.errorHandler.handleError(errorMessage);
        return throwError(() => new Error(errorMessage));
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.appState.setLoading(false);
        }
      })
    );
  }
}

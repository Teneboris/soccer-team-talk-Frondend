import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.authService.getToken();
    if(authToken){

      // Clone the request and set the new header.
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      // Pass the cloned request instead of the original request to the next handle
      return next.handle(authReq)
    }
    // If there is no token, pass the original request
  return next.handle(request).pipe(
    catchError(error => {
      if (error.status === 401 && this.authService.getRefreshToken()) {
        return this.authService.refreshToken(this.authService.getRefreshToken()).pipe(
          switchMap((response: any) => {
            this.authService.SaveRefreshToken(response.accessToken);
            const clonedRequest = request.clone({
              setHeaders: {
                Authorization: `Bearer ${response.accessToken}`
              }
            });
            return next.handle(clonedRequest);
          }),
          catchError(err => {
            // Logout or handle token refresh failure
            this.authService.logout();
            return throwError(err);
          })
        );
      } else {
        return throwError(error);
      }
    })
  );
  }
}

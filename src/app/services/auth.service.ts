import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey: string = 'authToken';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password:string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify({username, password});
    return this.http.post<any>(`${this.apiUrl}/signin`, body, { headers })
      .pipe(
      map(response => {
        if(response.token) {
          this.saveToken(response.token);
          this.router.navigate(['training']);
        }
        return response;
      }),
        catchError(error => {
          console.error('login failed', error);
          throw error;
        })
      );
  }

  refreshToken(refreshToken: string | null): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, { refreshToken });
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  SaveRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken')
  }

  getToken(): string | null {
   return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login'])
  }

}

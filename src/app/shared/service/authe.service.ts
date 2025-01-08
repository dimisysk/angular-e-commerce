import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

export interface LoggedInUser {
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  router: Router = inject(Router);

  user = signal<LoggedInUser | null>(null);

  constructor(private http: HttpClient) {
    // Αρχικοποίηση του user από το token, αν υπάρχει
    const token = this.getToken();
    if (token) {
      const decodedToken = this.decodeToken();
      if (decodedToken) {
        this.user.set({
          username: decodedToken.sub,
          role: decodedToken.role,
        });
      }
    }

    // Παρακολούθηση αλλαγών του user
    effect(() => {
      if (this.user()) {
        console.log('User logged in:', this.user());
      } else {
        console.log('No user logged in');
      }
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
    const decodedToken = this.decodeToken();
    if (decodedToken) {
      this.user.set({
        username: decodedToken.sub,
        role: decodedToken.role,
      });
    }
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.user.set(null);
    this.router.navigate(['home']);
  }

  decodeToken(): { sub: string; role: string } | null {
    const token = this.getToken();
    if (token) {
      return jwtDecode<{ sub: string; role: string }>(token);
    }
    return null;
  }
}

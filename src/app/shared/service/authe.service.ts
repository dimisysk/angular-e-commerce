import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

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
  http: HttpClient = inject(HttpClient);

  user = signal<LoggedInUser | null>(null);

  constructor() {
    const token = localStorage.getItem('jwtToken')
    
    // if (token) {
    //   const decodedToken = jwtDecode(token).sub as unknown as LoggedInUser
    //     this.user.set({
    //       username: decodedToken.username,
    //       role: decodedToken.role,
    //     });

        effect(() => {
          if (this.user()) {
            console.log('User logged in:', this.user().username, this.user().role);
          } else {
            console.log('No user logged in');
          }
        });
     
      }

      decodeToken(): { sub: string; role: string } | null {
        const token = localStorage.getItem("jwtToken")
        if (token) {
          try {
            const decodedToken = jwtDecode<any>(token); // Αποκωδικοποίηση του token
            return {
              sub: decodedToken.sub, // Το subject (username)
              role: decodedToken.role, // Το role από τις claims
            };
          } catch (error) {
            console.error('Invalid token format:', error);
            return null;
          }
        }
        return null;
      }
      
    


      createCustomer(customer: any): Observable<any> {
        return this.http.post<any>('http://localhost:8080/api/customers/create', customer);
      }
      
      

  login(credentials: { username: string; password: string }) {
    return this.http.post<{ token: string }>(
      `${this.baseUrl}/authenticate`,
      credentials
    );
  }




  logout(): void {
    localStorage.removeItem('jwtToken');
    this.user.set(null);
    this.router.navigate(['home']);
  }

  }


   


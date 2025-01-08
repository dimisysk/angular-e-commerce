import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/authe.service';
import {jwtDecode} from 'jwt-decode'
import { LoggedInUser } from 'src/app/shared/interfaces/customer';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  invalidLogin = false;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8,}$'
      ),
    ]),
  });

  onSubmit() {
    const credentials = this.form.value;
    if (credentials.username && credentials.password) {
      this.authService.login(credentials.username, credentials.password).subscribe({
        next: (response) => {
          const token = response.jwtToken;
          this.authService.saveToken(token);

          const decodedToken = this.authService.decodeToken();
          console.log('Decoded Token:', decodedToken);

          if (decodedToken?.role === 'CUSTOMER') {
            this.router.navigate(['customer-dashboard']);
          } else if (decodedToken?.role === 'ADMIN') {
            this.router.navigate(['admin-dashboard']);
          }
        },
        error: (error) => {
          console.error('Login Error:', error);
          this.invalidLogin = true;
        },
      });
    }
  }
}
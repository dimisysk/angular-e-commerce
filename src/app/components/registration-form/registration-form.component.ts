import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/service/authe.service';
import { CustomersService } from 'src/app/shared/service/customers.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/shared/service/user.service';
import { Customer } from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  custmerService = inject(CustomersService);
  authService = inject(AuthService);
  userService = inject(UserService)

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet',
  };

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[\\W_]).{8,}$'),
    ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    ssn: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    addressNumber: new FormControl('', Validators.required),
    city:  new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    discountCardNumber:  new FormControl('', Validators.required),
  },
  this.passwordConfirmsValidator,
);
passwordConfirmsValidator(form: FormGroup) {
  if (form.get('password').value !== form.get('confirmPassword').value) {
    form.get('confirmPassword').setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
  return {};
}

onSubmit(value: any) {
  console.log(value);
  console.log('Form Value:', value);

  const customer = this.form.value as Customer;
  delete customer['confirmPassword'];
  this.custmerService.createCustomer(customer).subscribe({
    next: (response) => {
      console.log('User registered successfully', response);
      this.registrationStatus = { success: true, message: `Customer ${response.firstName} ${response.lastName} registered successfully!`,};
    },
    error: (error) => {
      const code = error.error?.code || 'UnknownError';
      const message = error.error?.message || 'An unexpected error occurred';
      console.error('Error registering customer:', code, message);
      this.registrationStatus = { success: false, message };
    },
  });
}




checkDuplicateUsername() {
  const username = this.form.get('username')?.value;

  if (!username) return;

  this.userService.checkDuplicateUsername(username).subscribe({
    next: (response) => {
      console.log(response.msg);
      this.form.get('username')?.setErrors(null);
    },
    error: (response) => {
      const message = response.error.msg;
      console.log(message);
      this.form.get('username')?.setErrors({ duplicateUsername: true });
    },
  });
}


}

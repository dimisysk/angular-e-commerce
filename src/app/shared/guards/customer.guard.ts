import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/authe.service'; 
import { Router } from '@angular/router';

export const customerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const decodedToken = authService.decodeToken();
  console.log('Guard - Decoded Token:', decodedToken);
  if (decodedToken?.role === 'CUSTOMER') {
    return true; 
  } else {
    console.log('Guard - Access denied');
    router.navigate(['/not-authorized']); 
    return false;
  }
};

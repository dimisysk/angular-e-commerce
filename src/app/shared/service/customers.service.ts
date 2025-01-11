import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getCustomerById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }


  

  updateCustomer(id: number, customer: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

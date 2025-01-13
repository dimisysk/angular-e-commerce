import { Injectable } from '@angular/core';
import { User,PaginatedResponse, CustomerInsertDTO } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerReadOnlyDTO } from '../interfaces/user'; 


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<PaginatedResponse<CustomerReadOnlyDTO>> {
    return this.http.get<PaginatedResponse<CustomerReadOnlyDTO>>(`${this.baseUrl}`);
  }
  getCustomerById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getFilteredCustomers(filters: any): Observable<CustomerReadOnlyDTO[]> {
    return this.http.post<CustomerReadOnlyDTO[]>(
      `${this.baseUrl}/all`,
      filters
    );
  }
  



  updateCustomer(id: number, customer: CustomerInsertDTO): Observable<CustomerInsertDTO> {
    return this.http.put<CustomerInsertDTO>(`${this.baseUrl}/${id}`, customer);
  }
  

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/service/customers.service'; 
import { CustomerReadOnlyDTO } from '../shared/interfaces/user'; 

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers: CustomerReadOnlyDTO[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customersService.getAllCustomers().subscribe({
      next: (data) => {
        console.log('Customers data:', data); 
        this.customers = data.content; 
      },
      error: (err) => console.error('Error loading customers', err),
    });
  
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.customers.sort((a, b) => {
      const valueA = this.getValueByColumn(a, column);
      const valueB = this.getValueByColumn(b, column);

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  sortSign(column: string): string {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? '↑' : '↓';
    }
    return '';
  }

  getValueByColumn(customer: CustomerReadOnlyDTO, column: string): any {
    return column === 'id' ? customer.user.id : (customer.user as any)[column];
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customersService.deleteCustomer(id).subscribe({
        next: () => {
          alert('Customer deleted successfully');
          this.loadCustomers(); 
        },
        error: (err) => console.error('Error deleting customer', err),
      });
    }
  }
  

  editCustomer(customer: CustomerReadOnlyDTO): void {
    console.log('Edit customer', customer);
  }
}

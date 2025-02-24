import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';  
import { CustomersService } from 'src/app/shared/service/customers.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  template: `
    <div>
      <h2>Customers</h2>
      <ul>
        <li *ngFor="let customer of customers">
          {{ customer.firstName }} {{ customer.lastName }}
        </li>
      </ul>
    </div>
  `,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: User[] = [];

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customersService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}

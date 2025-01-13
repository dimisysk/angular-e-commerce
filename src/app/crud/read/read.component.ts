import { Component, OnInit } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { CustomerInsertDTO } from 'src/app/shared/interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/shared/service/customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-read',
  standalone:true,
  imports: [CrudNavbarComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

}

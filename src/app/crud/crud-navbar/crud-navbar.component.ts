import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-crud-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './crud-navbar.component.html',
  styleUrl: './crud-navbar.component.css'
})
export class CrudNavbarComponent {

}

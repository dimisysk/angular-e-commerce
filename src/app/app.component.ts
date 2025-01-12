import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { CrudNavbarComponent } from "./crud/crud-navbar/crud-navbar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    CrudNavbarComponent,
    CommonModule,
    FooterComponent,
    CrudNavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-project';
}

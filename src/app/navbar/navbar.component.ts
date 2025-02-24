import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/shared/service/authe.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  authService = inject(AuthService);
  user = this.authService.user;

  logout() {
    this.authService.logout();
  }
}


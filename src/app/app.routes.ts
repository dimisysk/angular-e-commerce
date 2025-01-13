import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './crud/dashboard/dashboard.component';
import { CreateComponent } from './crud/create/create.component';
import { ReadComponent } from './crud/read/read.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { customerGuard } from './shared/guards/customer.guard';
import { adminGuard } from './shared/guards/adnin.guard';
import { customerOrAdminGuard } from './shared/guards/customer-or-admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'customer/dashboard',
    component: DashboardComponent,
    canActivate: [ customerOrAdminGuard],
  },
  {
    path: 'crud/create',
    component: CreateComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'crud/read',
    component: ReadComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'customers/update/:id',
    component: UpdateComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'crud/delete',
    component: DeleteComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'customer/get-all',
    component: CustomerListComponent,
    canActivate: [adminGuard],
  },
  { path: '**', redirectTo: 'not-authorized' },
];

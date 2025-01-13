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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationFormComponent },
  {path: 'footer', component: FooterComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'crud/dashboard',
    component: DashboardComponent
    
  },
  {
    path: 'crud/create',
    component: CreateComponent
  },
  {
    path: 'crud/read',
    component: ReadComponent,
    
  },
  {
    path: 'customers/update/:id',
    component: UpdateComponent,
  },
  {
    path: 'crud/delete',
    component: DeleteComponent,
  },
  {path: 'customer/get-all', component: CustomerListComponent},
  { path: '**', redirectTo: '' }
];

import {Routes} from '@angular/router';
import {RegisterComponent} from './components/auth/register/register.component';
// import { SigninComponent } from './pages/signin/signin.component';

// import { DeliveryComponent } from './pages/delivery/delivery.component';
// import { MenuComponent } from './pages/menu/menu.component';
// import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

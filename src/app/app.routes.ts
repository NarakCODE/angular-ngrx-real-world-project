import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';

import { DeliveryComponent } from './pages/delivery/delivery.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

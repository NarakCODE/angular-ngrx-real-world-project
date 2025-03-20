import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FormComponent } from './form/form.component';
import { MessageViewComponent } from './pages/message-view/message-view.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'message/:messageId',
    component: MessageViewComponent,
  },
];

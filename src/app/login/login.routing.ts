import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {  path: '', component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/dashboard/dashboard.module').then((m) => m.DashboardModule),
    component: DashboardComponent
  }
];

export const LoginRoutes = RouterModule.forChild(routes);

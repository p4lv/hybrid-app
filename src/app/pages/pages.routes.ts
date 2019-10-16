import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('@src/app/pages/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@src/app/pages/login/login.module').then(mod => mod.LoginModule),
  },
];

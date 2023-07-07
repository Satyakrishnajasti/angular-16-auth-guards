import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Home1Component } from './home1/home1.component';
import { childGuard } from './child.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
    canActivateChild: [childGuard],
    children: [
      {
        path: '',
        component: Home1Component,
        pathMatch: 'full',
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { Home1Component } from './home1/home1.component';
import { childGuard } from './child.guard';
import { deactivateGuard } from './deactivate.guard';
import { matchGuard } from './match.guard';
import { Home2Component } from './home2/home2.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home1/home1.component').then((m) => m.Home1Component),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home2/home2.component').then((m) => m.Home2Component),
    canMatch: [matchGuard],
  },
  {
    path: 'hello',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
    // canActivateChild: [childGuard],
    // children: [
    //   {
    //     path: '',
    //     component: Home1Component,
    //     pathMatch: 'full',
    //   },
    // ],
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/form.component').then((m) => m.FormComponent),
    canDeactivate: [deactivateGuard],
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./calculadora/calculadora.page').then( m => m.CalculadoraPage)
  },
  {
    path: 'resultado',
    loadComponent: () => import('./resultado/resultado.page').then( m => m.ResultadoPage)
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.page').then( m => m.TestPage)
  },
];

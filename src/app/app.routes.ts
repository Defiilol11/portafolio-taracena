import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PortfolioComponent } from './pages/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: PortfolioComponent },
  { path: '**', redirectTo: '' },
];

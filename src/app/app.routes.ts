import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PortfolioComponent } from './pages/portfolio/portfolio';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: PortfolioComponent },
  { path: 'proyectos/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' },
];

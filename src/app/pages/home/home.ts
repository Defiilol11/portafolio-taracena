import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ExpertiseComponent } from '../../components/expertise/expertise';
import { ExperienceComponent } from '../../components/experience/experience';
import { ProjectsComponent } from '../../components/projects/projects';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExpertiseComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-expertise></app-expertise>
    <app-experience></app-experience>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `,
})
export class HomeComponent {}

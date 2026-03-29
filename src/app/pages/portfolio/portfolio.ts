import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = PROJECTS;
    window.scrollTo(0, 0);
  }
}

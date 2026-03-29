import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  safeEmbedUrl?: SafeResourceUrl;
  private sanitizer = inject(DomSanitizer);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.project = PROJECTS.find((p) => p.id === id);
        if (!this.project) {
          this.router.navigate(['/proyectos']);
        } else if (this.project.embedUrl) {
          this.safeEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.embedUrl);
        }
      }
    });
  }
}

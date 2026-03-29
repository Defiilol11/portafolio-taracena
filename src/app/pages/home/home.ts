import { Component, AfterViewInit } from '@angular/core';
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
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initRevealOnScroll();
    this.initParallaxHeroBgText();
  }

  private initRevealOnScroll() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
          }
        });
      },
      { threshold: 0.12 },
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal, .timeline-item').forEach((el) => obs.observe(el));
    }, 100);
  }

  private initParallaxHeroBgText() {
    const bgText = document.querySelector<HTMLElement>('.hero-bg-text');
    if (!bgText) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      bgText.style.transform = `translate(-50%, calc(-50% + ${y * 0.3}px))`;
    });
  }
}

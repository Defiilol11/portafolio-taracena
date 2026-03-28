import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExpertiseComponent } from './components/expertise/expertise';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExpertiseComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initCursor();
    this.initNavbarScroll();
    this.initRevealOnScroll();
    this.initParallaxHeroBgText();
  }

  private initCursor() {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    setTimeout(() => {
      const hoverables = document.querySelectorAll('a, button, .expertise-card, .project-card');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          ring.style.width = '60px';
          ring.style.height = '60px';
          ring.style.opacity = '0.5';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.width = '10px';
          cursor.style.height = '10px';
          ring.style.width = '36px';
          ring.style.height = '36px';
          ring.style.opacity = '1';
        });
      });
    }, 500);
  }

  private initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
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

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Re-initialize animations and scroll behavior on route changes
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      setTimeout(() => {
        this.initRevealOnScroll();
        window.scrollTo(0, 0); // Ensure smooth scroll top on route changes
      }, 100);
    });
  }

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

      // Magnetic 3D tilt effect on interactive cards
      const target = e.target as HTMLElement;
      const card = target.closest('.project-card, .expertise-card, .gallery-item') as HTMLElement;

      // reset others
      document.querySelectorAll('.project-card, .expertise-card, .gallery-item').forEach((el) => {
        if (el !== card) {
          (el as HTMLElement).style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
      });

      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.project-card, .expertise-card, .gallery-item') as HTMLElement;
      if (card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    });

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.expertise-card') ||
        target.closest('.project-card') ||
        target.closest('.btn')
      ) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.opacity = '0.5';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.expertise-card') ||
        target.closest('.project-card') ||
        target.closest('.btn')
      ) {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '1';
      }
    });
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

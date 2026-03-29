import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initCursor();
    this.initNavbarScroll();
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
}

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode = prefersDark.matches;
      this.applyTheme();

      prefersDark.addEventListener('change', (e) => {
        this.isDarkMode = e.matches;
        this.applyTheme();
      });
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // Modo Oscuro: El usuario proporcionó primero un enlace (minimalwhite) para claro y otro (minimalblack) para oscuro.
        if (favicon) favicon.href = 'https://i.ibb.co/Gf3dmGJ6/minimalblack.png';
      } else {
        document.documentElement.removeAttribute('data-theme');
        // Modo Claro
        if (favicon) favicon.href = 'https://i.ibb.co/ZpvBMbFT/minimalwhite.png';
      }
    }
  }
}

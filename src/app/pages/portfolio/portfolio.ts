import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class PortfolioComponent implements OnInit {
  activeCategory: string = 'all';

  categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Desarrollo Web' },
    { id: 'data', name: 'Data & BI' },
  ];

  projects = [
    {
      id: 1,
      title: 'Deffavia Systems',
      category: 'web',
      image: 'https://i.ibb.co/yc4x4kFC/Screenshot-2026-03-29-113600.png',
      images: [
        'https://i.ibb.co/yc4x4kFC/Screenshot-2026-03-29-113600.png',
        'https://i.ibb.co/7dyBXwyW/Screenshot-2026-03-29-113757.png',
      ],
      description:
        'Sistema integral de gestión operativa para aviación civil. Control de vuelos, tripulaciones, horas de servicio y mantenimiento aeronáutico.',
      tech: ['Full-Stack', 'Logística', 'Arquitectura'],
      demoUrl: null,
      githubUrl: 'https://github.com/Defiilol11/deffavia',
    },
    {
      id: 2,
      title: 'Defii Music Store',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80', // Replace with a screenshot of the site when hosted or running locally
      description:
        'Aplicación web progresiva MVC para una tienda musical. Incluye área de cliente para el catálogo, y un Dashboard de administración para gestionar ventas, artistas, géneros y gráficos interactivos.',
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Tailwind CSS'],
      demoUrl: 'https://youtu.be/O5ieXP3SCkQ',
      githubUrl: 'https://github.com/Defiilol11/MvcMusicStoreDefii',
    },
    {
      id: 3,
      title: 'API Microblogging',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80',
      description:
        'Backend estilo Twitter con Node.js y Express. Arquitectura RESTful con autenticación segura vía JWT, sistema de follows, likes, feed personalizado y documentación interactiva con Swagger.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      demoUrl: null,
      githubUrl: 'https://github.com/Defiilol11/Express-API-blog',
    },
    {
      id: 4,
      title: 'Dashboard de Análisis Financiero',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      description:
        'Tablero interactivo creado con Power BI para analizar las tendencias financieras y proyecciones de ventas.',
      tech: ['Power BI', 'DAX', 'SQL Server'],
      demoUrl: '#',
      githubUrl: '#',
      isPowerBi: true,
      powerBiEmbedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiX19fREVNTVlfXyIsImMiOiJPR01BIn0%3D', // Replace with real embed URL
    },
    {
      id: 5,
      title: 'Portal de Reservas Hoteleas',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
      description: 'Sitio web para reservas de habitaciones con pasarela de pagos integrada.',
      tech: ['Angular', 'C# .NET', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  filteredProjects: any[] = [];

  ngOnInit() {
    this.filterProjects('all');
  }

  filterProjects(categoryId: string) {
    this.activeCategory = categoryId;
    if (categoryId === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((p) => p.category === categoryId);
    }
  }
}

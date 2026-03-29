export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  embedType?: 'youtube' | 'iframe';
  embedUrl?: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'deffavia',
    title: 'Deffavia Systems',
    category: 'Operations',
    shortDescription: 'Sistema integral de gestión operativa para aviación civil.',
    longDescription:
      'Control de vuelos, tripulaciones, horas de servicio y mantenimiento aeronáutico. Diseñado para optimizar las operaciones diarias y asegurar el cumplimiento de normativas de aviación.',
    tags: ['Full-Stack', 'Logística', 'Arquitectura'],
    githubUrl: 'https://github.com/Defiilol11/deffavia',
    images: [
      'https://i.ibb.co/yc4x4kFC/Screenshot-2026-03-29-113600.png',
      'https://i.ibb.co/7dyBXwyW/Screenshot-2026-03-29-113757.png',
    ],
  },
  {
    id: 'mvc-music-store',
    title: 'MVC Music Store',
    category: 'E-commerce',
    shortDescription: 'Tienda de música online construida con ASP.NET MVC.',
    longDescription:
      'Proyecto MVC que permite la exploración de álbumes musicales, carrito de compras y proceso de checkout, demostrando buenas prácticas en desarrollo backend. Incluye roles de administrador para la gestión del catálogo.',
    tags: ['ASP.NET', 'MVC', 'C#', 'SQL Server'],
    githubUrl: 'https://github.com/Defiilol11/MvcMusicStoreDefii',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/O5ieXP3SCkQ',
    images: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
  },
  {
    id: 'envio-cache',
    title: 'Envio Cache',
    category: 'Backend / Cache',
    shortDescription: 'Sistema de envíos con implementación de cache.',
    longDescription:
      'Aplicación para gestionar envíos optimizando drásticamente los tiempos de respuesta mediante el uso estructurado de caché y almacenamiento de datos eficientemente.',
    tags: ['Next.js', 'Cache', 'Performance'],
    githubUrl: 'https://github.com/Defiilol11/Envio_Cache',
    demoUrl: 'https://envio-cache-kzb9j0tly-defiilol11s-projects.vercel.app/crear',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
  },
  {
    id: 'power-bi-analytics',
    title: 'Business Intelligence Analytics',
    category: 'Data & BI',
    shortDescription: 'Solución de inteligencia de negocios enfocada en datos y ETL.',
    longDescription:
      'Implementación completa de un pipeline de datos (ETL) alimentando un Data Warehouse. Emplea la extracción y modelado de datos para desplegar reportes robustos y orientados a la toma de decisiones utilizando visualizaciones profundas en base a la minería de sus propias bases de datos.',
    tags: ['Power BI', 'ETL', 'Bases de Datos', 'Data Warehousing', 'BI'],
    demoUrl: 'https://fatal-plum-ymqw3maxdt.edgeone.app/report_charts.pdf',
    demoLabel: 'Ver Dashboard en PDF',
    embedType: 'iframe',
    embedUrl: 'https://fatal-plum-ymqw3maxdt.edgeone.app/report_charts.pdf',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
  },
  {
    id: 'tableau-dashboard',
    title: 'Tableau Visualizations',
    category: 'Data & BI',
    shortDescription: 'Dashboard analítico y reportes interactivos.',
    longDescription:
      'Extracción, curación y visualización de volúmenes de información enfocados en descubrir insights valiosos (inteligencia de negocios). Uso extensivo de las potentes características de Tableau para filtros dinámicos y reportes de desempeño (La documentación en este proyecto se encuentra pendiente pero el diseño es completamente funcional).',
    tags: ['Tableau', 'BI', 'Analytics', 'ETL', 'Bases de Datos'],
    images: ['https://i.ibb.co/LdHXQ5Ny/Screenshot-2026-03-29-133534.png'],
  },
];

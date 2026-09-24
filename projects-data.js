// projects-data.js - Catálogo completo de los 8 proyectos de Luis Infante (Infagra Solution)
const PROJECTS_DATA = [
  {
    id: "zero-waste-chef",
    title: "Zero Waste Chef",
    subtitle: "Asistente Culinario con IA Generativa contra el Desperdicio Alimentario",
    category: "ai",
    categoryLabel: "🤖 IA & Innovación",
    badge: "Live en Producción",
    badgeType: "production",
    visibility: "Público",
    stars: 1,
    featured: true,
    accentColor: "#10b981",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 95, 70, 0.05) 100%)",
    icon: "fa-robot",
    shortDesc: "PWA impulsada por Google Gemini 2.5 Flash que analiza ingredientes disponibles, detecta faltantes y genera recetas gourmet optimizadas para evitar el desperdicio.",
    summary: "Una solución integral de Inteligencia Artificial que fusiona un frontend React PWA reactivo y offline-ready con un backend ultrarrápido en FastAPI conectado a la API de Google Gemini.",
    highlights: [
      "Integración directa con Google Gemini 2.5 Flash para generación contextual inteligente.",
      "Arquitectura Progressive Web App (PWA) instalable en móviles y desktops con modo offline.",
      "Optimización de presupuesto y alérgenos con detección inteligente de ingredientes faltantes.",
      "Despliegue continuo en Vercel con CI/CD automatizado."
    ],
    techStack: ["Google Gemini 2.5 Flash", "React 19 PWA", "FastAPI", "Python", "Vercel", "Vite", "Tailored CSS"],
    metrics: [
      { label: "Modelo IA", value: "Gemini 2.5 Flash" },
      { label: "Tiempo de Respuesta", value: "< 1.2s" },
      { label: "Plataforma", value: "PWA Multi-Device" },
      { label: "Estado", value: "En Vivo" }
    ],
    challenge: "El desperdicio doméstico de alimentos genera pérdidas económicas y huella de carbono. Los usuarios a menudo no saben qué cocinar con ingredientes remanentes o desconocen sustitutos culinarios viables.",
    solution: "Se diseñó un motor de prompt contextual que interpreta listas de despensa desordenadas, balancea macronutrientes y sugiere pasos claros de preparación, integrando cálculo de sustitutos inteligentes y guardado local de favoritos.",
    links: {
      github: "https://github.com/infagrasolution-afk/zero-waste-chef",
      demo: "https://zero-waste-chef-nine.vercel.app"
    }
  },
  {
    id: "sistema-escolar",
    title: "Sistema Escolar & Carnetización QR",
    subtitle: "Plataforma Integral de Gestión Estudiantil, Carnets QR/Barras y Bot de Telegram",
    category: "edtech",
    categoryLabel: "⚡ EdTech & Automatización",
    badge: "Enterprise / Confidencial",
    badgeType: "enterprise",
    visibility: "Privado",
    stars: 0,
    featured: true,
    accentColor: "#f59e0b",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(180, 83, 9, 0.05) 100%)",
    icon: "fa-qrcode",
    shortDesc: "Sistema de gestión escolar con generación automatizada de carnets en alta resolución (códigos QR y barras con ReportLab), base de datos PostgreSQL asíncrona y notificaciones vía Telegram Bot.",
    summary: "Plataforma escolar de extremo a extremo que automatiza el control de matrículas, credenciales biométricas con códigos de barra y QR, y canal de avisos en tiempo real mediante un bot de Telegram institucional.",
    highlights: [
      "Motor ReportLab + Pillow para renderizado vectorial de carnets PDF de alta definición.",
      "Generación criptográfica de códigos QR y códigos de barra Code128 para escaneo rápido.",
      "Bot de Telegram integrado para notificaciones automáticas a padres y docentes.",
      "Infraestructura como Código (IaC) con Render Blueprint (`render.yaml`), Docker y Nginx.",
      "Backend de alto rendimiento con FastAPI, SQLAlchemy 2.0 y motor asíncrono asyncpg."
    ],
    techStack: ["FastAPI", "PostgreSQL", "Asyncpg", "SQLAlchemy 2.0", "ReportLab", "Python-Telegram-Bot", "Docker", "Nginx", "Render IaC"],
    metrics: [
      { label: "Generación Carnet", value: "PDF Vectorial" },
      { label: "Escaneo", value: "QR & Code128" },
      { label: "Alertas", value: "Telegram API" },
      { label: "Orquestación", value: "Docker / IaC" }
    ],
    challenge: "Las instituciones educativas pierden cientos de horas diseñando carnets manualmente, gestionando duplicados y manteniendo a los apoderados informados sobre la asistencia y credenciales de los estudiantes.",
    solution: "Desarrollo de un pipeline automatizado en Python que toma los registros de los alumnos, estampa firmas y fotos normalizadas, genera los códigos de validación al vuelo y emite los documentos listos para impresión offset o térmica, mientras el bot de Telegram sincroniza notificaciones institucionales.",
    links: {
      github: "https://github.com/infagrasolution-afk/sistema-escolar",
      demo: null
    }
  },
  {
    id: "lnet",
    title: "LNet - Telecom Field Operations",
    subtitle: "Sistema de Gestión y Despacho Técnico de Telecomunicaciones (Netuno)",
    category: "enterprise",
    categoryLabel: "🏢 Enterprise & ERP",
    badge: "Telecom Enterprise",
    badgeType: "enterprise",
    visibility: "Público",
    stars: 1,
    featured: true,
    accentColor: "#3b82f6",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(29, 78, 216, 0.05) 100%)",
    icon: "fa-satellite-dish",
    shortDesc: "Suite operativa para cuadrillas de telecomunicaciones con auto-deducción de inventario, captura de coordenadas GPS, compresión de fotos y firmas digitales de conformidad.",
    summary: "Herramienta de misión crítica construida para la gestión de campo de técnicos de Netuno. Permite controlar órdenes de trabajo, auditar consumos de cable y equipamiento, y certificar instalaciones con geolocalización.",
    highlights: [
      "Auto-deducción algorítmica de inventario y stock de materiales por orden de trabajo.",
      "Geolocalización satelital (GPS) en tiempo real para auditoría de cuadrillas en campo.",
      "Módulo de firma digital en canvas con validez legal de conformidad del cliente.",
      "Pipeline de compresión y optimización fotográfica para reportes de instalación con bajo ancho de banda.",
      "Persistencia de alta disponibilidad con SQLite configurado en modo WAL (Write-Ahead Logging)."
    ],
    techStack: ["Node.js", "Express", "React", "Docker", "SQLite WAL", "Leaflet GPS", "Render Blueprint"],
    metrics: [
      { label: "Motor DB", value: "SQLite (WAL)" },
      { label: "Auditoría", value: "GPS + Foto + Firma" },
      { label: "Contenedor", value: "Dockerizado" },
      { label: "Despliegue", value: "Render Cloud" }
    ],
    challenge: "El personal técnico en campo enfrenta problemas de conectividad intermitente, consumo descontrolado de bobinas de fibra/cable y dificultad para validar que las órdenes se completaron en el sitio real.",
    solution: "Se creó una arquitectura liviana con soporte offline-first y compresión de carga fotográfica en el cliente, vinculando la ubicación GPS del dispositivo al momento de estampar la firma digital del suscriptor.",
    links: {
      github: "https://github.com/infagrasolution-afk/LNet",
      demo: null
    }
  },
  {
    id: "sistems-erp-inventario",
    title: "Sistems ERP Inventario",
    subtitle: "Sistema Web & Móvil de Gestión Empresarial y Control de Stock",
    category: "enterprise",
    categoryLabel: "🏢 Enterprise & ERP",
    badge: "Live en Producción",
    badgeType: "production",
    visibility: "Público",
    stars: 1,
    featured: true,
    accentColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(109, 40, 217, 0.05) 100%)",
    icon: "fa-boxes-stacked",
    shortDesc: "Plataforma multi-dispositivo para supervisión de inventario con panel Super Admin, control de compras, kardex automatizado y analítica de ventas.",
    summary: "Solución ERP compacta pero robusta orientada a retail y distribución, con trazabilidad completa de lotes, alertas automáticas de reposición de stock y conciliación operativa.",
    highlights: [
      "Panel Super Admin con control de privilegios de usuario y auditoría de sesiones.",
      "Kardex dinámico con cálculo automático de costo promedio ponderado y margen de utilidad.",
      "Módulo de lectura de códigos de barra para recepción y despacho ágil de mercadería.",
      "Despliegue en producción de frontend en Vercel con rendimiento optimizado."
    ],
    techStack: ["Python Backend", "React", "FastAPI", "Vercel", "REST APIs", "Modern CSS"],
    metrics: [
      { label: "Kardex", value: "Tiempo Real" },
      { label: "Control", value: "Super Admin" },
      { label: "Acceso", value: "Desktop & Móvil" },
      { label: "Producción", value: "Activo" }
    ],
    challenge: "Pequeñas y medianas empresas pierden márgenes de ganancia debido a descuadres de stock, errores humanos en registros manuales y falta de trazabilidad en compras.",
    solution: "Implementación de un sistema intuitivo con validaciones estrictas en cada transacción, reportes de existencias mínimas y conciliación gráfica del movimiento diario de almacén.",
    links: {
      github: "https://github.com/infagrasolution-afk/sistems-erp-inventario",
      demo: "https://sistems-erp-inventario.vercel.app"
    }
  },
  {
    id: "sistema-nexus-front",
    title: "Sistema Nexus - Enterprise Frontend",
    subtitle: "Suite Frontend Moderna para ERP Empresarial, RBAC, WMS y Libros Fiscales",
    category: "enterprise",
    categoryLabel: "🏢 Enterprise & ERP",
    badge: "React 19 & TypeScript",
    badgeType: "tech",
    visibility: "Público",
    stars: 1,
    featured: false,
    accentColor: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(14, 116, 144, 0.05) 100%)",
    icon: "fa-chart-pie",
    shortDesc: "Interfaz de usuario de nivel corporativo desarrollada en React 19 y TypeScript, con gestión de estado global mediante Zustand, TanStack Query y visualización de datos con Recharts.",
    summary: "El cliente frontend desacoplado de Sistema Nexus, enfocado en flujos de trabajo de alta densidad: libros contables y fiscales, conciliación bancaria inteligente, WMS (Warehouse Management System) y permisos basados en roles (RBAC).",
    highlights: [
      "Construido sobre React 19 y TypeScript con tipado estricto de punta a punta.",
      "Gestión de estado reactivo y caché asíncrono con Zustand y @tanstack/react-query v5.",
      "Validación de esquemas en tiempo real con Zod y React Hook Form.",
      "Cuadros de mando analíticos con Recharts y tablas de datos avanzadas con MUI DataGrid.",
      "Soporte multi-idioma (i18n) e integración con generador de códigos QR dinámicos."
    ],
    techStack: ["React 19", "TypeScript", "Vite 8", "Zustand", "TanStack Query", "MUI DataGrid", "Recharts", "Zod", "i18next"],
    metrics: [
      { label: "Versión React", value: "React 19" },
      { label: "Manejo Estado", value: "Zustand + React Query" },
      { label: "Validación", value: "Zod Schema" },
      { label: "UI Kit", value: "Material UI 9" }
    ],
    challenge: "Las interfaces de software administrativo tradicional son lentas, difíciles de mantener y no ofrecen feedback inmediato ante errores en formularios complejos o conciliaciones masivas.",
    solution: "Se estructuró una arquitectura modular de componentes desacoplados con validación instantánea de formularios mediante esquemas Zod, caché optimista y paneles analíticos que reaccionan sin recarga.",
    links: {
      github: "https://github.com/infagrasolution-afk/Sistema-Nexus-front",
      demo: null
    }
  },
  {
    id: "sistema-nexus-back",
    title: "Sistema Nexus - Backend API",
    subtitle: "API REST de Alto Rendimiento para ERP con Conexión Asíncrona PostgreSQL",
    category: "enterprise",
    categoryLabel: "🏢 Enterprise & ERP",
    badge: "Python & Asyncpg",
    badgeType: "tech",
    visibility: "Público",
    stars: 1,
    featured: false,
    accentColor: "#6366f1",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(67, 56, 202, 0.05) 100%)",
    icon: "fa-server",
    shortDesc: "Backend desacoplado para la suite Sistema Nexus, con transacciones ACID, conexión nativa asyncpg con soporte SSL y motor de seguridad RBAC.",
    summary: "Cerebro del ERP empresarial que expone endpoints RESTful protegidos por JWT, orquestando lógica de negocio fiscal, stock multialmacén y transacciones financieras concurrentes.",
    highlights: [
      "Motor asíncrono Python con driver `asyncpg` para máxima velocidad de consulta en PostgreSQL.",
      "Manejo de transacciones ACID y esquemas de base de datos relacionales normalizados.",
      "Control de acceso basado en roles (RBAC) con tokens seguros JWT y hashing bcrypt.",
      "Diseño modular preparado para despliegues en contenedores y balanceo de carga."
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Asyncpg", "SQLAlchemy", "JWT", "Bcrypt"],
    metrics: [
      { label: "Driver DB", value: "Asyncpg SSL" },
      { label: "Seguridad", value: "JWT + RBAC" },
      { label: "Arquitectura", value: "Micro-Monolito" },
      { label: "Estilo API", value: "RESTful OpenAPI" }
    ],
    challenge: "Procesar transacciones simultáneas de inventario y facturación sin bloqueos de base de datos y garantizando total consistencia en las conciliaciones bancarias.",
    solution: "Se adoptó una arquitectura asíncrona no bloqueante con pool de conexiones gestionado en `asyncpg`, aislando transacciones críticas con niveles de aislamiento adecuados.",
    links: {
      github: "https://github.com/infagrasolution-afk/SIstema-Nexus-Back",
      demo: null
    }
  },
  {
    id: "mario-bros-engine",
    title: "Super Mario Bros Web Game",
    subtitle: "Motor Web de Videojuego Full Stack con React 19, TypeScript y Backend de Rankings",
    category: "game",
    categoryLabel: "🎮 Game Engine & Interactivo",
    badge: "Full Stack Game",
    badgeType: "tech",
    visibility: "Privado / Local",
    stars: 0,
    featured: false,
    accentColor: "#ef4444",
    gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(185, 28, 28, 0.05) 100%)",
    icon: "fa-gamepad",
    shortDesc: "Recreación interactiva de mecánicas de juego en canvas con React 19 y Vite 8, acompañada de un backend FastAPI para sincronización de niveles y puntuaciones récord.",
    summary: "Proyecto técnico que demuestra dominio en lógica de física 2D en JavaScript/TypeScript (colisiones, inercia, gravedad) y sincronización asíncrona de estado con servidor en FastAPI.",
    highlights: [
      "Desarrollado en React 19, TypeScript y Vite 8 con componentes MUI v9.",
      "Implementación de loop de animación a 60 FPS con control de físicas de salto y detección de colisiones.",
      "API backend en FastAPI para persistencia de líderes, niveles superados y métricas de partidas.",
      "Manejo de audio y sprites interactivos con renderizado optimizado."
    ],
    techStack: ["React 19", "TypeScript", "Vite 8", "Material UI 9", "FastAPI", "Python", "HTML5 Canvas"],
    metrics: [
      { label: "Render", value: "60 FPS Canvas" },
      { label: "Físicas", value: "Gravedad & AABB" },
      { label: "API Scores", value: "FastAPI REST" },
      { label: "Tipado", value: "Strict TS" }
    ],
    challenge: "Garantizar una tasa constante de 60 cuadros por segundo en navegadores web mientras se gestionan eventos de entrada del teclado sin latencia y se actualizan tablas de récord en tiempo real.",
    solution: "Separación del loop de actualización de físicas del ciclo de vida de React, usando `requestAnimationFrame` acoplado a un motor AABB de colisiones y llamadas API no bloqueantes.",
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "app-iglesia",
    title: "App Iglesia Comunitaria",
    subtitle: "Plataforma de Gestión Comunitaria, Eventos, Miembros y Red Eclesial",
    category: "mobile",
    categoryLabel: "📱 Comunitaria & Web App",
    badge: "Community Management",
    badgeType: "open",
    visibility: "Público",
    stars: 1,
    featured: false,
    accentColor: "#14b8a6",
    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(13, 148, 136, 0.05) 100%)",
    icon: "fa-church",
    shortDesc: "Aplicación web enfocada en la administración de congregaciones, calendario de actividades, registro de membresías y seguimiento pastoral.",
    summary: "Plataforma digital centrada en la interacción comunitaria, facilitando la inscripción a eventos, la visualización de cronogramas y la comunicación interna entre líderes y participantes.",
    highlights: [
      "Módulo de directorio de miembros con roles de liderazgo y participación.",
      "Calendario interactivo de conferencias, ensayos y reuniones comunitarias.",
      "Diseño adaptable optimizado para dispositivos móviles y fácil lectura en pantalla.",
      "Interfaz limpia y accesible para usuarios de todas las edades."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3 Moderno", "RESTful Architecture", "Mobile First"],
    metrics: [
      { label: "Enfoque", value: "Mobile First" },
      { label: "Accesibilidad", value: "Diseño Inclusivo" },
      { label: "Módulos", value: "Eventos & Miembros" },
      { label: "Código", value: "Open Source" }
    ],
    challenge: "Muchas congregaciones dependen de anuncios en papel o chats desorganizados para coordinar eventos y mantener el registro de sus integrantes.",
    solution: "Creación de un portal centralizado, ligero y sin fricción de acceso, donde cualquier miembro puede consultar el itinerario semanal y las actividades activas.",
    links: {
      github: "https://github.com/infagrasolution-afk/app-iglesia",
      demo: null
    }
  }
];

// Estadísticas de perfil globales
const PROFILE_STATS = {
  name: "Luis Infante",
  brand: "Infagra Solution",
  handle: "infagrasolution-afk",
  role: "Full Stack Engineer & AI Specialist",
  tagline: "Transformando ideas complejas en arquitecturas escalables, sistemas empresariales y experiencias interactivas impulsadas por Inteligencia Artificial.",
  email: "infagrasolution@gmail.com",
  github: "https://github.com/infagrasolution-afk",
  whatsapp: "+584120161906",
  location: "Venezuela",
  experienceYears: "4+",
  totalProjects: 8,
  liveDemos: 2,
  coreSkills: [
    { name: "Google Gemini AI & LLMs", level: 92, category: "ai" },
    { name: "FastAPI & Python", level: 95, category: "backend" },
    { name: "React 19 & TypeScript", level: 90, category: "frontend" },
    { name: "PostgreSQL & Asyncpg", level: 88, category: "backend" },
    { name: "Docker & Render IaC", level: 85, category: "devops" },
    { name: "PWA & Mobile-First", level: 90, category: "frontend" }
  ]
};

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
    id: "sistema-nexus",
    title: "Sistema Nexus - Full Stack ERP Suite",
    subtitle: "Plataforma ERP Empresarial: Frontend React 19 + Backend Asíncrono Python",
    category: "enterprise",
    categoryLabel: "🏢 Enterprise & ERP",
    badge: "Full Stack Suite",
    badgeType: "production",
    visibility: "Público (Front & Back)",
    stars: 2,
    featured: true,
    accentColor: "#06b6d4",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(99, 102, 241, 0.1) 100%)",
    glowColor: "rgba(6, 182, 212, 0.4)",
    icon: "fa-network-wired",
    shortDesc: "Suite corporativa ERP desacoplada de alto rendimiento. Combina una SPA moderna en React 19 y TypeScript con un backend asíncrono en Python (FastAPI/asyncpg), PostgreSQL y matriz RBAC.",
    summary: "Arquitectura integral cliente-servidor para la gestión empresarial de punta a punta. Incluye módulos para libros contables y fiscales, conciliación bancaria inteligente, sistema WMS de almacenamiento y control estricto de accesos por roles.",
    highlights: [
      "Frontend desacoplado en React 19, TypeScript, TanStack Query v5, Zustand, Zod y MUI DataGrid.",
      "Backend asíncrono no bloqueante en Python con FastAPI y driver asyncpg con soporte nativo SSL.",
      "Seguridad de nivel corporativo con tokens JWT, hashing seguro bcrypt y control de acceso RBAC.",
      "Cuadros de mando analíticos con Recharts, soporte multi-idioma con i18next y transacciones ACID."
    ],
    techStack: ["React 19", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Asyncpg", "Zustand", "TanStack Query", "MUI DataGrid", "Recharts", "Zod", "Docker"],
    metrics: [
      { label: "Arquitectura", value: "Full Stack Decoupled" },
      { label: "Frontend", value: "React 19 / TS" },
      { label: "Backend", value: "Python / Asyncpg" },
      { label: "Seguridad", value: "JWT + RBAC" }
    ],
    challenge: "Los sistemas administrativos tradicionales sufren de bloqueos en transacciones concurrentes de almacén y contabilidad, sumados a interfaces lentas y poco intuitivas.",
    solution: "Implementación de una arquitectura desacoplada: interfaz ultra reactiva con caché optimista en React 19 conectada a un pool asíncrono en Python con PostgreSQL capaz de soportar alta concurrencia.",
    links: {
      github: "https://github.com/infagrasolution-afk/Sistema-Nexus-front",
      githubBack: "https://github.com/infagrasolution-afk/SIstema-Nexus-Back",
      demo: null
    }
  },
  {
    id: "experiencia-qr",
    title: "Experiencia Interactiva QR",
    subtitle: "Aplicación Web Interactiva con React 19, Framer Motion y Generación de QR en Python",
    category: "interactive",
    categoryLabel: "✨ UI/UX & Experiencias",
    badge: "React 19 & Framer Motion",
    badgeType: "tech",
    visibility: "Público",
    stars: 0,
    featured: false,
    accentColor: "#ec4899",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(190, 24, 93, 0.08) 100%)",
    glowColor: "rgba(236, 72, 153, 0.4)",
    icon: "fa-wand-magic-sparkles",
    shortDesc: "Experiencia web inmersiva con animaciones de alta fluidez en Framer Motion, componentes Material UI v9 y scripts de soporte en Python para generación de códigos QR visuales.",
    summary: "Proyecto frontend interactivo enfocado en diseño emocional y microinteracciones de alta fidelidad. Combina React 19, Vite 8 y Framer Motion con scripts de procesamiento en Python para renderizar códigos QR dinámicos y transiciones visuales enriquecidas.",
    highlights: [
      "Desarrollado sobre React 19 y Vite 8 con bundling ultrarrápido y soporte HMR.",
      "Animaciones fluidas y transiciones reactivas mediante Framer Motion y Material UI 9.",
      "Script de backend y automatización en Python (`generar_qr.py`) para procesamiento de códigos QR estilizados.",
      "Pipeline de calidad con Oxlint para máxima velocidad de análisis estático."
    ],
    techStack: ["React 19", "Framer Motion", "Material UI 9", "Vite 8", "Python", "Lucide React", "Oxlint"],
    metrics: [
      { label: "Versión React", value: "React 19" },
      { label: "Animaciones", value: "Framer Motion" },
      { label: "Generador QR", value: "Python Script" },
      { label: "Build Tool", value: "Vite 8" }
    ],
    challenge: "Crear una experiencia web visualmente cautivadora con animaciones complejas sin degradar los 60 FPS ni saturar el rendimiento en dispositivos móviles.",
    solution: "Aprovechamiento de transformaciones aceleradas por hardware con Framer Motion, acopladas al nuevo motor concurrente de React 19 y generación eficiente de assets en Python.",
    links: {
      github: "https://github.com/infagrasolution-afk/personal",
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

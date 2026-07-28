import type {
  SkillNodeType,
  ConnectionType,
  StackKeysFront,
  StackKeysBack,
  techDetail,
} from "./types";

export const nodesBack: SkillNodeType[] = [
  {
    idNode: "node",
    x: 5 / 10,
    y: 0.1,
  },
  {
    idNode: "npm",
    x: 5 / 10,
    y: 0.3,
  },
  {
    idNode: "express",
    x: 5 / 10,
    y: 0.5,
  },
  {
    idNode: "redis",
    x: 7 / 10,
    y: 0.5,
  },
  {
    idNode: "postgres",
    x: 3 / 10,
    y: 0.7,
  },
  {
    idNode: "mysql",  
    x: 7 / 10,
    y: 0.7,
  },
  {
    idNode: "git",
    x: 9 / 10,
    y: 0.7,
  },
  {
    idNode: "github",
    x: 9 / 10,
    y: 0.9,
  },
]

export const nodesFront: SkillNodeType[] = [
  {
    idNode: "css",
    x: 4 / 10,
    y: 0.1,
  },
  {
    idNode: "html",
    x: 8 / 10,
    y: 0.1,
  },
  {
    idNode: "js",
    x: 6 / 10,
    y: 0.3,
  },
  {
    idNode: "gsap",
    x: 2 / 10,
    y: 0.5,
  },
  {
    idNode: "ts",
    x: 6 / 10,
    y: 0.5,
  },
  {
    idNode: "react",
    x: 6 / 10,
    y: 0.7,
  },
  {
    idNode: "vite",
    x: 8 / 10,
    y: 0.7,
  },
  {
    idNode: "tailwind",
    x: 4 / 10,
    y: 0.9,
  },
  {
    idNode: "redux",
    x: 6 / 10,
    y: 0.9,
  },
  {
    idNode: "router",
    x: 8 / 10,
    y: 0.9,
  },
];

export const connectionsFront: ConnectionType[] = [
  {
    from: "css",
    to: "js",
    type: "primary",
  },
  {
    from: "html",
    to: "js",
    type: "primary",
  },
  {
    from: "js",
    to: "ts",
    type: "primary",
  },
  {
    from: "ts",
    to: "react",
    type: "primary",
  },
  {
    from: "react",
    to: "redux",
    type: "primary",
  },
  {
    from: "react",
    to: "tailwind",
    type: "secondary",
  },
  {
    from: "react",
    to: "router",
    type: "primary",
  },
  {
    from: "css",
    to: "tailwind",
    type: "primary",
  },
  {
    from: "css",
    to: "gsap",
    type: "secondary",
  },
  {
    from: "js",
    to: "gsap",
    type: "primary",
  },
  {
    from: "vite",
    to: "react",
    type: "secondary",
  },
  {
    from: "gsap",
    to: "react",
    type: "soft",
  },
  {
    from: "html",
    to: "react",
    type: "soft",
  },
];

export const connectionsBack: ConnectionType[] = [
  {
    from: "node",
    to: "npm",
    type: "primary",
  },
  {
    from: "npm",
    to: "redis",
    type: "primary"
  },
  {
    from: "npm",
    to: "express",
    type: "primary",
  },
  {
    from: "express",
    to: "postgres",
    type: "primary",
  },
  {
    from: "express",
    to: "mysql",
    type: "primary",
  },
  {
    from: "git",
    to: "github",
    type: "primary",
  },
  {
    from: "node",
    to: "git",
    type: "secondary",
  },
];

export const techInfo = {
  "": [""],

  html: ["Semantic structure", "Accessibility", "Forms", "SEO"],

  css: ["Flexbox", "Grid", "Responsive design", "Animations"],

  js: ["DOM manipulation", "Async flow", "Closures", "Event system"],

  ts: ["Type safety", "Interfaces", "Generics", "Inference"],

  react: [
    "Hooks",
    "Component architecture",
    "State management",
    "SPA rendering",
  ],

  redux: ["Reducers", "Actions", "Global state", "Immutable flow"],

  tailwind: [
    "Utility-first",
    "Responsive utilities",
    "Design systems",
    "Rapid prototyping",
  ],

  gsap: ["Timelines", "SVG animation", "Motion systems", "ScrollTrigger"],

  node: ["Runtime environment", "Modules", "Event loop", "CLI tooling"],

  npm: ["Dependencies", "Scripts", "Versioning", "Package management"],

  vite: ["Hot reload", "Bundling", "Dev server", "Build optimization"],

  git: ["Branching", "Commits", "Merge flow", "Version control"],

  github: ["Repositories", "Pull requests", "CI/CD", "Collaboration"],

  router: ["Route components", "Dynamic routing", "Nested routes"],

  express: [
  "Routing",
  "Middleware",
  "Authentication",
  "REST APIs",
],

mysql: [
  "Database Design",
  "SQL Queries",
  "Joins",
  "Normalization",
],

postgres: [
  "Relational Modeling",
  "Advanced Queries",
  "Indexes",
  "Data Integrity",
],

redis: [
  "Caching",
  "Session Storage",
  "Key-Value Data",
  "Performance Optimization",
],
};

export const techDetails: Record<string, techDetail> = {
  "": {
    title: "",
    category: "",
    experience: "",
    level: "Beginner",
    related: [],
    description: "",
  },

  html: {
    title: "HTML",

    category: "Markup Language",

    experience: "3 Years",

    level: "Advanced",

    related: ["css", "js", "react"],

    description:
      "HTML representa la capa estructural de cualquier interfaz web. Mi enfoque ha sido utilizarlo no solo como contenedor visual, sino como una herramienta semántica que mejora accesibilidad, SEO, mantenibilidad y organización general del sistema.",
  },

  css: {
    title: "CSS",

    category: "Styling Language",

    experience: "3 Years",

    level: "Advanced",

    related: ["html", "tailwind", "gsap"],

    description:
      "CSS es donde la estructura comienza a transformarse en experiencia visual. Me interesa especialmente la composición de interfaces, el diseño responsive, la jerarquía visual y cómo pequeñas decisiones visuales alteran la percepción y usabilidad de un sistema.",
  },

  js: {
    title: "JavaScript",

    category: "Programming Language",

    experience: "3 Years",

    level: "Advanced",

    related: ["ts", "react", "node"],

    description:
      "JavaScript es la base lógica de la mayor parte de mi stack. Lo utilizo para construir comportamiento dinámico, manejar asincronía, conectar interfaces con APIs y diseñar flujos interactivos complejos tanto en frontend como en backend.",
  },

  ts: {
    title: "TypeScript",

    category: "Typed JavaScript",

    experience: "1 Year",

    level: "Intermediate",

    related: ["react", "node"],

    description:
      "TypeScript me permitió estructurar aplicaciones complejas de forma mucho más predecible. Me interesa especialmente como herramienta de modelado, documentación implícita y reducción de errores en proyectos escalables.",
  },

  react: {
    title: "React",

    category: "Frontend Library",

    experience: "2 Years",

    level: "Advanced",

    related: ["ts", "tailwind", "redux", "vite", "router"],

    description:
      "React transformó mi manera de pensar interfaces. Más que una librería, lo utilizo como un sistema de composición donde cada componente representa una unidad funcional reutilizable dentro de arquitecturas escalables.",
  },

  redux: {
    title: "Redux",

    category: "State Management",

    experience: "1 Year",

    level: "Intermediate",

    related: ["react", "ts"],

    description:
      "Redux me ayudó a entender mejor cómo estructurar flujo de datos complejo dentro de aplicaciones grandes. Aunque no siempre es necesario, valoro mucho la previsibilidad y organización que aporta.",
  },

  tailwind: {
    title: "Tailwind CSS",

    category: "Utility-First Framework",

    experience: "1 Year",

    level: "Advanced",

    related: ["css", "react"],

    description:
      "Tailwind aceleró enormemente mi flujo de desarrollo frontend. Lo utilizo principalmente para mantener consistencia visual, reducir fricción entre diseño y desarrollo y construir interfaces complejas con iteración rápida.",
  },

  gsap: {
    title: "GSAP",

    category: "Animation Library",

    experience: "1 Year",

    level: "Intermediate",

    related: ["css", "react"],

    description:
      "GSAP me permitió tratar animaciones como sistemas coordinados y no simplemente como efectos decorativos. Me interesa especialmente cómo el movimiento puede comunicar estructura, jerarquía y feedback dentro de una interfaz.",
  },

  node: {
    title: "Node.js",

    category: "Backend Runtime",

    experience: "2 Years",

    level: "Intermediate",

    related: ["js", "ts", "npm"],

    description:
      "Node.js me abrió la posibilidad de trabajar backend dentro del mismo ecosistema JavaScript. Lo utilizo principalmente para APIs, lógica de servidor y herramientas de automatización.",
  },

  npm: {
    title: "npm",

    category: "Package Manager",

    experience: "2 Years",

    level: "Intermediate",

    related: ["node", "express"],

    description:
      "npm es una pieza central del ecosistema moderno JavaScript. Más allá de instalar paquetes, me interesa especialmente cómo influye en automatización, consistencia de entorno y escalabilidad del workflow.",
  },

  vite: {
    title: "Vite",

    category: "Build Tool",

    experience: "2 Years",

    level: "Intermediate",

    related: ["react", "npm"],

    description:
      "Vite mejoró significativamente mi experiencia de desarrollo frontend gracias a su velocidad y simplicidad. Lo considero una herramienta clave para mantener iteración rápida y configuración moderna.",
  },

  git: {
    title: "Git",

    category: "Version Control",

    experience: "2 Years",

    level: "Intermediate",

    related: ["github"],

    description:
      "Git cambió completamente mi manera de trabajar proyectos. Me permitió experimentar sin miedo, mantener historial detallado y estructurar procesos de desarrollo mucho más seguros y organizados.",
  },

  github: {
    title: "GitHub",

    category: "Collaboration Platform",

    experience: "2 Years",

    level: "Intermediate",

    related: ["git"],

    description:
      "GitHub funciona para mí tanto como herramienta colaborativa como escaparate técnico. Lo utilizo para versionado, automatización básica y construcción progresiva de portafolio profesional.",
  },

  router: {
    title: "React Router",

    category: "Routing System",

    experience: "2 Years",

    level: "Intermediate",

    related: ["react", "vite"],

    description:
      "El routing se volvió una pieza esencial cuando empecé a construir aplicaciones más complejas. Me interesa especialmente cómo organiza arquitectura, experiencia de navegación y separación de vistas dentro de SPAs modernas.",
  },

  express: {
  title: "Express",

  category: "Backend Framework",

  experience: "1 Year",

  level: "Intermediate",

  related: ["node", "npm", "mysql", "postgresql"],

  description:
    "Express ha sido mi principal herramienta para la construcción de servidores y aplicaciones backend con Node.js. Lo utilizo para gestionar rutas, middlewares, autenticación y lógica de negocio, manteniendo una arquitectura clara y escalable.",
},

  postgres: {
  title: "PostgreSQL",

  category: "Database",

  experience: "1 Year",

  level: "Intermediate",

  related: ["express", "mysql"],

  description:
    "PostgreSQL lo utilizo para construir sistemas de datos robustos y escalables, aprovechando sus capacidades avanzadas de consultas, integridad relacional y manejo eficiente de grandes volúmenes de información.",
},

  mysql: {
  title: "MySQL",

  category: "Database",

  experience: "1 Year",

  level: "Intermediate",

  related: ["express", "postgresql"],

  description:
    "MySQL me ha permitido diseñar y administrar bases de datos relacionales enfocadas en consistencia, rendimiento y organización de la información. He trabajado con modelado de datos, consultas complejas y optimización básica para aplicaciones web.",
},

redis: {
  title: "Redis",

  category: "In-Memory Database",

  experience: "6 Months",

  level: "Beginner",

  related: ["node", "express", "mysql", "postgresql"],

  description:
    "Redis lo he utilizado como sistema de almacenamiento en memoria para optimizar el rendimiento de aplicaciones backend. Mi experiencia incluye el uso de caché para reducir consultas repetitivas, mejorar tiempos de respuesta y gestionar datos temporales de forma eficiente.",
},

};

export const colors: Record<
  StackKeysFront | StackKeysBack,
  {
    primary: string;
    secondary: string;
    gradient: string;
    primaryVar: string;
    secondaryVar: string;
  }
> = {
  "": {
    primary: "",
    secondary: "",
    gradient: "",
    primaryVar: "",
    secondaryVar: "",
  },

  css: {
    primary: "purple-800/85",
    secondary: "violet-500/35",
    gradient: "from-violet-500/35 via-purple-800/85 to-silver-950/80",
    primaryVar: "var(--color-purple-800)",
    secondaryVar: "var(--color-violet-500)",
  },

  router: {
    primary: "rich-mahogany-800/85",
    secondary: "red-500/35",
    gradient: "from-red-500/35 via-rich-mahogany-800/85 to-silver-950/80",
    primaryVar: "var(--color-rich-mahogany-800)",
    secondaryVar: "var(--color-red-500)",
  },

  html: {
    primary: "orange-500/85",
    secondary: "rich-mahogany-500/60",
    gradient: "from-rich-mahogany-500/60 via-orange-500/85 to-silver-950/80",
    primaryVar: "var(--color-orange-500)",
    secondaryVar: "var(--color-rich-mahogany-500)",
  },

  js: {
    primary: "orange-500/60",
    secondary: "yellow-600",
    gradient: "from-yellow-600 via-orange-500/60 to-silver-950/80",
    primaryVar: "var(--color-orange-500)",
    secondaryVar: "var(--color-yellow-600)",
  },

  ts: {
    primary: "baltic-blue-800/85",
    secondary: "blue-500/35",
    gradient: "from-blue-500/35 via-baltic-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-baltic-blue-800)",
    secondaryVar: "var(--color-blue-500)",
  },

  react: {
    primary: "baltic-blue-800/85",
    secondary: "pacific-cyan-500/65",
    gradient:
      "from-pacific-cyan-500/65 via-baltic-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-baltic-blue-800)",
    secondaryVar: "var(--color-pacific-cyan-500)",
  },

  node: {
    primary: "smerald-800/85",
    secondary: "green-500/35",
    gradient: "from-green-500/35 via-smerald-800/85 to-silver-950/80",
    primaryVar: "var(--color-smerald-800)",
    secondaryVar: "var(--color-green-500)",
  },

  vite: {
    primary: "indigo-700/65",
    secondary: "violet-400/45",
    gradient: "from-violet-400/45 via-indigo-700/65 to-silver-950/80",
    primaryVar: "var(--color-indigo-700)",
    secondaryVar: "var(--color-violet-400)",
  },

  redux: {
    primary: "purple-800/40",
    secondary: "violet-400/35",
    gradient: "from-violet-400/35 via-purple-800/40 to-silver-950/80",
    primaryVar: "var(--color-purple-800)",
    secondaryVar: "var(--color-violet-400)",
  },

  tailwind: {
    primary: "baltic-blue-800/85",
    secondary: "sky-500/35",
    gradient: "from-sky-500/35 via-baltic-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-baltic-blue-800)",
    secondaryVar: "var(--color-sky-500)",
  },

  gsap: {
    primary: "green-800/85",
    secondary: "emerald-500/35",
    gradient: "from-emerald-500/35 via-green-800/85 to-silver-950/80",
    primaryVar: "var(--color-green-800)",
    secondaryVar: "var(--color-emerald-500)",
  },

  npm: {
    primary: "rich-mahogany-800/85",
    secondary: "red-500/35",
    gradient: "from-red-500/35 via-rich-mahogany-800/85 to-silver-950/80",
    primaryVar: "var(--color-rich-mahogany-800)",
    secondaryVar: "var(--color-red-500)",
  },

  git: {
    primary: "yellow-600/85",
    secondary: "orange-500/35",
    gradient: "from-orange-500/35 via-yellow-600/85 to-silver-950/80",
    primaryVar: "var(--color-yellow-600)",
    secondaryVar: "var(--color-orange-500)",
  },

  github: {
    primary: "baltic-blue-800/85",
    secondary: "silver-400/20",
    gradient: "from-silver-400/20 via-baltic-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-baltic-blue-800)",
    secondaryVar: "var(--color-silver-400)",
  },

  postgres: {
    primary: "blue-800/85",
    secondary: "blue-500/35",
    gradient: "from-blue-500/35 via-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-blue-800)",
    secondaryVar: "var(--color-blue-500)",
  },

  mysql: {
    primary: "blue-800/85",
    secondary: "blue-500/35",
    gradient: "from-blue-500/35 via-blue-800/85 to-silver-950/80",
    primaryVar: "var(--color-blue-800)",
    secondaryVar: "var(--color-blue-500)",
  },

  express: {
    primary: "smerald-800/85",
    secondary: "green-500/35",
    gradient: "from-green-500/35 via-smerald-800/85 to-silver-950/80",
    primaryVar: "var(--color-smerald-800)",
    secondaryVar: "var(--color-green-500)", 
  },

  redis: {
    primary: "red-800/85",
    secondary: "red-500/35",
    gradient: "from-red-500/35 via-red-800/85 to-silver-950/80",
    primaryVar: "var(--color-red-800)",
    secondaryVar: "var(--color-red-500)",
  },
};

export type Lang = "pt" | "en" | "es";

// ============================================
// EDIT YOUR PERSONAL DATA HERE
// ============================================

export const PROFILE = {
  name: "João Vitor Évora",
  handle: "joao",
  role: "Desenvolvedor Jr.",
  company: "RD Saúde",
  location: "Remote · Brazil",
  github: "https://github.com/joaovitorevora",
  githubHandle: "@joaovitorevora",
  linkedin: "https://www.linkedin.com/in/joaovitorevora/",
  linkedinHandle: "/in/joaovitorevora",
  whatsapp: "https://wa.me/5519988146846",
  whatsappLabel: "+55 19 9 8814-6846",
  email: "you@example.com",
};

// Timeline entries — add/edit years freely
export const TIMELINE = [
  {
    year: 2019,
    pt: {
      role: "Atendente 1",
      company: "RD Saúde",
      achievement:
        "Início da trajetória profissional com foco em atendimento e relacionamento com o cliente.",
    },
    en: {
      role: "Attendant 1",
      company: "RD Saúde",
      achievement:
        "Start of professional journey, focused on customer service and client relationships.",
    },
    es: {
      role: "Atendente 1",
      company: "RD Saúde",
      achievement:
        "Inicio de la trayectoria profesional con foco en atención y relación con el cliente.",
    },
  },
  {
    year: 2020,
    pt: {
      role: "Atendente 2",
      company: "RD Saúde",
      achievement:
        "Evolução no atendimento, ganhando responsabilidade em processos internos e suporte à equipe.",
    },
    en: {
      role: "Attendant 2",
      company: "RD Saúde",
      achievement:
        "Growth within the support role, taking on more internal process and team support responsibilities.",
    },
    es: {
      role: "Atendente 2",
      company: "RD Saúde",
      achievement:
        "Evolución en la atención, ganando responsabilidad en procesos internos y soporte al equipo.",
    },
  },
  {
    year: 2022,
    pt: {
      role: "Supervisor Administrativo",
      company: "RD Saúde",
      achievement:
        "Liderança de equipe administrativa, otimização de processos e gestão de indicadores.",
    },
    en: {
      role: "Administrative Supervisor",
      company: "RD Saúde",
      achievement:
        "Led the administrative team, optimized processes and managed performance indicators.",
    },
    es: {
      role: "Supervisor Administrativo",
      company: "RD Saúde",
      achievement:
        "Liderazgo del equipo administrativo, optimización de procesos y gestión de indicadores.",
    },
  },
  {
    year: 2023,
    pt: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement:
        "Transição para a área de tecnologia através do programa de formação de desenvolvedores.",
    },
    en: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement: "Career transition into tech through the in-house developer training program.",
    },
    es: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement:
        "Transición al área de tecnología a través del programa de formación de desarrolladores.",
    },
  },
  {
    year: 2024,
    pt: {
      role: "Desenvolvedor Jr.",
      company: "RD Saúde",
      achievement:
        "Desenvolvedor backend em java/spring, atuando em uma plataforma de integrações de RH que conecta sistemas corporativos(LG, AD, operadores, SOC e outros). Trabalho com microsserviços de consulta, status e bff (Backend for Frontend) usando Oracle, contratos OpenAPI, Feign e APIs REST. Participo de análise de requisitos, implementação de features, testes unitários, documentação de contratos para o frontend e suporte a deploy em ambientes de integração.",
    },
    en: {
      role: "Junior Developer",
      company: "RD Saúde",
      achievement:
        "Backend developer in Java/Spring, working on an HR integrations platform that connects corporate systems (LG, AD, operators, SOC and others). I work with query, status and BFF (Backend for Frontend) microservices using Oracle, OpenAPI contracts, Feign and REST APIs. I participate in requirements analysis, feature implementation, unit testing, frontend contract documentation and deployment support in integration environments.",
    },
    es: {
      role: "Desarrollador Jr.",
      company: "RD Saúde",
      achievement:
        "Desarrollador backend en Java/Spring, trabajando en una plataforma de integraciones de RRHH que conecta sistemas corporativos (LG, AD, operadores, SOC y otros). Trabajo con microservicios de consulta, estado y BFF (Backend for Frontend) usando Oracle, contratos OpenAPI, Feign y APIs REST. Participo en el análisis de requisitos, implementación de funciones, pruebas unitarias, documentación de contratos para el frontend y soporte de despliegue en entornos de integración.",
    },
  },
];

// Skills with proficiency 0-100
export const SKILLS = [
  { name: "Go", level: 92, color: "from-cyan-400 to-sky-500" },
  { name: "React Native", level: 85, color: "from-indigo-400 to-violet-500" },
  { name: "TypeScript", level: 94, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", level: 90, color: "from-emerald-400 to-green-600" },
  { name: "Java", level: 78, color: "from-orange-400 to-red-500" },
  { name: "React", level: 80, color: "from-sky-400 to-indigo-500" },
  { name: "PHP", level: 50, color: "from-violet-400 to-purple-600" },
  { name: "PostgreSQL", level: 88, color: "from-sky-500 to-blue-700" },
];

// Mood options
export const MOODS = [
  { emoji: "☕", pt: "Focado", en: "Focused", es: "Concentrado" },
  { emoji: "⚡", pt: "Codando", en: "Coding", es: "Codeando" },
  { emoji: "🚀", pt: "Lançando Versão", en: "Shipping Release", es: "Lanzando Versión" },
  { emoji: "🧪", pt: "Em Pesquisa", en: "Researching", es: "Investigando" },
  { emoji: "🎧", pt: "Deep Work", en: "Deep Work", es: "Deep Work" },
];

// Projects for the "Flicker Carousel"
// `repo` is "owner/name" and is used to fetch real language % from the GitHub API.
export const PROJECTS = [
  {
    name: "GeoRisk",
    repo: "joaovitorevora/GeoRisk",
    stack: ["trabalho de conclusão de curso", "Geolocalização", "Web Scraping"],
    pt: "trabalho de conclusão de curso de mapeamento de zonas de risco por geolocalização: identifica áreas com maior índice de criminalidade e alerta o usuário ao entrar em uma zona de risco, alimentando o mapa via web scraping de portais de notícias da cidade.",
    en: "Final-year project mapping risk zones via geolocation: identifies high-crime areas and warns the user when entering one, feeding the map through web scraping of local news portals.",
    es: "trabalho de conclusão de curso de mapeo de zonas de riesgo por geolocalización: identifica áreas con mayor índice de criminalidad y alerta al usuario al entrar en una, alimentando el mapa mediante web scraping de portales de noticias.",
    demo: "https://github.com/joaovitorevora/GeoRisk",
    code: "https://github.com/joaovitorevora/GeoRisk",
  },
  {
    name: "PrevBet AI",
    repo: "joaovitorevora/PrevBet",
    stack: ["Firebase", "Python", "Gemini API", "ML"],
    pt: "Solução Full Stack de análise probabilística de partidas de futebol com loop de feedback: o robô valida os resultados do dia anterior e retroalimenta o motor de previsão (xG, Poisson), com IA Generativa (Gemini) atuando como auditora.",
    en: "Full-stack football match probability analysis with a feedback loop: a validator audits the previous day's results and retrains the prediction engine (xG, Poisson), with Generative AI (Gemini) acting as auditor.",
    es: "Solución Full Stack de análisis probabilístico de partidos de fútbol con feedback loop: el robot valida los resultados del día anterior y realimenta el motor de predicción (xG, Poisson), con IA Generativa (Gemini) como auditora.",
    demo: "https://prev-bet.vercel.app/",
    code: "https://github.com/joaovitorevora/PrevBet",
  },
  {
    name: "Scraper",
    repo: "joaovitorevora/Scraper",
    stack: ["Web Scraping", "Automação"],
    pt: "Web scraping de portais de notícias para extrair ocorrências de crimes e alimentar as zonas de risco do trabalho de conclusão de curso GeoRisk.",
    en: "Web scraping of news portals to extract crime reports and feed the risk zones of the GeoRisk project.",
    es: "Web scraping de portales de noticias para extraer ocurrencias de crímenes y alimentar las zonas de riesgo del trabajo de conclusión de curso GeoRisk.",
    demo: "https://github.com/joaovitorevora/Scraper",
    code: "https://github.com/joaovitorevora/Scraper",
  },
  {
    name: "Chat APS",
    repo: "joaovitorevora/Chat-APS",
    stack: ["Real-time", "Chat"],
    pt: "Chat em tempo real desenvolvido como projeto acadêmico durante a faculdade.",
    en: "Real-time chat application built as an academic project during college.",
    es: "Chat en tiempo real desarrollado como proyecto académico durante la facultad.",
    demo: "https://github.com/joaovitorevora/Chat-APS",
    code: "https://github.com/joaovitorevora/Chat-APS",
  },
  {
    name: "Spotyflix",
    repo: "joaovitorevora/Resilia-PI4",
    stack: ["Streaming", "Full Stack"],
    pt: 'Projeto de streaming "toda mídia em todo lugar", capaz de disponibilizar músicas, filmes, séries e demais mídias em uma única plataforma.',
    en: 'Streaming project "all media everywhere" capable of serving music, movies, series and other media on a single platform.',
    es: 'Proyecto de streaming "toda media en todo lugar", capaz de ofrecer música, películas, series y otras medias en una única plataforma.',
    demo: "https://github.com/joaovitorevora/Resilia-PI4",
    code: "https://github.com/joaovitorevora/Resilia-PI4",
  },
  {
    name: "FrontEnders AI",
    repo: "joaovitorevora/Resilia-PG2",
    stack: ["IA", "Chatbot", "NLP"],
    pt: "Chatbot Enterprise com IA que automatiza tarefas corporativas: traz informações financeiras em tempo real, gera estimativas e probabilidades, usando Machine Learning e Natural Language Processing.",
    en: "Enterprise AI chatbot that automates business tasks: surfaces real-time financial information, generates estimates and probabilities, using Machine Learning and Natural Language Processing.",
    es: "Chatbot Enterprise con IA que automatiza tareas corporativas: muestra información financiera en tiempo real, genera estimaciones y probabilidades, usando Machine Learning y Natural Language Processing.",
    demo: "https://joaovitorevora.github.io/Resilia-PG2/",
    code: "https://github.com/joaovitorevora/Resilia-PG2",
  },
  {
    name: "Servidor de Teste",
    repo: "joaovitorevora/Resilia-PI3",
    stack: ["json-server", "REST API"],
    pt: "Servidor de teste (json-server) com múltiplas rotas suportando GET, POST, PUT e DELETE, ideal para validação de requisições via Insomnia ou frameworks similares.",
    en: "Test server (json-server) with multiple routes supporting GET, POST, PUT and DELETE — ideal for request validation via Insomnia or similar tools.",
    es: "Servidor de prueba (json-server) con múltiples rutas soportando GET, POST, PUT y DELETE, ideal para validación de requests con Insomnia o herramientas similares.",
    demo: "https://github.com/joaovitorevora/Resilia-PI3",
    code: "https://github.com/joaovitorevora/Resilia-PI3",
  },
];

// Courses & Certifications
export const COURSES = [
  {
    name: "Modern Java: Mastering Features from Java 8 to Java 21",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Domínio dos recursos modernos do Java, do Java 8 ao Java 21." },
    en: { description: "Mastering modern Java features, from Java 8 to Java 21." },
    es: { description: "Dominio de las características modernas de Java, de Java 8 a Java 21." },
    certificateUrl: "https://www.udemy.com/certificate/UC-04c3af6c-c935-4bed-9217-f7367ba9fc00/",
  },
  {
    name: "Git e Github Essencial para o Desenvolvedor",
    issuer: "Udemy",
    year: 2024,
    pt: {
      description:
        "Fundamentos essenciais de Git e GitHub para o fluxo de trabalho do desenvolvedor.",
    },
    en: { description: "Essential Git and GitHub fundamentals for the developer workflow." },
    es: { description: "Fundamentos esenciales de Git y GitHub para el flujo del desarrollador." },
    certificateUrl: "https://www.udemy.com/certificate/UC-d341d4db-4452-4b3f-aabf-cda13124e6fd/",
  },
  {
    name: "Gestão Ágil com Scrum COMPLETO",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Gestão ágil de projetos com Scrum: papéis, cerimônias e artefatos." },
    en: { description: "Agile project management with Scrum: roles, ceremonies and artifacts." },
    es: { description: "Gestión ágil de proyectos con Scrum: roles, ceremonias y artefactos." },
    certificateUrl: "https://www.udemy.com/certificate/UC-449d21c9-56e4-4e29-aab4-68eddd268e48/",
  },
  {
    name: "Comunicação Assertiva",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Técnicas de comunicação assertiva para ambientes profissionais." },
    en: { description: "Assertive communication techniques for professional environments." },
    es: { description: "Técnicas de comunicación asertiva para entornos profesionales." },
    certificateUrl: "https://www.udemy.com/certificate/UC-702679a7-b7fd-45ce-a088-a44f1f1bbbec/",
  },
  {
    name: "Git Completo: Do Básico ao Avançado",
    issuer: "Udemy",
    year: 2024,
    pt: {
      description: "Git completo, do básico ao avançado, incluindo fluxos de trabalho em equipe.",
    },
    en: { description: "Complete Git, from basics to advanced topics, including team workflows." },
    es: { description: "Git completo, de lo básico a lo avanzado, incluyendo flujos en equipo." },
    certificateUrl: "https://www.udemy.com/certificate/UC-7978eced-cddb-4794-a668-1eaecf108e7b/",
  },
  {
    name: "NLW Journey - Java",
    issuer: "Rocketseat",
    year: 2024,
    pt: { description: "Imersão prática construindo aplicações com Java no NLW Journey." },
    en: { description: "Hands-on immersion building Java applications during NLW Journey." },
    es: { description: "Inmersión práctica construyendo aplicaciones con Java en el NLW Journey." },
    certificateUrl:
      "https://app.rocketseat.com.br/certificates/66dbe548-1aa1-4c49-bc79-cdf8dd387462",
  },
  {
    name: "React JS do Zero ao Avançado na Prática",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "React JS na prática, do zero ao avançado, com projetos reais." },
    en: { description: "Hands-on React JS, from zero to advanced, with real projects." },
    es: { description: "React JS en la práctica, de cero a avanzado, con proyectos reales." },
    certificateUrl: "https://www.udemy.com/certificate/UC-917c9283-e079-4f78-b83d-87f0afc483ca/",
  },
  {
    name: "Curso de Java",
    issuer: "Rocketseat",
    year: 2024,
    pt: { description: "Fundamentos e prática de Java aplicados ao mercado." },
    en: { description: "Java fundamentals and practice applied to real-world scenarios." },
    es: { description: "Fundamentos y práctica de Java aplicados al mercado." },
    certificateUrl:
      "https://app.rocketseat.com.br/certificates/f15578b1-4957-4a18-9cc2-0330b6c8199c",
  },
  {
    name: "Desenvolvimento Web (Bootcamp)",
    issuer: "Resilia Educação",
    year: 2023,
    pt: {
      description: "Bootcamp completo de desenvolvimento web, com frontend, backend e projetos.",
    },
    en: {
      description: "Complete web development bootcamp covering frontend, backend and projects.",
    },
    es: { description: "Bootcamp completo de desarrollo web: frontend, backend y proyectos." },
    certificateUrl: "https://drive.google.com/file/d/1BCEt9wEKwK5SsSUVFHU9PSj43Kv3cfcF/view",
  },
];

// ============================================
// UI TRANSLATIONS
// ============================================

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      courses: "Cursos",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Disponível para novos projetos",
      title: "Olá, eu sou João Vitor Dias.",
      subtitle: "Desenvolvedor Full Stack focado em construir experiências digitais",
      cta: "Conversar agora",
    },
    status: {
      title: "Status Atual",
      activeNow: "Ativo agora",
      changeMood: "Alterar foco",
      currentRole: "Cargo",
      currentCompany: "Empresa",
    },
    timeline: {
      title: "Linha do Tempo",
      subtitle: "Clique em um ano para viajar pela carreira",
      role: "Cargo",
      company: "Empresa",
      achievement: "Conquista técnica",
    },
    terminal: {
      title: "Terminal",
      welcome: [
        "system v3.14 — bem-vindo ao portfólio",
        "digite 'help' e pressione enter para começar",
      ],
      prompt: "visitor@portfolio:~$",
      unknown: "comando não encontrado. tente 'help'",
      help: [
        "comandos disponíveis:",
        "  help      — mostra esta lista",
        "  about     — sobre mim",
        "  skills    — tecnologias principais",
        "  current   — cargo e empresa atuais",
        "  contact   — links de contato",
        "  clear     — limpa o terminal",
      ],
      about:
        "Sou Bacharel em Ciência da Computação e Desenvolvedor Full Stack, movido pelo desafio de transformar lógica complexa em sistemas eficientes e escaláveis. Atualmente, atuo como Desenvolvedor Jr na RD Saúde, maior rede de farmácias da América Latina, onde foco no desenvolvimento de soluções de alta performance.\n\nMinha abordagem combina o rigor conceitual da computação com a agilidade prática que o mercado exige. Transito com facilidade entre o desenvolvimento de APIs robustas e concorrentes no ecossistema de backend (como Go, python e Java) e a criação de interfaces fluidas e dinâmicas para web e mobile (React Native, React, PHP/WordPress). Acredito que um código limpo e uma arquitetura bem pensada são a base para qualquer produto digital de sucesso.",
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tecnologias que uso no dia a dia",
    },
    projects: {
      title: "Laboratório de Projetos",
      next: "Próximo",
      prev: "Anterior",
      demo: "Ver demo",
      code: "Código",
    },
    contact: {
      title: "Vamos conversar",
      subtitle: "Conte sobre seu projeto. Respondo em até 24h.",
      whatsapp: "WhatsApp",
      cta: "Chamar no WhatsApp",
    },
    courses: {
      title: "Formação & Certificações",
      subtitle: "Cursos e certificados que complementam minha trajetória",
      certificate: "Ver certificado",
    },
    footer: { rights: "Todos os direitos reservados." },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      courses: "Courses",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Personal portfolio",
      title: "Hello, I'm João Vitor Dias.",
      subtitle: "Full Stack developer focused on building digital experiences",
      cta: "Let's talk",
    },
    status: {
      title: "Current Status",
      activeNow: "Active now",
      changeMood: "Change focus",
      currentRole: "Role",
      currentCompany: "Company",
    },
    timeline: {
      title: "Career Timeline",
      subtitle: "Click a year to time-travel through the career",
      role: "Role",
      company: "Company",
      achievement: "Technical achievement",
    },
    terminal: {
      title: "Terminal",
      welcome: ["system v3.14 — welcome to the portfolio", "type 'help' and press enter to begin"],
      prompt: "visitor@portfolio:~$",
      unknown: "command not found. try 'help'",
      help: [
        "available commands:",
        "  help      — show this list",
        "  about     — about me",
        "  skills    — core technologies",
        "  current   — current role and company",
        "  contact   — contact links",
        "  clear     — clear terminal",
      ],
      about:
        "I am a Bachelor in Computer Science and a Full Stack Developer, driven by the challenge of turning complex logic into efficient and scalable systems. I currently work as a Junior Developer at RD Saúde, the largest pharmacy network in Latin America, where I focus on building high-performance solutions.\n\nMy approach combines the conceptual rigor of computing with the practical agility that the market demands. I move easily between developing robust, concurrent backend APIs (using Go, Python and Java) and creating fluid, dynamic interfaces for web and mobile (React Native, React, PHP/WordPress). I believe clean code and thoughtful architecture are the foundation of any successful digital product.",
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tech I use day to day",
    },
    projects: {
      title: "Project Lab",
      next: "Next",
      prev: "Previous",
      demo: "Live demo",
      code: "Source",
    },
    contact: {
      title: "Let's talk",
      subtitle: "Tell me about your project. I reply within 24h.",
      whatsapp: "WhatsApp",
      cta: "Message on WhatsApp",
    },
    courses: {
      title: "Education & Certifications",
      subtitle: "Courses and certificates that complement my journey",
      certificate: "View certificate",
    },
    footer: { rights: "All rights reserved." },
  },
  es: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Proyectos",
      courses: "Cursos",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Portafolio personal",
      title: "Hola, soy João Vitor Dias.",
      subtitle: "Desarrollador Full Stack enfocado en construir experiencias digitales",
      cta: "Hablemos",
    },
    status: {
      title: "Estado Actual",
      activeNow: "Activo ahora",
      changeMood: "Cambiar foco",
      currentRole: "Cargo",
      currentCompany: "Empresa",
    },
    timeline: {
      title: "Línea de Tiempo",
      subtitle: "Haz clic en un año para viajar por la carrera",
      role: "Cargo",
      company: "Empresa",
      achievement: "Logro técnico",
    },
    terminal: {
      title: "Terminal",
      welcome: [
        "system v3.14 — bienvenido al portafolio",
        "escribe 'help' y presiona enter para comenzar",
      ],
      prompt: "visitor@portfolio:~$",
      unknown: "comando no encontrado. prueba 'help'",
      help: [
        "comandos disponibles:",
        "  help      — muestra esta lista",
        "  about     — sobre mí",
        "  skills    — tecnologías principales",
        "  current   — cargo y empresa actuales",
        "  contact   — enlaces de contacto",
        "  clear     — limpia la terminal",
      ],
      about:
        "Soy Licenciado en Ciencias de la Computación y Desarrollador Full Stack, motivado por el desafío de transformar lógica compleja en sistemas eficientes y escalables. Actualmente trabajo como Desarrollador Jr en RD Saúde, la mayor red de farmacias de América Latina, donde me enfoco en desarrollar soluciones de alto rendimiento.\n\nMi enfoque combina el rigor conceptual de la computación con la agilidad práctica que exige el mercado. Paso con facilidad del desarrollo de APIs backend robustas y concurrentes (como Go, Python y Java) a la creación de interfaces fluidas y dinámicas para web y mobile (React Native, React, PHP/WordPress). Creo que un código limpio y una arquitectura bien pensada son la base de cualquier producto digital exitoso.",
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tecnologías que uso a diario",
    },
    projects: {
      title: "Laboratorio de Proyectos",
      next: "Siguiente",
      prev: "Anterior",
      demo: "Ver demo",
      code: "Código",
    },
    contact: {
      title: "Hablemos",
      subtitle: "Cuéntame sobre tu proyecto. Respondo en menos de 24h.",
      whatsapp: "WhatsApp",
      cta: "Escribir por WhatsApp",
    },
    courses: {
      title: "Formación & Certificaciones",
      subtitle: "Cursos y certificados que complementan mi trayectoria",
      certificate: "Ver certificado",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
} as const;

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

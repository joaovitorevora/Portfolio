import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CodeXml, G as Globe, a as ChevronDown, A as ArrowRight, M as MessageCircle, b as Github, L as Linkedin, c as MapPin, B as Briefcase, T as Terminal, d as Cpu, R as Rocket, S as Sparkles, E as ExternalLink, e as ChevronLeft, f as ChevronRight, g as Award } from "../_libs/lucide-react.mjs";
const PROFILE = {
  name: "João Vitor Évora",
  handle: "joao",
  location: "Remote · Brazil",
  github: "https://github.com/joaovitorevora",
  githubHandle: "@joaovitorevora",
  linkedin: "https://www.linkedin.com/in/joaovitorevora/",
  linkedinHandle: "/in/joaovitorevora",
  whatsapp: "https://wa.me/5519988146846",
  whatsappLabel: "+55 19 9 8814-6846"
};
const TIMELINE = [
  {
    year: 2019,
    pt: {
      role: "Atendente 1",
      company: "RD Saúde",
      achievement: "Início da trajetória profissional com foco em atendimento e relacionamento com o cliente."
    },
    en: {
      role: "Attendant 1",
      company: "RD Saúde",
      achievement: "Start of professional journey, focused on customer service and client relationships."
    },
    es: {
      role: "Atendente 1",
      company: "RD Saúde",
      achievement: "Inicio de la trayectoria profesional con foco en atención y relación con el cliente."
    }
  },
  {
    year: 2020,
    pt: {
      role: "Atendente 2",
      company: "RD Saúde",
      achievement: "Evolução no atendimento, ganhando responsabilidade em processos internos e suporte à equipe."
    },
    en: {
      role: "Attendant 2",
      company: "RD Saúde",
      achievement: "Growth within the support role, taking on more internal process and team support responsibilities."
    },
    es: {
      role: "Atendente 2",
      company: "RD Saúde",
      achievement: "Evolución en la atención, ganando responsabilidad en procesos internos y soporte al equipo."
    }
  },
  {
    year: 2022,
    pt: {
      role: "Supervisor Administrativo",
      company: "RD Saúde",
      achievement: "Liderança de equipe administrativa, otimização de processos e gestão de indicadores."
    },
    en: {
      role: "Administrative Supervisor",
      company: "RD Saúde",
      achievement: "Led the administrative team, optimized processes and managed performance indicators."
    },
    es: {
      role: "Supervisor Administrativo",
      company: "RD Saúde",
      achievement: "Liderazgo del equipo administrativo, optimización de procesos y gestión de indicadores."
    }
  },
  {
    year: 2023,
    pt: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement: "Transição para a área de tecnologia através do programa de formação de desenvolvedores."
    },
    en: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement: "Career transition into tech through the in-house developer training program."
    },
    es: {
      role: "Dev Learning",
      company: "RD Saúde",
      achievement: "Transición al área de tecnología a través del programa de formación de desarrolladores."
    }
  },
  {
    year: 2024,
    pt: {
      role: "Desenvolvedor Jr.",
      company: "RD Saúde",
      achievement: "Desenvolvedor backend em java/spring, atuando em uma plataforma de integrações de RH que conecta sistemas corporativos(LG, AD, operadores, SOC e outros). Trabalho com microsserviços de consulta, status e bff (Backend for Frontend) usando Oracle, contratos OpenAPI, Feign e APIs REST. Participo de análise de requisitos, implementação de features, testes unitários, documentação de contratos para o frontend e suporte a deploy em ambientes de integração."
    },
    en: {
      role: "Junior Developer",
      company: "RD Saúde",
      achievement: "Backend developer in Java/Spring, working on an HR integrations platform that connects corporate systems (LG, AD, operators, SOC and others). I work with query, status and BFF (Backend for Frontend) microservices using Oracle, OpenAPI contracts, Feign and REST APIs. I participate in requirements analysis, feature implementation, unit testing, frontend contract documentation and deployment support in integration environments."
    },
    es: {
      role: "Desarrollador Jr.",
      company: "RD Saúde",
      achievement: "Desarrollador backend en Java/Spring, trabajando en una plataforma de integraciones de RRHH que conecta sistemas corporativos (LG, AD, operadores, SOC y otros). Trabajo con microservicios de consulta, estado y BFF (Backend for Frontend) usando Oracle, contratos OpenAPI, Feign y APIs REST. Participo en el análisis de requisitos, implementación de funciones, pruebas unitarias, documentación de contratos para el frontend y soporte de despliegue en entornos de integración."
    }
  }
];
const SKILLS = [
  { name: "Go", level: 92, color: "from-cyan-400 to-sky-500" },
  { name: "React Native", level: 85, color: "from-indigo-400 to-violet-500" },
  { name: "TypeScript", level: 94, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", level: 90, color: "from-emerald-400 to-green-600" },
  { name: "Java", level: 78, color: "from-orange-400 to-red-500" },
  { name: "React", level: 80, color: "from-sky-400 to-indigo-500" },
  { name: "PHP", level: 50, color: "from-violet-400 to-purple-600" },
  { name: "PostgreSQL", level: 88, color: "from-sky-500 to-blue-700" }
];
const MOODS = [
  { emoji: "☕", pt: "Focado", en: "Focused", es: "Concentrado" },
  { emoji: "⚡", pt: "Codando", en: "Coding", es: "Codeando" },
  { emoji: "🚀", pt: "Lançando Versão", en: "Shipping Release", es: "Lanzando Versión" },
  { emoji: "🧪", pt: "Em Pesquisa", en: "Researching", es: "Investigando" },
  { emoji: "🎧", pt: "Deep Work", en: "Deep Work", es: "Deep Work" }
];
const PROJECTS = [
  {
    name: "GeoRisk",
    repo: "joaovitorevora/GeoRisk",
    stack: ["trabalho de conclusão de curso", "Geolocalização", "Web Scraping"],
    pt: "trabalho de conclusão de curso de mapeamento de zonas de risco por geolocalização: identifica áreas com maior índice de criminalidade e alerta o usuário ao entrar em uma zona de risco, alimentando o mapa via web scraping de portais de notícias da cidade.",
    en: "Final-year project mapping risk zones via geolocation: identifies high-crime areas and warns the user when entering one, feeding the map through web scraping of local news portals.",
    es: "trabalho de conclusão de curso de mapeo de zonas de riesgo por geolocalización: identifica áreas con mayor índice de criminalidad y alerta al usuario al entrar en una, alimentando el mapa mediante web scraping de portales de noticias.",
    demo: "https://github.com/joaovitorevora/GeoRisk",
    code: "https://github.com/joaovitorevora/GeoRisk"
  },
  {
    name: "PrevBet AI",
    repo: "joaovitorevora/PrevBet",
    stack: ["Firebase", "Python", "Gemini API", "ML"],
    pt: "Solução Full Stack de análise probabilística de partidas de futebol com loop de feedback: o robô valida os resultados do dia anterior e retroalimenta o motor de previsão (xG, Poisson), com IA Generativa (Gemini) atuando como auditora.",
    en: "Full-stack football match probability analysis with a feedback loop: a validator audits the previous day's results and retrains the prediction engine (xG, Poisson), with Generative AI (Gemini) acting as auditor.",
    es: "Solución Full Stack de análisis probabilístico de partidos de fútbol con feedback loop: el robot valida los resultados del día anterior y realimenta el motor de predicción (xG, Poisson), con IA Generativa (Gemini) como auditora.",
    demo: "https://prev-bet.vercel.app/",
    code: "https://github.com/joaovitorevora/PrevBet"
  },
  {
    name: "Scraper",
    repo: "joaovitorevora/Scraper",
    stack: ["Web Scraping", "Automação"],
    pt: "Web scraping de portais de notícias para extrair ocorrências de crimes e alimentar as zonas de risco do trabalho de conclusão de curso GeoRisk.",
    en: "Web scraping of news portals to extract crime reports and feed the risk zones of the GeoRisk project.",
    es: "Web scraping de portales de noticias para extraer ocurrencias de crímenes y alimentar las zonas de riesgo del trabajo de conclusión de curso GeoRisk.",
    demo: "https://github.com/joaovitorevora/Scraper",
    code: "https://github.com/joaovitorevora/Scraper"
  },
  {
    name: "Chat APS",
    repo: "joaovitorevora/Chat-APS",
    stack: ["Real-time", "Chat"],
    pt: "Chat em tempo real desenvolvido como projeto acadêmico durante a faculdade.",
    en: "Real-time chat application built as an academic project during college.",
    es: "Chat en tiempo real desarrollado como proyecto académico durante la facultad.",
    demo: "https://github.com/joaovitorevora/Chat-APS",
    code: "https://github.com/joaovitorevora/Chat-APS"
  },
  {
    name: "Spotyflix",
    repo: "joaovitorevora/Resilia-PI4",
    stack: ["Streaming", "Full Stack"],
    pt: 'Projeto de streaming "toda mídia em todo lugar", capaz de disponibilizar músicas, filmes, séries e demais mídias em uma única plataforma.',
    en: 'Streaming project "all media everywhere" capable of serving music, movies, series and other media on a single platform.',
    es: 'Proyecto de streaming "toda media en todo lugar", capaz de ofrecer música, películas, series y otras medias en una única plataforma.',
    demo: "https://github.com/joaovitorevora/Resilia-PI4",
    code: "https://github.com/joaovitorevora/Resilia-PI4"
  },
  {
    name: "FrontEnders AI",
    repo: "joaovitorevora/Resilia-PG2",
    stack: ["IA", "Chatbot", "NLP"],
    pt: "Chatbot Enterprise com IA que automatiza tarefas corporativas: traz informações financeiras em tempo real, gera estimativas e probabilidades, usando Machine Learning e Natural Language Processing.",
    en: "Enterprise AI chatbot that automates business tasks: surfaces real-time financial information, generates estimates and probabilities, using Machine Learning and Natural Language Processing.",
    es: "Chatbot Enterprise con IA que automatiza tareas corporativas: muestra información financiera en tiempo real, genera estimaciones y probabilidades, usando Machine Learning y Natural Language Processing.",
    demo: "https://joaovitorevora.github.io/Resilia-PG2/",
    code: "https://github.com/joaovitorevora/Resilia-PG2"
  },
  {
    name: "Servidor de Teste",
    repo: "joaovitorevora/Resilia-PI3",
    stack: ["json-server", "REST API"],
    pt: "Servidor de teste (json-server) com múltiplas rotas suportando GET, POST, PUT e DELETE, ideal para validação de requisições via Insomnia ou frameworks similares.",
    en: "Test server (json-server) with multiple routes supporting GET, POST, PUT and DELETE — ideal for request validation via Insomnia or similar tools.",
    es: "Servidor de prueba (json-server) con múltiples rutas soportando GET, POST, PUT y DELETE, ideal para validación de requests con Insomnia o herramientas similares.",
    demo: "https://github.com/joaovitorevora/Resilia-PI3",
    code: "https://github.com/joaovitorevora/Resilia-PI3"
  }
];
const COURSES = [
  {
    name: "Modern Java: Mastering Features from Java 8 to Java 21",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Domínio dos recursos modernos do Java, do Java 8 ao Java 21." },
    en: { description: "Mastering modern Java features, from Java 8 to Java 21." },
    es: { description: "Dominio de las características modernas de Java, de Java 8 a Java 21." },
    certificateUrl: "https://www.udemy.com/certificate/UC-04c3af6c-c935-4bed-9217-f7367ba9fc00/"
  },
  {
    name: "Git e Github Essencial para o Desenvolvedor",
    issuer: "Udemy",
    year: 2024,
    pt: {
      description: "Fundamentos essenciais de Git e GitHub para o fluxo de trabalho do desenvolvedor."
    },
    en: { description: "Essential Git and GitHub fundamentals for the developer workflow." },
    es: { description: "Fundamentos esenciales de Git y GitHub para el flujo del desarrollador." },
    certificateUrl: "https://www.udemy.com/certificate/UC-d341d4db-4452-4b3f-aabf-cda13124e6fd/"
  },
  {
    name: "Gestão Ágil com Scrum COMPLETO",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Gestão ágil de projetos com Scrum: papéis, cerimônias e artefatos." },
    en: { description: "Agile project management with Scrum: roles, ceremonies and artifacts." },
    es: { description: "Gestión ágil de proyectos con Scrum: roles, ceremonias y artefactos." },
    certificateUrl: "https://www.udemy.com/certificate/UC-449d21c9-56e4-4e29-aab4-68eddd268e48/"
  },
  {
    name: "Comunicação Assertiva",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "Técnicas de comunicação assertiva para ambientes profissionais." },
    en: { description: "Assertive communication techniques for professional environments." },
    es: { description: "Técnicas de comunicación asertiva para entornos profesionales." },
    certificateUrl: "https://www.udemy.com/certificate/UC-702679a7-b7fd-45ce-a088-a44f1f1bbbec/"
  },
  {
    name: "Git Completo: Do Básico ao Avançado",
    issuer: "Udemy",
    year: 2024,
    pt: {
      description: "Git completo, do básico ao avançado, incluindo fluxos de trabalho em equipe."
    },
    en: { description: "Complete Git, from basics to advanced topics, including team workflows." },
    es: { description: "Git completo, de lo básico a lo avanzado, incluyendo flujos en equipo." },
    certificateUrl: "https://www.udemy.com/certificate/UC-7978eced-cddb-4794-a668-1eaecf108e7b/"
  },
  {
    name: "NLW Journey - Java",
    issuer: "Rocketseat",
    year: 2024,
    pt: { description: "Imersão prática construindo aplicações com Java no NLW Journey." },
    en: { description: "Hands-on immersion building Java applications during NLW Journey." },
    es: { description: "Inmersión práctica construyendo aplicaciones con Java en el NLW Journey." },
    certificateUrl: "https://app.rocketseat.com.br/certificates/66dbe548-1aa1-4c49-bc79-cdf8dd387462"
  },
  {
    name: "React JS do Zero ao Avançado na Prática",
    issuer: "Udemy",
    year: 2024,
    pt: { description: "React JS na prática, do zero ao avançado, com projetos reais." },
    en: { description: "Hands-on React JS, from zero to advanced, with real projects." },
    es: { description: "React JS en la práctica, de cero a avanzado, con proyectos reales." },
    certificateUrl: "https://www.udemy.com/certificate/UC-917c9283-e079-4f78-b83d-87f0afc483ca/"
  },
  {
    name: "Curso de Java",
    issuer: "Rocketseat",
    year: 2024,
    pt: { description: "Fundamentos e prática de Java aplicados ao mercado." },
    en: { description: "Java fundamentals and practice applied to real-world scenarios." },
    es: { description: "Fundamentos y práctica de Java aplicados al mercado." },
    certificateUrl: "https://app.rocketseat.com.br/certificates/f15578b1-4957-4a18-9cc2-0330b6c8199c"
  },
  {
    name: "Desenvolvimento Web (Bootcamp)",
    issuer: "Resilia Educação",
    year: 2023,
    pt: {
      description: "Bootcamp completo de desenvolvimento web, com frontend, backend e projetos."
    },
    en: {
      description: "Complete web development bootcamp covering frontend, backend and projects."
    },
    es: { description: "Bootcamp completo de desarrollo web: frontend, backend y proyectos." },
    certificateUrl: "https://drive.google.com/file/d/1BCEt9wEKwK5SsSUVFHU9PSj43Kv3cfcF/view"
  }
];
const translations = {
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      courses: "Cursos",
      contact: "Contato"
    },
    hero: {
      eyebrow: "Disponível para novos projetos",
      title: "Olá, eu sou João Vitor Dias.",
      subtitle: "Desenvolvedor Full Stack focado em construir experiências digitais",
      cta: "Conversar agora"
    },
    status: {
      title: "Status Atual",
      activeNow: "Ativo agora",
      changeMood: "Alterar foco",
      currentRole: "Cargo",
      currentCompany: "Empresa"
    },
    timeline: {
      title: "Linha do Tempo",
      subtitle: "Clique em um ano para viajar pela carreira",
      role: "Cargo",
      company: "Empresa",
      achievement: "Conquista técnica"
    },
    terminal: {
      title: "Terminal",
      welcome: [
        "system v3.14 — bem-vindo ao portfólio",
        "digite 'help' e pressione enter para começar"
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
        "  clear     — limpa o terminal"
      ],
      about: "Sou Bacharel em Ciência da Computação e Desenvolvedor Full Stack, movido pelo desafio de transformar lógica complexa em sistemas eficientes e escaláveis. Atualmente, atuo como Desenvolvedor Jr na RD Saúde, maior rede de farmácias da América Latina, onde foco no desenvolvimento de soluções de alta performance.\n\nMinha abordagem combina o rigor conceitual da computação com a agilidade prática que o mercado exige. Transito com facilidade entre o desenvolvimento de APIs robustas e concorrentes no ecossistema de backend (como Go, python e Java) e a criação de interfaces fluidas e dinâmicas para web e mobile (React Native, React, PHP/WordPress). Acredito que um código limpo e uma arquitetura bem pensada são a base para qualquer produto digital de sucesso."
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tecnologias que uso no dia a dia"
    },
    projects: {
      title: "Laboratório de Projetos",
      next: "Próximo",
      prev: "Anterior",
      demo: "Ver demo",
      code: "Código"
    },
    contact: {
      title: "Vamos conversar",
      subtitle: "Conte sobre seu projeto. Respondo em até 24h.",
      whatsapp: "WhatsApp",
      cta: "Chamar no WhatsApp"
    },
    courses: {
      title: "Formação & Certificações",
      subtitle: "Cursos e certificados que complementam minha trajetória",
      certificate: "Ver certificado"
    },
    footer: { rights: "Todos os direitos reservados." }
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      courses: "Courses",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Personal portfolio",
      title: "Hello, I'm João Vitor Dias.",
      subtitle: "Full Stack developer focused on building digital experiences",
      cta: "Let's talk"
    },
    status: {
      title: "Current Status",
      activeNow: "Active now",
      changeMood: "Change focus",
      currentRole: "Role",
      currentCompany: "Company"
    },
    timeline: {
      title: "Career Timeline",
      subtitle: "Click a year to time-travel through the career",
      role: "Role",
      company: "Company",
      achievement: "Technical achievement"
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
        "  clear     — clear terminal"
      ],
      about: "I am a Bachelor in Computer Science and a Full Stack Developer, driven by the challenge of turning complex logic into efficient and scalable systems. I currently work as a Junior Developer at RD Saúde, the largest pharmacy network in Latin America, where I focus on building high-performance solutions.\n\nMy approach combines the conceptual rigor of computing with the practical agility that the market demands. I move easily between developing robust, concurrent backend APIs (using Go, Python and Java) and creating fluid, dynamic interfaces for web and mobile (React Native, React, PHP/WordPress). I believe clean code and thoughtful architecture are the foundation of any successful digital product."
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tech I use day to day"
    },
    projects: {
      title: "Project Lab",
      next: "Next",
      prev: "Previous",
      demo: "Live demo",
      code: "Source"
    },
    contact: {
      title: "Let's talk",
      subtitle: "Tell me about your project. I reply within 24h.",
      whatsapp: "WhatsApp",
      cta: "Message on WhatsApp"
    },
    courses: {
      title: "Education & Certifications",
      subtitle: "Courses and certificates that complement my journey",
      certificate: "View certificate"
    },
    footer: { rights: "All rights reserved." }
  },
  es: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Proyectos",
      courses: "Cursos",
      contact: "Contacto"
    },
    hero: {
      eyebrow: "Portafolio personal",
      title: "Hola, soy João Vitor Dias.",
      subtitle: "Desarrollador Full Stack enfocado en construir experiencias digitales",
      cta: "Hablemos"
    },
    status: {
      title: "Estado Actual",
      activeNow: "Activo ahora",
      changeMood: "Cambiar foco",
      currentRole: "Cargo",
      currentCompany: "Empresa"
    },
    timeline: {
      title: "Línea de Tiempo",
      subtitle: "Haz clic en un año para viajar por la carrera",
      role: "Cargo",
      company: "Empresa",
      achievement: "Logro técnico"
    },
    terminal: {
      title: "Terminal",
      welcome: [
        "system v3.14 — bienvenido al portafolio",
        "escribe 'help' y presiona enter para comenzar"
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
        "  clear     — limpia la terminal"
      ],
      about: "Soy Licenciado en Ciencias de la Computación y Desarrollador Full Stack, motivado por el desafío de transformar lógica compleja en sistemas eficientes y escalables. Actualmente trabajo como Desarrollador Jr en RD Saúde, la mayor red de farmacias de América Latina, donde me enfoco en desarrollar soluciones de alto rendimiento.\n\nMi enfoque combina el rigor conceptual de la computación con la agilidad práctica que exige el mercado. Paso con facilidad del desarrollo de APIs backend robustas y concurrentes (como Go, Python y Java) a la creación de interfaces fluidas y dinámicas para web y mobile (React Native, React, PHP/WordPress). Creo que un código limpio y una arquitectura bien pensada son la base de cualquier producto digital exitoso."
    },
    skills: {
      title: "Stack & Skills",
      subtitle: "Tecnologías que uso a diario"
    },
    projects: {
      title: "Laboratorio de Proyectos",
      next: "Siguiente",
      prev: "Anterior",
      demo: "Ver demo",
      code: "Código"
    },
    contact: {
      title: "Hablemos",
      subtitle: "Cuéntame sobre tu proyecto. Respondo en menos de 24h.",
      whatsapp: "WhatsApp",
      cta: "Escribir por WhatsApp"
    },
    courses: {
      title: "Formación & Certificaciones",
      subtitle: "Cursos y certificados que complementan mi trayectoria",
      certificate: "Ver certificado"
    },
    footer: { rights: "Todos los derechos reservados." }
  }
};
const languages = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" }
];
const LANG_COLORS = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  Go: "#00ADD8",
  Java: "#B07219",
  PHP: "#4F5D95",
  HTML: "#E34C26",
  CSS: "#563D7C",
  SCSS: "#C6538C",
  Shell: "#89E051",
  Dockerfile: "#384D54",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  C: "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  Ruby: "#701516",
  Rust: "#DEA584",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  Makefile: "#427819",
  Lua: "#000080",
  Elixir: "#6E4A7E",
  Markdown: "#083FA1",
  EJS: "#A91E50",
  Handlebars: "#F7931E"
};
function langColor(name) {
  return LANG_COLORS[name] ?? "#818CF8";
}
const CACHE_PREFIX = "gh-langs:";
const TTL_MS = 6 * 60 * 60 * 1e3;
function readCache(repo) {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + repo);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}
function writeCache(repo, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + repo, JSON.stringify({ ts: Date.now(), data }));
  } catch {
  }
}
function useGithubLanguages(repo) {
  const [state, setState] = reactExports.useState({
    loading: !!repo,
    error: null,
    data: repo ? readCache(repo) : null
  });
  reactExports.useEffect(() => {
    if (!repo) return;
    const cached = readCache(repo);
    if (cached) {
      setState({ loading: false, error: null, data: cached });
      return;
    }
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    fetch(`https://api.github.com/repos/${repo}/languages`, {
      headers: { Accept: "application/vnd.github+json" }
    }).then(async (r) => {
      if (!r.ok) throw new Error(`GitHub API ${r.status}`);
      return await r.json();
    }).then((raw) => {
      const total = Object.values(raw).reduce((a, b) => a + b, 0);
      if (total === 0) {
        if (!cancelled) setState({ loading: false, error: null, data: [] });
        return;
      }
      const entries = Object.entries(raw).map(([name, bytes]) => ({
        name,
        bytes,
        percent: bytes / total * 100
      })).sort((a, b) => b.percent - a.percent);
      writeCache(repo, entries);
      if (!cancelled) setState({ loading: false, error: null, data: entries });
    }).catch((err) => {
      if (!cancelled) setState({ loading: false, error: err.message, data: null });
    });
    return () => {
      cancelled = true;
    };
  }, [repo]);
  return state;
}
function useAggregateLanguages(repos) {
  const key = repos.join("|");
  const [state, setState] = reactExports.useState({ loading: true, error: null, data: null });
  reactExports.useEffect(() => {
    if (repos.length === 0) {
      setState({ loading: false, error: null, data: [] });
      return;
    }
    let cancelled = false;
    const fetchOne = async (repo) => {
      const cached = readCache(repo);
      if (cached) {
        const obj = {};
        for (const c of cached) obj[c.name] = c.bytes;
        return obj;
      }
      try {
        const r = await fetch(`https://api.github.com/repos/${repo}/languages`, {
          headers: { Accept: "application/vnd.github+json" }
        });
        if (!r.ok) return {};
        const raw = await r.json();
        const total = Object.values(raw).reduce((a, b) => a + b, 0);
        if (total > 0) {
          const entries = Object.entries(raw).map(([name, bytes]) => ({ name, bytes, percent: bytes / total * 100 })).sort((a, b) => b.percent - a.percent);
          writeCache(repo, entries);
        }
        return raw;
      } catch {
        return {};
      }
    };
    setState((s) => ({ ...s, loading: true, error: null }));
    Promise.all(repos.map(fetchOne)).then((all) => {
      if (cancelled) return;
      const totals = {};
      for (const r of all) {
        for (const [name, bytes] of Object.entries(r)) {
          totals[name] = (totals[name] ?? 0) + bytes;
        }
      }
      const sum = Object.values(totals).reduce((a, b) => a + b, 0);
      if (sum === 0) {
        setState({ loading: false, error: null, data: [] });
        return;
      }
      const entries = Object.entries(totals).map(([name, bytes]) => ({ name, bytes, percent: bytes / sum * 100 })).sort((a, b) => b.percent - a.percent);
      setState({ loading: false, error: null, data: entries });
    });
    return () => {
      cancelled = true;
    };
  }, [key]);
  return state;
}
function Portfolio() {
  const [lang, setLang] = reactExports.useState("pt");
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const t = translations[lang];
  reactExports.useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.lang = lang;
  }, [lang]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-indigo-accent to-emerald-accent text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          PROFILE.handle,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ".dev" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex", children: ["about", "stack", "projects", "courses", "contact"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${k}`, className: "transition-colors hover:text-foreground", children: t.nav[k] }) }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setLangOpen((v) => !v),
            onBlur: () => setTimeout(() => setLangOpen(false), 150),
            className: "flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              languages.find((l) => l.code === lang)?.flag,
              " ",
              languages.find((l) => l.code === lang)?.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 opacity-60" })
            ]
          }
        ),
        langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 mt-2 w-32 overflow-hidden rounded-md border border-border bg-popover shadow-2xl", children: languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onMouseDown: () => {
              setLang(l.code);
              setLangOpen(false);
            },
            className: `flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-accent ${l.code === lang ? "text-foreground" : "text-muted-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: l.label })
            ]
          },
          l.code
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "top", className: "mx-auto max-w-7xl px-6 py-10 md:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/10 px-3 py-1 text-xs font-medium text-emerald-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-accent beacon" }),
          t.hero.eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-4xl font-semibold leading-[1.05] tracking-tight text-transparent md:text-6xl", children: t.hero.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg", children: t.hero.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: PROFILE.whatsapp,
            target: "_blank",
            rel: "noreferrer",
            className: "group mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-accent to-emerald-accent/70 px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.02]",
            children: [
              t.hero.cta,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { id: "about", className: "md:col-span-2 md:row-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusWidget, { t, lang }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineWidget, { t, lang }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { className: "md:col-span-3 md:row-span-2", padded: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TerminalWidget, { t }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { id: "stack", className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsWidget, { t }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { id: "projects", className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsWidget, { t, lang }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { id: "courses", className: "md:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CoursesWidget, { t, lang }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mt-16 border-t border-border/60 pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          "— ",
          t.nav.contact
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight md:text-4xl", children: t.contact.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-muted-foreground", children: t.contact.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SocialLink,
            {
              href: PROFILE.whatsapp,
              icon: MessageCircle,
              label: t.contact.whatsapp,
              handle: PROFILE.whatsappLabel,
              highlight: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SocialLink,
            {
              href: PROFILE.github,
              icon: Github,
              label: "GitHub",
              handle: PROFILE.githubHandle
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SocialLink,
            {
              href: PROFILE.linkedin,
              icon: Linkedin,
              label: "LinkedIn",
              handle: PROFILE.linkedinHandle
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-16 border-t border-border/60 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        PROFILE.name,
        " — ",
        t.footer.rights
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono", children: [
        "built with care · ",
        lang.toUpperCase()
      ] })
    ] }) })
  ] });
}
function BentoCard({
  children,
  className = "",
  id,
  padded = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id,
      className: `group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all hover:border-indigo-accent/40 ${padded ? "p-6" : ""} ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-indigo-accent/5 opacity-0 transition-opacity group-hover:opacity-100" }),
        children
      ]
    }
  );
}
function StatusWidget({ t, lang }) {
  const [moodIdx, setMoodIdx] = reactExports.useState(0);
  const mood = MOODS[moodIdx];
  const current = TIMELINE[TIMELINE.length - 1][lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t.status.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] font-medium text-emerald-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-accent opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-accent" })
        ] }),
        t.status.activeNow
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.status.currentRole }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold", children: current.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.status.currentCompany }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/90", children: current.company })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
        " ",
        PROFILE.location
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setMoodIdx((i) => (i + 1) % MOODS.length),
        className: "mt-auto flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm transition-all hover:border-indigo-accent/40 hover:bg-secondary/60",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: mood.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-fade-in font-medium", children: mood[lang] }, moodIdx)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.status.changeMood })
        ]
      }
    )
  ] });
}
function TimelineWidget({ t, lang }) {
  const [activeYear, setActiveYear] = reactExports.useState(TIMELINE[TIMELINE.length - 1].year);
  const entry = TIMELINE.find((x) => x.year === activeYear);
  const data = entry[lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5 text-indigo-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t.timeline.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-xs text-muted-foreground", children: t.timeline.subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" }),
      TIMELINE.map((tl) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveYear(tl.year),
          className: `relative z-10 rounded-full border px-3 py-1 font-mono text-xs transition-all ${activeYear === tl.year ? "border-indigo-accent bg-indigo-accent text-background shadow-lg shadow-indigo-accent/30" : "border-border bg-card text-muted-foreground hover:border-indigo-accent/50 hover:text-foreground"}`,
          children: tl.year
        },
        tl.year
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid animate-fade-in gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-secondary/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.timeline.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold", children: data.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-wider text-muted-foreground", children: t.timeline.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/90", children: data.company })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-secondary/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: t.timeline.achievement }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-foreground/90", children: data.achievement })
      ] })
    ] }, activeYear)
  ] });
}
function TerminalWidget({ t }) {
  const [history, setHistory] = reactExports.useState(
    t.terminal.welcome.map((text) => ({ kind: "out", text }))
  );
  const [input, setInput] = reactExports.useState("");
  const endRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);
  const exec = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const out = [];
    if (cmd === "") return;
    if (cmd === "clear") {
      setHistory([]);
      return;
    } else if (cmd === "help") {
      out.push(...t.terminal.help);
    } else if (cmd === "about") {
      out.push(t.terminal.about);
    } else if (cmd === "skills") {
      out.push(SKILLS.map((s) => `${s.name} [${s.level}%]`).join("  ·  "));
    } else if (cmd === "current") {
      const last = TIMELINE[TIMELINE.length - 1].en;
      out.push(`> ${last.role} @ ${last.company}`);
    } else if (cmd === "contact") {
      out.push(`whatsapp → ${PROFILE.whatsapp}`);
      out.push(`linkedin → ${PROFILE.linkedin}`);
      out.push(`github   → ${PROFILE.github}`);
    } else {
      out.push(t.terminal.unknown);
    }
    setHistory((h) => [
      ...h,
      { kind: "in", text: `${t.terminal.prompt} ${raw}` },
      ...out.map((text) => ({ kind: "out", text }))
    ]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-[420px] flex-col bg-[oklch(0.12_0.02_250)] font-mono text-[13px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/60 px-4 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5 text-emerald-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: t.terminal.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-accent/70" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "crt flex-1 overflow-y-auto p-4 leading-relaxed", children: [
      history.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: line.kind === "in" ? "text-foreground" : "whitespace-pre-wrap text-emerald-accent/90",
          children: line.text
        },
        i
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          exec(input);
          setInput("");
        },
        className: "flex items-center gap-2 border-t border-border/60 px-4 py-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-accent", children: t.terminal.prompt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: input,
              onChange: (e) => setInput(e.target.value),
              autoComplete: "off",
              spellCheck: false,
              className: "flex-1 bg-transparent text-foreground outline-none caret-emerald-accent"
            }
          )
        ]
      }
    )
  ] });
}
function SkillsWidget({ t }) {
  const repos = PROJECTS.map((p) => p.repo).filter(Boolean);
  const { data, loading } = useAggregateLanguages(repos);
  const JAVA_FIXED = 78;
  const REACT_FIXED = 80;
  const PHP_FIXED = 50;
  const skills = (() => {
    if (!data || data.length === 0) {
      return SKILLS.map((s) => ({
        name: s.name,
        level: s.name === "Java" ? JAVA_FIXED : s.name === "React" ? REACT_FIXED : s.name === "PHP" ? PHP_FIXED : s.level,
        color: langColor(s.name)
      }));
    }
    const max = Math.max(...data.map((d) => d.percent));
    const list = data.map((d) => ({
      name: d.name,
      level: Math.round(d.percent / max * 100),
      color: langColor(d.name)
    }));
    const hasJava = list.some((s) => s.name === "Java");
    const mapped = hasJava ? list.map(
      (s) => s.name === "Java" ? { ...s, level: JAVA_FIXED } : s
    ) : [...list, { name: "Java", level: JAVA_FIXED, color: langColor("Java") }];
    const ensurePHP = mapped.some((s) => s.name === "PHP") ? mapped.map(
      (s) => s.name === "PHP" ? { ...s, level: PHP_FIXED } : s
    ) : [...mapped, { name: "PHP", level: PHP_FIXED, color: langColor("PHP") }];
    const ensureReact = ensurePHP.some((s) => s.name === "React") ? ensurePHP.map(
      (s) => s.name === "React" ? { ...s, level: REACT_FIXED } : s
    ) : [...ensurePHP, { name: "React", level: REACT_FIXED, color: langColor("React") }];
    return ensureReact;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-3.5 w-3.5 text-indigo-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t.skills.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-xs text-muted-foreground", children: t.skills.subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2.5", children: loading && !data ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[58px] animate-pulse rounded-lg bg-secondary/40" }, i)) : skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillBubble, { skill: s }, s.name)) })
  ] });
}
function SkillBubble({ skill }) {
  const [hover, setHover] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      className: "group/skill cursor-default rounded-lg border border-border bg-secondary/30 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-indigo-accent/50",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: skill.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", children: [
            skill.level,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 overflow-hidden rounded-full bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all duration-700",
            style: { width: hover ? `${skill.level}%` : "20%", backgroundColor: skill.color }
          }
        ) })
      ]
    }
  );
}
function ProjectsWidget({ t, lang }) {
  const [idx, setIdx] = reactExports.useState(0);
  const p = PROJECTS[idx];
  const next = () => setIdx((i) => (i + 1) % PROJECTS.length);
  const prev = () => setIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-3.5 w-3.5 text-indigo-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t.projects.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-5 text-xs text-muted-foreground", children: [
      String(idx + 1).padStart(2, "0"),
      " / ",
      String(PROJECTS.length).padStart(2, "0")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-emerald-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: p.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: p[lang] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageBar, { repo: p.repo, fallback: p.stack }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: p.demo,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 text-foreground hover:opacity-70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
              " ",
              t.projects.demo
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: p.code,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
              " ",
              t.projects.code
            ]
          }
        )
      ] })
    ] }, idx),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border/60 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: prev,
          className: "inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs hover:border-indigo-accent/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5" }),
            " ",
            t.projects.prev
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: PROJECTS.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIdx(i),
          className: `h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-indigo-accent" : "w-1.5 bg-border hover:bg-muted-foreground"}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: next,
          className: "inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs hover:border-indigo-accent/50",
          children: [
            t.projects.next,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
function CoursesWidget({ t, lang }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5 text-indigo-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: t.courses.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 text-xs text-muted-foreground", children: t.courses.subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: COURSES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group/course flex flex-col rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-accent/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
                c.issuer,
                " · ",
                c.year
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-indigo-accent/10 text-indigo-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-foreground/80", children: c[lang].description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: c.certificateUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-emerald-accent transition-opacity hover:opacity-70",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" }),
                " ",
                t.courses.certificate
              ]
            }
          )
        ]
      },
      c.name
    )) })
  ] });
}
function SocialLink({
  href,
  icon: Icon,
  label,
  handle,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      className: `group flex items-center justify-between rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${highlight ? "border-emerald-accent/40 bg-emerald-accent/5 hover:border-emerald-accent" : "border-border bg-card hover:border-indigo-accent/40"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `grid h-10 w-10 place-items-center rounded-lg ${highlight ? "bg-emerald-accent/15 text-emerald-accent" : "bg-indigo-accent/15 text-indigo-accent"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: handle })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" })
      ]
    }
  );
}
function LanguageBar({ repo, fallback }) {
  const { loading, error, data } = useGithubLanguages(repo);
  if (!repo || error || data && data.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: fallback.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "rounded-md border border-indigo-accent/30 bg-indigo-accent/10 px-2 py-0.5 font-mono text-[11px] text-indigo-accent",
        children: s
      },
      s
    )) });
  }
  if (loading || !data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full animate-pulse rounded-full bg-secondary/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-16 animate-pulse rounded bg-secondary/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-12 animate-pulse rounded bg-secondary/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-14 animate-pulse rounded bg-secondary/60" })
      ] })
    ] });
  }
  const top = data.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-2 w-full overflow-hidden rounded-full bg-secondary/60", children: top.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: { width: `${l.percent}%`, backgroundColor: langColor(l.name) },
        title: `${l.name} ${l.percent.toFixed(1)}%`
      },
      l.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px]", children: top.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { backgroundColor: langColor(l.name) } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: l.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        l.percent.toFixed(1),
        "%"
      ] })
    ] }, l.name)) })
  ] });
}
const SplitComponent = Portfolio;
export {
  SplitComponent as component
};

import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Code2,
  ArrowRight,
  Globe,
  ChevronDown,
  Terminal as TerminalIcon,
  Sparkles,
  Briefcase,
  Cpu,
  Rocket,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Award,
} from "lucide-react";
import {
  languages,
  translations,
  PROFILE,
  TIMELINE,
  SKILLS,
  MOODS,
  PROJECTS,
  COURSES,
  type Lang,
} from "@/lib/i18n";
import { useGithubLanguages, useAggregateLanguages, langColor } from "@/hooks/useGithubLanguages";

export function Portfolio() {
  const [lang, setLang] = useState<Lang>("pt");
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen text-foreground antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-indigo-accent to-emerald-accent text-background">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-semibold">
              {PROFILE.handle}
              <span className="text-muted-foreground">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {(["about", "stack", "projects", "courses", "contact"] as const).map((k) => (
              <li key={k}>
                <a href={`#${k}`} className="transition-colors hover:text-foreground">
                  {t.nav[k]}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
            >
              <Globe className="h-3.5 w-3.5" />
              {languages.find((l) => l.code === lang)?.flag}{" "}
              {languages.find((l) => l.code === lang)?.label}
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-md border border-border bg-popover shadow-2xl">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onMouseDown={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors hover:bg-accent ${
                      l.code === lang ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span className="font-medium">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        {/* HERO */}
        <section className="mb-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/10 px-3 py-1 text-xs font-medium text-emerald-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent beacon" />
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-4xl font-semibold leading-[1.05] tracking-tight text-transparent md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </p>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-accent to-emerald-accent/70 px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-[1.02]"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </section>

        {/* BENTO GRID */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
          {/* Status Card */}
          <BentoCard id="about" className="md:col-span-2 md:row-span-1">
            <StatusWidget t={t} lang={lang} />
          </BentoCard>

          {/* Timeline */}
          <BentoCard className="md:col-span-4">
            <TimelineWidget t={t} lang={lang} />
          </BentoCard>

          {/* Terminal */}
          <BentoCard className="md:col-span-3 md:row-span-2" padded={false}>
            <TerminalWidget t={t} />
          </BentoCard>

          {/* Skills */}
          <BentoCard id="stack" className="md:col-span-3">
            <SkillsWidget t={t} />
          </BentoCard>

          {/* Projects */}
          <BentoCard id="projects" className="md:col-span-3">
            <ProjectsWidget t={t} lang={lang} />
          </BentoCard>

          {/* Courses */}
          <BentoCard id="courses" className="md:col-span-6">
            <CoursesWidget t={t} lang={lang} />
          </BentoCard>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 border-t border-border/60 pt-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            — {t.nav.contact}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.contact.title}</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">{t.contact.subtitle}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <SocialLink
              href={PROFILE.whatsapp}
              icon={MessageCircle}
              label={t.contact.whatsapp}
              handle={PROFILE.whatsappLabel}
              highlight
            />
            <SocialLink
              href={PROFILE.github}
              icon={Github}
              label="GitHub"
              handle={PROFILE.githubHandle}
            />
            <SocialLink
              href={PROFILE.linkedin}
              icon={Linkedin}
              label="LinkedIn"
              handle={PROFILE.linkedinHandle}
            />
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} — {t.footer.rights}
          </p>
          <p className="font-mono">built with care · {lang.toUpperCase()}</p>
        </div>
      </footer>
    </div>
  );
}

// ============ BENTO CARD ============
function BentoCard({
  children,
  className = "",
  id,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padded?: boolean;
}) {
  return (
    <div
      id={id}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all hover:border-indigo-accent/40 ${
        padded ? "p-6" : ""
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-indigo-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </div>
  );
}

// ============ STATUS WIDGET ============
function StatusWidget({ t, lang }: { t: (typeof translations)[Lang]; lang: Lang }) {
  const [moodIdx, setMoodIdx] = useState(0);
  const mood = MOODS[moodIdx];
  const current = TIMELINE[TIMELINE.length - 1][lang];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.status.title}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-accent" />
          </span>
          {t.status.activeNow}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {t.status.currentRole}
          </p>
          <p className="text-lg font-semibold">{current.role}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {t.status.currentCompany}
          </p>
          <p className="text-sm font-medium text-foreground/90">{current.company}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" /> {PROFILE.location}
        </div>
      </div>

      <button
        onClick={() => setMoodIdx((i) => (i + 1) % MOODS.length)}
        className="mt-auto flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-sm transition-all hover:border-indigo-accent/40 hover:bg-secondary/60"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">{mood.emoji}</span>
          <span key={moodIdx} className="animate-fade-in font-medium">
            {mood[lang]}
          </span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {t.status.changeMood}
        </span>
      </button>
    </div>
  );
}

// ============ TIMELINE ============
function TimelineWidget({ t, lang }: { t: (typeof translations)[Lang]; lang: Lang }) {
  const [activeYear, setActiveYear] = useState(TIMELINE[TIMELINE.length - 1].year);
  const entry = TIMELINE.find((x) => x.year === activeYear)!;
  const data = entry[lang];

  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Briefcase className="h-3.5 w-3.5 text-indigo-accent" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.timeline.title}
        </span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">{t.timeline.subtitle}</p>

      <div className="relative mb-6 flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
        {TIMELINE.map((tl) => (
          <button
            key={tl.year}
            onClick={() => setActiveYear(tl.year)}
            className={`relative z-10 rounded-full border px-3 py-1 font-mono text-xs transition-all ${
              activeYear === tl.year
                ? "border-indigo-accent bg-indigo-accent text-background shadow-lg shadow-indigo-accent/30"
                : "border-border bg-card text-muted-foreground hover:border-indigo-accent/50 hover:text-foreground"
            }`}
          >
            {tl.year}
          </button>
        ))}
      </div>

      <div key={activeYear} className="grid animate-fade-in gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-secondary/30 p-3">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {t.timeline.role}
          </p>
          <p className="mt-1 text-sm font-semibold">{data.role}</p>
          <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
            {t.timeline.company}
          </p>
          <p className="text-sm text-foreground/90">{data.company}</p>
        </div>
        <div className="rounded-lg border border-border bg-secondary/30 p-3">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {t.timeline.achievement}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">{data.achievement}</p>
        </div>
      </div>
    </div>
  );
}

// ============ TERMINAL ============
function TerminalWidget({ t }: { t: (typeof translations)[Lang] }) {
  const [history, setHistory] = useState<{ kind: "in" | "out"; text: string }[]>(
    t.terminal.welcome.map((text) => ({ kind: "out" as const, text })),
  );
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const exec = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: string[] = [];
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
      ...out.map((text) => ({ kind: "out" as const, text })),
    ]);
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col bg-[oklch(0.12_0.02_250)] font-mono text-[13px]">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-3.5 w-3.5 text-emerald-accent" />
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t.terminal.title}
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-accent/70" />
        </div>
      </div>

      <div className="crt flex-1 overflow-y-auto p-4 leading-relaxed">
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.kind === "in" ? "text-foreground" : "whitespace-pre-wrap text-emerald-accent/90"
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          exec(input);
          setInput("");
        }}
        className="flex items-center gap-2 border-t border-border/60 px-4 py-3"
      >
        <span className="text-emerald-accent">{t.terminal.prompt}</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent text-foreground outline-none caret-emerald-accent"
        />
      </form>
    </div>
  );
}

// ============ SKILLS BUBBLES ============
function SkillsWidget({ t }: { t: (typeof translations)[Lang] }) {
  const repos = PROJECTS.map((p) => p.repo).filter(Boolean) as string[];
  const { data, loading } = useAggregateLanguages(repos);

  // Build the skill list from real aggregated GitHub bytes.
  // Java is always pinned at 78% (user requirement) regardless of API data.
  const JAVA_FIXED = 78;
  // Fixed overrides requested by user
  const REACT_FIXED = 80;
  const PHP_FIXED = 50;
  const skills: { name: string; level: number; color: string }[] = (() => {
    if (!data || data.length === 0) {
      // Fallback while loading or if API failed: show static SKILLS
      return SKILLS.map((s) => ({
        name: s.name,
        level:
          s.name === "Java"
            ? JAVA_FIXED
            : s.name === "React"
              ? REACT_FIXED
              : s.name === "PHP"
                ? PHP_FIXED
                : s.level,
        color: langColor(s.name),
      }));
    }
    // Use percents directly so the highest-used language sits at 100% of the bar
    // and the rest are relative to it — keeps small repos readable.
    const max = Math.max(...data.map((d: { percent: number }) => d.percent));
    const list = data.map((d: { name: string; percent: number }) => ({
      name: d.name,
      level: Math.round((d.percent / max) * 100),
      color: langColor(d.name),
    }));
    // Ensure Java appears and is pinned at 78%
    const hasJava = list.some((s: { name: string }) => s.name === "Java");
    const mapped = hasJava
      ? list.map((s: { name: string; level: number; color: string }) =>
          s.name === "Java" ? { ...s, level: JAVA_FIXED } : s,
        )
      : [...list, { name: "Java", level: JAVA_FIXED, color: langColor("Java") }];

    // Apply overrides for PHP and ensure React present
    const ensurePHP = mapped.some((s: { name: string }) => s.name === "PHP")
      ? mapped.map((s: { name: string; level: number; color: string }) =>
          s.name === "PHP" ? { ...s, level: PHP_FIXED } : s,
        )
      : [...mapped, { name: "PHP", level: PHP_FIXED, color: langColor("PHP") }];

    const ensureReact = ensurePHP.some((s: { name: string }) => s.name === "React")
      ? ensurePHP.map((s: { name: string; level: number; color: string }) =>
          s.name === "React" ? { ...s, level: REACT_FIXED } : s,
        )
      : [...ensurePHP, { name: "React", level: REACT_FIXED, color: langColor("React") }];

    return ensureReact;
  })();

  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Cpu className="h-3.5 w-3.5 text-indigo-accent" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.skills.title}
        </span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">{t.skills.subtitle}</p>

      <div className="grid grid-cols-2 gap-2.5">
        {loading && !data
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[58px] animate-pulse rounded-lg bg-secondary/40" />
            ))
          : skills.map((s) => <SkillBubble key={s.name} skill={s} />)}
      </div>
    </div>
  );
}

function SkillBubble({ skill }: { skill: { name: string; level: number; color: string } }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group/skill cursor-default rounded-lg border border-border bg-secondary/30 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-indigo-accent/50"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-background/60">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: hover ? `${skill.level}%` : "20%", backgroundColor: skill.color }}
        />
      </div>
    </div>
  );
}

// ============ PROJECTS CAROUSEL ============
function ProjectsWidget({ t, lang }: { t: (typeof translations)[Lang]; lang: Lang }) {
  const [idx, setIdx] = useState(0);
  const p = PROJECTS[idx];
  const next = () => setIdx((i) => (i + 1) % PROJECTS.length);
  const prev = () => setIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-1 flex items-center gap-2">
        <Rocket className="h-3.5 w-3.5 text-indigo-accent" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.projects.title}
        </span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">
        {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
      </p>

      <div key={idx} className="flex-1 animate-fade-in">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-accent" />
          <h3 className="text-lg font-semibold">{p.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{p[lang]}</p>

        <LanguageBar repo={p.repo} fallback={p.stack} />

        <div className="mt-4 flex gap-4 text-xs">
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:opacity-70"
          >
            <ExternalLink className="h-3.5 w-3.5" /> {t.projects.demo}
          </a>
          <a
            href={p.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> {t.projects.code}
          </a>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <button
          onClick={prev}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs hover:border-indigo-accent/50"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> {t.projects.prev}
        </button>
        <div className="flex gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-indigo-accent" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs hover:border-indigo-accent/50"
        >
          {t.projects.next} <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

// ============ COURSES WIDGET ============
function CoursesWidget({ t, lang }: { t: (typeof translations)[Lang]; lang: Lang }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <Award className="h-3.5 w-3.5 text-indigo-accent" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.courses.title}
        </span>
      </div>
      <p className="mb-5 text-xs text-muted-foreground">{t.courses.subtitle}</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <div
            key={c.name}
            className="group/course flex flex-col rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold">{c.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </div>
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-indigo-accent/10 text-indigo-accent">
                <Award className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-foreground/80">{c[lang].description}</p>
            <a
              href={c.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-medium text-emerald-accent transition-opacity hover:opacity-70"
            >
              <ExternalLink className="h-3 w-3" /> {t.courses.certificate}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ SOCIAL LINK ============
function SocialLink({
  href,
  icon: Icon,
  label,
  handle,
  highlight,
}: {
  href: string;
  icon: typeof Github;
  label: string;
  handle: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-between rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${
        highlight
          ? "border-emerald-accent/40 bg-emerald-accent/5 hover:border-emerald-accent"
          : "border-border bg-card hover:border-indigo-accent/40"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-lg ${
            highlight
              ? "bg-emerald-accent/15 text-emerald-accent"
              : "bg-indigo-accent/15 text-indigo-accent"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{handle}</p>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
    </a>
  );
}

// ============ GITHUB LANGUAGE BAR ============
function LanguageBar({ repo, fallback }: { repo?: string; fallback: readonly string[] }) {
  const { loading, error, data } = useGithubLanguages(repo);

  if (!repo || error || (data && data.length === 0)) {
    return (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {fallback.map((s) => (
          <span
            key={s}
            className="rounded-md border border-indigo-accent/30 bg-indigo-accent/10 px-2 py-0.5 font-mono text-[11px] text-indigo-accent"
          >
            {s}
          </span>
        ))}
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="mt-4 space-y-2">
        <div className="h-2 w-full animate-pulse rounded-full bg-secondary/60" />
        <div className="flex gap-2">
          <div className="h-3 w-16 animate-pulse rounded bg-secondary/60" />
          <div className="h-3 w-12 animate-pulse rounded bg-secondary/60" />
          <div className="h-3 w-14 animate-pulse rounded bg-secondary/60" />
        </div>
      </div>
    );
  }

  const top = data.slice(0, 6);

  return (
    <div className="mt-4">
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary/60">
        {top.map((l) => (
          <div
            key={l.name}
            style={{ width: `${l.percent}%`, backgroundColor: langColor(l.name) }}
            title={`${l.name} ${l.percent.toFixed(1)}%`}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px]">
        {top.map((l) => (
          <span key={l.name} className="inline-flex items-center gap-1.5 text-muted-foreground">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor(l.name) }} />
            <span className="text-foreground">{l.name}</span>
            <span>{l.percent.toFixed(1)}%</span>
          </span>
        ))}
      </div>
    </div>
  );
}

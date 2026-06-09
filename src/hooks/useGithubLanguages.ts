import { useEffect, useState } from "react";

// Official GitHub language colors (subset, falls back to indigo accent).
const LANG_COLORS: Record<string, string> = {
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
  Handlebars: "#F7931E",
};

export function langColor(name: string): string {
  return LANG_COLORS[name] ?? "#818CF8";
}

export type LanguageEntry = { name: string; percent: number; bytes: number };

type State = {
  loading: boolean;
  error: string | null;
  data: LanguageEntry[] | null;
};

const CACHE_PREFIX = "gh-langs:";
const TTL_MS = 6 * 60 * 60 * 1000; // 6h

function readCache(repo: string): LanguageEntry[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + repo);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: LanguageEntry[] };
    if (Date.now() - parsed.ts > TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(repo: string, data: LanguageEntry[]) {
  try {
    localStorage.setItem(CACHE_PREFIX + repo, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* quota — ignore */
  }
}

export function useGithubLanguages(repo: string | undefined): State {
  const [state, setState] = useState<State>({
    loading: !!repo,
    error: null,
    data: repo ? readCache(repo) : null,
  });

  useEffect(() => {
    if (!repo) return;
    const cached = readCache(repo);
    if (cached) {
      setState({ loading: false, error: null, data: cached });
      return;
    }
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    fetch(`https://api.github.com/repos/${repo}/languages`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return (await r.json()) as Record<string, number>;
      })
      .then((raw) => {
        const total = Object.values(raw).reduce((a, b) => a + b, 0);
        if (total === 0) {
          if (!cancelled) setState({ loading: false, error: null, data: [] });
          return;
        }
        const entries: LanguageEntry[] = Object.entries(raw)
          .map(([name, bytes]) => ({
            name,
            bytes,
            percent: (bytes / total) * 100,
          }))
          .sort((a, b) => b.percent - a.percent);
        writeCache(repo, entries);
        if (!cancelled) setState({ loading: false, error: null, data: entries });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ loading: false, error: err.message, data: null });
      });
    return () => {
      cancelled = true;
    };
  }, [repo]);

  return state;
}

// Aggregate languages across multiple repos. Caches per-repo results via
// the same store as useGithubLanguages, so it shares with the projects widget.
export function useAggregateLanguages(repos: string[]): State {
  const key = repos.join("|");
  const [state, setState] = useState<State>({ loading: true, error: null, data: null });

  useEffect(() => {
    if (repos.length === 0) {
      setState({ loading: false, error: null, data: [] });
      return;
    }
    let cancelled = false;

    const fetchOne = async (repo: string): Promise<Record<string, number>> => {
      const cached = readCache(repo);
      if (cached) {
        const obj: Record<string, number> = {};
        for (const c of cached) obj[c.name] = c.bytes;
        return obj;
      }
      try {
        const r = await fetch(`https://api.github.com/repos/${repo}/languages`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!r.ok) return {};
        const raw = (await r.json()) as Record<string, number>;
        const total = Object.values(raw).reduce((a, b) => a + b, 0);
        if (total > 0) {
          const entries: LanguageEntry[] = Object.entries(raw)
            .map(([name, bytes]) => ({ name, bytes, percent: (bytes / total) * 100 }))
            .sort((a, b) => b.percent - a.percent);
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
      const totals: Record<string, number> = {};
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
      const entries: LanguageEntry[] = Object.entries(totals)
        .map(([name, bytes]) => ({ name, bytes, percent: (bytes / sum) * 100 }))
        .sort((a, b) => b.percent - a.percent);
      setState({ loading: false, error: null, data: entries });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}

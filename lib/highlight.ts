import { getSingletonHighlighter } from "shiki";

const LANG_ALIASES: Record<string, string> = {
  starlark: "python",
  sh: "bash",
  js: "javascript",
  ts: "typescript",
  "c++": "cpp",
};

export async function highlightCode(code: string, rawLang: string): Promise<string> {
  const hl = await getSingletonHighlighter({
    themes: ["github-light", "github-dark-dimmed"],
    langs: ["bash", "python", "typescript", "javascript", "cpp", "yaml", "shell", "text"],
  });

  const lang = LANG_ALIASES[rawLang.toLowerCase()] ?? rawLang.toLowerCase();
  const supported = hl.getLoadedLanguages() as string[];
  const safeLang = supported.includes(lang) ? lang : "text";

  return hl.codeToHtml(code, {
    lang: safeLang,
    themes: { light: "github-light", dark: "github-dark-dimmed" },
    defaultColor: false,
  });
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { highlightCode } from "@/lib/highlight";
import BackToTop from "@/components/BackToTop";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Nikhil Reddy Mara`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

async function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      result.push(
        <h2 key={i} style={{ fontFamily: "var(--font-mono), monospace", fontSize: "13px", color: "var(--text-label)", letterSpacing: "0.04em", textTransform: "uppercase", margin: "38px 0 16px", fontWeight: 600 }}>
          {line.slice(3)}
        </h2>
      );
      i++; continue;
    }

    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      const code = codeLines.join("\n");
      const highlighted = await highlightCode(code, lang || "text");
      result.push(
        <div
          key={i}
          className="shiki-wrap"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
      i++; continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      result.push(
        <ul key={i} style={{ marginBottom: "22px", paddingLeft: "20px" }}>
          {items.map((item, j) => <li key={j} style={{ marginBottom: "4px" }}>{item}</li>)}
        </ul>
      );
      continue;
    }

    result.push(<p key={i} style={{ marginBottom: "22px" }}>{line}</p>);
    i++;
  }

  return result;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await renderContent(post.content);

  return (
    <div className="page-wrap">
      <div style={{ padding: "28px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/blog" style={{ fontSize: "12px", color: "var(--text-label)", display: "flex", gap: "8px", alignItems: "center" }}
          className="hover-nav">
          ← articles
        </Link>
        <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>{post.tags[0]}</span>
      </div>

      <article style={{ padding: "24px 0 80px" }}>
        <div style={{ fontSize: "11px", color: "var(--text-label)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px" }}>
          {new Date(post.date).toLocaleDateString("en-SE", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <h1 className="font-serif" style={{ fontSize: "34px", lineHeight: 1.25, fontWeight: 500, color: "var(--text-bright)", letterSpacing: "-0.01em" }}>
          {post.title}
        </h1>
        <p className="font-serif" style={{ marginTop: "18px", color: "var(--text-muted)", fontSize: "14px", fontStyle: "italic" }}>
          {post.description}
        </p>

        <div style={{ height: "1px", background: "var(--border)", margin: "36px 0" }} />

        <div className="font-serif" style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--text-body)" }}>
          {content}
        </div>

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/blog" style={{ fontSize: "12px", color: "var(--text-label)" }} className="hover-nav">
            ← articles
          </Link>
          <BackToTop />
        </div>
      </article>
    </div>
  );
}

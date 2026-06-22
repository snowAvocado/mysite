import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Articles — Nikhil Reddy Mara",
};

export default function Blog() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="page-wrap">
      <section style={{ padding: "72px 0 24px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "34px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>{posts.length} articles</span>
        </div>

        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              style={{ display: "block", padding: "22px 18px", margin: "0 -18px", borderRadius: "8px" }}
              className="post-row"
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "18px" }}>
                <span style={{ fontSize: "11px", color: "var(--text-dim)", flexShrink: 0, width: "74px", paddingTop: "3px" }}>
                  {new Date(post.date).toLocaleDateString("en-SE", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".")}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 className="font-serif" style={{ fontSize: "21px", fontWeight: 500, color: "var(--text-bright)", lineHeight: 1.3, letterSpacing: "-0.005em" }}>
                    {post.title}
                  </h2>
                  <p style={{ marginTop: "7px", color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, maxWidth: "520px" }}>
                    {post.description}
                  </p>
                  <div style={{ marginTop: "12px" }}>
                    <span style={{ fontSize: "11px", color: "var(--text-label)" }}>{post.tags[0]}</span>
                  </div>
                </div>
              </div>
            </Link>
            <div style={{ height: "1px", background: "var(--border-subtle)", margin: "0 -18px" }} />
          </FadeIn>
        ))}
      </section>
    </div>
  );
}

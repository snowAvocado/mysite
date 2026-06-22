import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import GreetingCycle from "@/components/GreetingCycle";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="page-wrap">

      <section style={{ padding: "96px 0 80px", borderBottom: "1px solid var(--border)" }}>
        <GreetingCycle />
      </section>

      <section style={{ padding: "56px 0 24px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "34px" }}>
          <h2 style={{ fontSize: "12px", color: "var(--text-label)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
            Recent Articles
          </h2>
          <Link href="/blog" style={{ fontSize: "11px", color: "var(--text-dim)" }}>
            all articles ↗
          </Link>
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
                  <h3 className="font-serif" style={{ fontSize: "21px", fontWeight: 500, color: "var(--text-bright)", lineHeight: 1.3, letterSpacing: "-0.005em" }}>
                    {post.title}
                  </h3>
                  <p style={{ marginTop: "7px", color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6 }}>
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

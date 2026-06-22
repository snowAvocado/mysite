"use client";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--text-dim)",
        fontSize: "11px",
        letterSpacing: "0.08em",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s",
      }}
      className="hover-nav"
    >
      ↑ back to top
    </button>
  );
}

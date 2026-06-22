"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: "16px", height: "16px" }} />;

  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-btn"
      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-label)", padding: "2px", display: "flex", alignItems: "center" }}
    >
      {isDark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--navbar-bg)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)",
      transition: "background 0.2s, border-color 0.2s",
      viewTransitionName: "site-header",
    } as React.CSSProperties}>
      <header className="nav-inner">
        <Link href="/" style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-bright)", letterSpacing: "0.02em" }}>
          nikhil.dev
        </Link>
        <nav className="nav-links" style={{ display: "flex", gap: "24px", fontSize: "12px", letterSpacing: "0.04em", alignItems: "center" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: pathname === href ? "var(--text-bright)" : "var(--text-label)", transition: "color 0.15s" }}
              className="hover-nav"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}

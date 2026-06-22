"use client";
import { useState, useEffect } from "react";

const phrases = ["Hello World", "Welcome", "Glad you are here"];

export default function GreetingCycle() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 2000);
      return () => clearTimeout(t);
    }

    const phrase = phrases[phraseIdx];

    if (!deleting && displayed === phrase) {
      setPaused(true);
      return;
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      setDisplayed(deleting
        ? displayed.slice(0, -1)
        : phrase.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, phraseIdx, deleting, paused]);

  return (
    <span
      className="font-serif"
      style={{
        fontSize: "clamp(40px, 8vw, 72px)",
        fontWeight: 400,
        color: "var(--text-bright)",
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        display: "block",
      }}
    >
      {displayed}
      <span style={{
        display: "inline-block",
        width: "3px",
        height: "0.85em",
        background: "var(--text-dim)",
        marginLeft: "4px",
        verticalAlign: "text-bottom",
        animation: "blink 1s step-end infinite",
      }} />
    </span>
  );
}

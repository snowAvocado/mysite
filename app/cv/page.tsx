import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Nikhil Reddy Mara",
};

const experience = [
  {
    title: "Senior Software Engineer (Consultant)",
    company: "Ericsson",
    location: "Stockholm, Sweden",
    years: "July 2022 – December 2025",
    bullets: [
      "Contributed to Ericsson's Radio Baseband C++ Software as part of an agile team.",
      "Acted as single point of contact for the domain, owning features end-to-end from design and implementation through testing, deployment, and stakeholder delivery.",
      "Led migration of build system from Make to Bazel; implemented Bazel configurations in Starlark and maintained cross-platform builds across multiple hardware platforms, improving reliability, reproducibility, and developer iteration speed.",
      "Contributed to the transition of a baseband monolith into microservices — design, deployment, and testing.",
      "Drove cross-team technical initiatives and established consistent engineering standards.",
      "Benchmarked an internal C-based binary serialization library against Google Protocol Buffers, demonstrating superior serialization performance.",
    ],
    tech: ["C++", "Python", "Shell", "Linux", "Bazel", "Protocol Buffers", "Docker", "Jenkins", "Git"],
  },
  {
    title: "Software Developer",
    company: "Ericsson",
    location: "Linköping, Sweden",
    years: "October 2017 – December 2020",
    bullets: [
      "Worked in an XFT (cross-functional team), actively involved in design-to-release of 5G RAN Layer 3 Software.",
      "Implemented RAN NSA and SA procedures in C++ for new UE based on 3GPP specs 38.331.",
      "Supported testers and product owners; fixed bugs for released products.",
    ],
    tech: ["C++", "Protocol Buffers", "Google Test", "Erlang", "Git", "GDB", "Jenkins"],
  },
  {
    title: "Intern / Thesis",
    company: "Ericsson",
    location: "Gothenburg, Sweden",
    years: "February 2017 – September 2017",
    bullets: [
      "Developed generic deployment solutions for Telecom applications in cloud using Terraform, Cloudify, and OpenStack.",
    ],
    tech: ["Terraform", "Cloudify", "OpenStack"],
  },
];

const education = [
  { degree: "Master of Science, Electrical Engineering", school: "Blekinge Tekniska Högskola", location: "Sweden", period: "January 2016 – June 2017", notes: "Computer Networks, Software Development" },
  { degree: "Bachelor of Technology, Electronics and Communication Engineering", school: "JNTUH College of Engineering", location: "Hyderabad, India", period: "2012 – 2016", notes: "Introductory Programming, Communication Systems, Networking" },
];

const certifications = [
  { name: "Algorithms — Design and Analysis", issuer: "Stanford University / Coursera", date: "Feb 2026" },
  { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "CNCF", date: "Apr 2026" },
  { name: "Object-Oriented Data Structures", issuer: "Coursera", date: "Feb 2023" },
];

const publications = [
  { name: "Generic Deployment Tools for Telecom Apps in Cloud", date: "April 2018" },
];

const projects = [
  { name: "MAXHEAPQ", description: "A Python package implementing a max binary heap data structure. Published on PyPI as a hands-on exercise to learn Python packaging and distribution.", tech: ["Python"], date: "Jan 2025", link: "https://github.com/snowAvocado" },
];

export default function CV() {
  const sectionLabel: React.CSSProperties = { fontSize: "12px", color: "var(--text-label)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, marginBottom: "24px", paddingBottom: "10px", borderBottom: "1px solid var(--border)" };
  const tag: React.CSSProperties = { fontSize: "11px", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "3px 9px", borderRadius: "100px", letterSpacing: "0.02em" };
  const row: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" as const, padding: "14px 0", borderBottom: "1px solid var(--border-subtle)" };

  return (
    <div className="page-wrap">

      <section style={{ padding: "72px 0 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ fontSize: "11px", color: "var(--text-label)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>Software Engineer</div>
        <h1 className="font-serif" style={{ fontSize: "32px", fontWeight: 400, color: "var(--text-bright)", lineHeight: 1.25, marginBottom: "8px" }}>Nikhil Reddy Mara</h1>
        <p style={{ color: "var(--text-dim)", fontSize: "13px" }}>
          Stockholm, Sweden ·{" "}
          <a href="mailto:nikhilreddymara@gmail.com" style={{ color: "var(--text-label)" }}>nikhilreddymara@gmail.com</a>
          {" · "}
          <a href="https://github.com/snowAvocado" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-label)" }}>github</a>
          {" · "}
          <a href="https://www.linkedin.com/in/nikhil-reddy-mara/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-label)" }}>linkedin</a>
        </p>
      </section>

      <section style={{ padding: "48px 0 0" }}>
        <h2 style={sectionLabel}>Experience</h2>
        <div style={{ display: "grid", gap: "40px" }}>
          {experience.map((job) => (
            <div key={job.title + job.years}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                <div>
                  <span style={{ color: "var(--text-bright)", fontSize: "13px", fontWeight: 500 }}>{job.title}</span>
                  <span style={{ color: "var(--text-dim)", margin: "0 8px" }}>·</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>{job.company}</span>
                </div>
                <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>{job.years}</span>
              </div>
              <p style={{ color: "var(--text-dim)", fontSize: "12px", margin: "4px 0 14px" }}>{job.location}</p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "8px", marginBottom: "16px" }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "var(--text-muted)", paddingLeft: "12px", borderLeft: "2px solid var(--border)", lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {job.tech.map((t) => <span key={t} style={tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 0 0" }}>
        <h2 style={sectionLabel}>Projects</h2>
        {projects.map((p) => (
          <div key={p.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-bright)", fontSize: "13px", fontWeight: 500 }}>{p.name} ↗</a>
              <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>{p.date}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "10px" }}>{p.description}</p>
            <div style={{ display: "flex", gap: "6px" }}>{p.tech.map((t) => <span key={t} style={tag}>{t}</span>)}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "48px 0 0" }}>
        <h2 style={sectionLabel}>Education</h2>
        {education.map((edu) => (
          <div key={edu.degree} style={row}>
            <div>
              <span style={{ color: "var(--text-bright)", fontSize: "13px", fontWeight: 500 }}>{edu.school}</span>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "3px" }}>{edu.degree} · {edu.location}</p>
              <p style={{ color: "var(--text-dim)", fontSize: "12px", marginTop: "2px" }}>{edu.notes}</p>
            </div>
            <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>{edu.period}</span>
          </div>
        ))}
      </section>

      <section style={{ padding: "48px 0 0" }}>
        <h2 style={sectionLabel}>Certifications</h2>
        {certifications.map((c) => (
          <div key={c.name} style={row}>
            <div>
              <span style={{ color: "var(--text-bright)", fontSize: "13px" }}>{c.name}</span>
              <span style={{ color: "var(--text-dim)", fontSize: "12px", marginLeft: "8px" }}>{c.issuer}</span>
            </div>
            <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>{c.date}</span>
          </div>
        ))}
      </section>

      <section style={{ padding: "48px 0 56px" }}>
        <h2 style={sectionLabel}>Publications</h2>
        {publications.map((p) => (
          <div key={p.name} style={row}>
            <span style={{ color: "var(--text-bright)", fontSize: "13px" }}>{p.name}</span>
            <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>{p.date}</span>
          </div>
        ))}
      </section>

    </div>
  );
}

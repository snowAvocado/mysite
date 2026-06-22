export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      marginTop: "32px",
      transition: "border-color 0.2s",
    }}>
      <div style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "32px 28px 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap" as const,
        gap: "8px",
      }}>
        <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} Nikhil Reddy Mara
        </span>
      </div>
    </footer>
  );
}

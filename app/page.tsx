export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
        Logicl Workflows
      </h1>
      <p style={{ marginTop: 12, fontSize: 18, opacity: 0.85 }}>
        Build reliable AI workflows with approvals, audit trails, and reusable templates.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
        <a
          href="/product"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            background: "black",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View Product
        </a>
        <a
          href="/templates"
          style={{
            padding: "10px 14px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,.2)",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Browse Templates
        </a>
      </div>
    </main>
  );
}

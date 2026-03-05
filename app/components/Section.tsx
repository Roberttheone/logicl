import React from "react";
export default function Section({ eyebrow, title, lead, children }: { eyebrow?: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 22 }}>
      <div style={{ display: "grid", gap: 10 }}>
        {eyebrow && <span className="pill">{eyebrow}</span>}
        <h2 className="h2">{title}</h2>
        {lead && <p className="p" style={{ maxWidth: 820 }}>{lead}</p>}
      </div>
      <div style={{ marginTop: 14 }}>{children}</div>
    </section>
  );
}

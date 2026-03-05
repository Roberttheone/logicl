import React from "react";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="pill"
      style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(148,163,184,.18)" }}
    >
      {children}
    </span>
  );
}

export function MockScreenshot({
  title,
  subtitle,
  chips = [],
}: {
  title: string;
  subtitle: string;
  chips?: string[];
}) {
  return (
    <div className="card lift" style={{ padding: 14 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontWeight: 900 }}>{title}</div>
          <div className="kicker" style={{ marginTop: 4 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {chips.slice(0, 3).map((c) => <Chip key={c}>{c}</Chip>)}
        </div>
      </div>

      {/* Faux UI panel */}
      <div
        className="card"
        style={{
          padding: 12,
          marginTop: 12,
          borderRadius: 16,
          background:
            "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01))",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span className="pill">Workflow</span>
          <span className="pill">Draft</span>
          <span className="pill">Policy: strict</span>
        </div>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1.05fr .95fr", marginTop: 12 }}>
          <div className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <b>Input</b>
              <span className="kicker">email • pdf • csv</span>
            </div>
            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {[
                "Subject: Renewal request + pricing questions",
                "Attachments: policy.pdf, pricing.csv",
                "Customer: Mid-market, 120 seats",
              ].map((line, i) => (
                <div key={i} style={{ height: 10, borderRadius: 8, background: "rgba(203,213,225,.14)" }} />
              ))}
              <div style={{ height: 10, borderRadius: 8, background: "rgba(96,165,250,.20)" }} />
            </div>
          </div>

          <div className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <b>Output</b>
              <span className="kicker">Why • Sources • Confidence</span>
            </div>
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              <div style={{ height: 10, borderRadius: 8, background: "rgba(52,211,153,.18)" }} />
              <div style={{ height: 10, borderRadius: 8, background: "rgba(203,213,225,.14)" }} />
              <div style={{ height: 10, borderRadius: 8, background: "rgba(203,213,225,.14)" }} />
              <div style={{ height: 10, borderRadius: 8, background: "rgba(251,191,36,.18)" }} />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              <span className="pill">Confidence 0.87</span>
              <span className="pill">3 sources</span>
              <span className="pill">Needs approval</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <span className="btn" style={{ padding: ".55rem .75rem", borderRadius: 12 }}>Open explain panel</span>
          <span className="btn btn-primary" style={{ padding: ".55rem .75rem", borderRadius: 12 }}>Request approval</span>
        </div>
      </div>
    </div>
  );
}

export function MiniTemplateCard({
  name,
  outcome,
  inputs,
  steps,
  tags,
}: {
  name: string;
  outcome: string;
  inputs: string[];
  steps: string[];
  tags: string[];
}) {
  return (
    <div className="card lift" style={{ padding: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16 }}>{name}</div>
          <div className="kicker" style={{ marginTop: 4 }}>{outcome}</div>
        </div>
        <span className="pill">Template</span>
      </div>

      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(0, 1fr))", marginTop: 12 }}>
        <div className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }}>
          <b>Inputs</b>
          <ul className="p" style={{ paddingLeft: 18, marginTop: 6 }}>
            {inputs.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
        <div className="card" style={{ padding: 12, borderRadius: 14, background: "rgba(255,255,255,.02)" }}>
          <b>Steps</b>
          <ul className="p" style={{ paddingLeft: 18, marginTop: 6 }}>
            {steps.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
        {tags.map((t) => <Chip key={t}>{t}</Chip>)}
      </div>

      <div style={{ marginTop: 12 }}>
        <a className="btn" href="#cta">Use this template</a>
      </div>
    </div>
  );
}

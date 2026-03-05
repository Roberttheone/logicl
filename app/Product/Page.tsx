import Section from "../components/Section";
import { MockScreenshot } from "../components/UIMocks";

export const metadata = {
  title: "Product — Logicl Workflows",
  description: "See how Logicl turns inputs into explainable, auditable decisions with approvals and policy rules.",
};

export default function Product() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <section className="card" style={{ padding: 18 }}>
        <div className="card" style={{ padding: 22, borderRadius: 18 }}>
          <span className="pill">Product tour</span>
          <h1 className="h1" style={{ marginTop: 10 }}>Workflows that ship decisions—with receipts.</h1>
          <p className="p" style={{ maxWidth: 860, marginTop: 10 }}>
            Logicl Workflows is built for teams who need automation plus governance: explainability, policy rules, approvals,
            and an audit trail. Use it for support, sales ops, finance ops, procurement, and compliance.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/#cta">Request a demo</a>
            <a className="btn" href="/templates">Browse templates</a>
            <a className="btn" href="/#pricing">Pricing</a>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Screens"
        title="A familiar UI: input on the left, decisions on the right."
        lead="These are mock UI panels you can replace with real screenshots later. They’re designed to show what matters: evidence, controls, and outcomes."
      >
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <MockScreenshot
            title="Workflow Builder"
            subtitle="Connect inputs → add steps → define actions"
            chips={["Templates", "Policy rules", "Approvals"]}
          />
          <MockScreenshot
            title="Explain Panel"
            subtitle="Why + Sources + Confidence per output"
            chips={["Citations", "Risk flags", "Run replay"]}
          />
          <MockScreenshot
            title="Audit Log"
            subtitle="Who ran what, when, and why"
            chips={["Governance", "Retention", "Exports"]}
          />
        </div>
      </Section>

      <Section
        eyebrow="Controls"
        title="Guardrails that make AI usable in the real world."
        lead="Most teams don’t need ‘more AI’. They need AI that’s safe, consistent, and reviewable."
      >
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            { t: "Policy checks", d: "Enforce required sources, disallow restricted claims, and redact sensitive data." },
            { t: "Approval steps", d: "Draft → review → approve → send, with routing and escalation." },
            { t: "Audit & replay", d: "Replay a run with the same inputs to understand decisions and changes." },
            { t: "Retention controls", d: "Choose what to store, for how long, and export/delete on request." },
            { t: "Role-based access", d: "Admins manage policies; editors build workflows; viewers audit outcomes." },
            { t: "Observability", d: "Track accuracy, drift, and template performance over time." },
          ].map((x) => (
            <div key={x.t} className="card lift" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900 }}>{x.t}</div>
              <p className="p" style={{ marginTop: 8 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Implementation"
        title="Start simple. Prove ROI. Expand safely."
        lead="The fastest route to value is one workflow that saves time immediately—then replicate it across teams."
      >
        <div className="card" style={{ padding: 18 }}>
          <ol className="p" style={{ paddingLeft: 18 }}>
            <li><b>Pick a workflow</b> (e.g., inbound email triage → draft reply → approval).</li>
            <li><b>Define policy rules</b> (sources required, claims disallowed, redactions).</li>
            <li><b>Measure outcomes</b> (handle time reduction, CSAT, conversion, error rates).</li>
            <li><b>Roll out templates</b> to other departments once the guardrails work.</li>
          </ol>
        </div>
      </Section>

      <Section eyebrow="Next" title="Ready to see it on your workflows?" lead="We’ll set up one workflow on a sandbox dataset and show explainability + controls end-to-end.">
        <div className="card" style={{ padding: 18 }}>
          <a className="btn btn-primary" href="/#cta">Request a demo</a>
          <a className="btn" style={{ marginLeft: 10 }} href="/templates">Browse templates</a>
        </div>
      </Section>
    </div>
  );
}

import Section from "../components/Section";
import { MiniTemplateCard } from "../components/UIMocks";

export const metadata = {
  title: "Templates — Logicl Workflows",
  description: "Browse ready-to-use workflow templates for support, sales ops, finance ops, and compliance.",
};

const templates = [
  {
    name: "Inbound Email → Compliant Reply Draft",
    outcome: "Draft a policy-safe response with citations and confidence",
    inputs: ["Email thread", "Policy doc", "Pricing sheet"],
    steps: ["Extract intent + entities", "Apply policy rules", "Draft reply + explain panel", "Route for approval"],
    tags: ["Support", "Compliance", "Fast ROI"],
  },
  {
    name: "Invoice PDF → Structured Fields + Flags",
    outcome: "Extract totals, line items, and anomalies with reasons",
    inputs: ["Invoice PDF", "Supplier list", "Rules: GST/tax"],
    steps: ["OCR/parse", "Normalize fields", "Detect anomalies", "Export JSON/CSV"],
    tags: ["Finance Ops", "Extraction", "Audit-ready"],
  },
  {
    name: "Meeting Notes → Action Items + Owners",
    outcome: "Generate tasks, owners, and due dates; publish to tools",
    inputs: ["Transcript/notes", "Team roster"],
    steps: ["Summarise", "Extract action items", "Assign owners", "Create tasks via webhook"],
    tags: ["Ops", "Productivity", "Templates"],
  },
  {
    name: "Lead Intake → Qualification + Next Best Action",
    outcome: "Score and route leads with an explain panel",
    inputs: ["Form/webhook", "CRM history", "Product fit rules"],
    steps: ["Enrich", "Score", "Explain decision", "Route to SDR/AE"],
    tags: ["Sales Ops", "Routing", "Governance"],
  },
  {
    name: "Procurement Quotes → Comparison Memo",
    outcome: "Compare quotes and produce a decision memo with sources",
    inputs: ["2–4 quotes", "Requirements doc"],
    steps: ["Extract pricing/terms", "Compare", "Summarise risks", "Draft memo"],
    tags: ["Procurement", "Decision memo", "Citations"],
  },
  {
    name: "Policy Doc → SOP Generator",
    outcome: "Convert policy into a step-by-step SOP with checks",
    inputs: ["Policy doc", "Role definitions"],
    steps: ["Outline SOP", "Add checks", "Add escalation paths", "Publish to knowledge base"],
    tags: ["Compliance", "Docs", "Repeatable"],
  },
];

export default function Templates() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <section className="card" style={{ padding: 18 }}>
        <div className="card" style={{ padding: 22, borderRadius: 18 }}>
          <span className="pill">Templates library</span>
          <h1 className="h1" style={{ marginTop: 10 }}>Start with proven workflows.</h1>
          <p className="p" style={{ maxWidth: 860, marginTop: 10 }}>
            Templates are the fastest way to get value. Pick one, connect your inputs, set your policy rules, and you’ll
            have a production-ready workflow with explainability and approvals.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="/#cta">Request a demo</a>
            <a className="btn" href="/product">See product</a>
            <a className="btn" href="/#pricing">Pricing</a>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Library"
        title="Six high-impact templates"
        lead="These are the ‘first 6’ that make Logicl feel like a real product from day one. Add more as you refine your ICP."
      >
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {templates.map((t) => (
            <MiniTemplateCard
              key={t.name}
              name={t.name}
              outcome={t.outcome}
              inputs={t.inputs}
              steps={t.steps}
              tags={t.tags}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next"
        title="Want custom templates for your team?"
        lead="Tell us your top 3 workflows and we’ll turn them into templates with policies, approvals, and run logs."
      >
        <div className="card" style={{ padding: 18 }}>
          <a className="btn btn-primary" href="/#cta">Request a demo</a>
          <a className="btn" style={{ marginLeft: 10 }} href="mailto:hello@logicl.com.au?subject=Logicl%20templates">Email instead</a>
        </div>
      </Section>
    </div>
  );
}
